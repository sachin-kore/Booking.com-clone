import { format } from 'date-fns'
import React, { useState } from 'react'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { Navbar } from '../../components/Navbar/Navbar'
import { SearchItem } from '../../components/SearchItem/SearchItem'
import useFetch from '../../hooks/useFetch'
import './List.css'

export const List = () => {
    const location = useLocation();
    const [date, setdate] = useState(location.state.date)
    const [destination, setDestination] = useState(location.state.destination);
    const [Options, setOptions] = useState(location.state.options);
    const [Opendate, setOpendate] = useState(false);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);


    const { data, loading, error, refetch } = useFetch(`http://localhost:5000/api/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`);
    const handleSearch = () => {
        refetch();
    }

    return (
        <div style={{ backgroundColor: "white" }}>
            <Navbar />
            <Header type="list" />
            <div className='listContainer'>
                <div className='listWrapper'>
                    <div className='listSearch'>
                        <h1 className='lsTitle'>Search</h1>
                        <div className='lsItem'>
                            <label>Destination</label>
                            <input type="text" placeholder={destination} />
                        </div>
                        <div className='lsItem'>
                            <label>Check-in Date</label>
                            <span onClick={() => setOpendate(!Opendate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {Opendate && <DateRange
                                ranges={date}
                                minDate={new Date()}
                            />}
                        </div>
                        <div className='lsItem'>
                            <label>Options</label>
                            <div className='lsallItems'>
                                <div className='lsOptionItem'>
                                    <span className='lsOptionText'>Min price <small>( per night )</small></span>
                                    <input type="number" className="lsOptionInput" onChange={(e) => setMin(e.target.value)} min={0} />
                                </div>
                                <div className='lsOptionItem'>
                                    <span className='lsOptionText'>Max price <small>( per night )</small></span>
                                    <input type="number" className="lsOptionInput" onChange={(e) => setMax(e.target.value)} min={0} />
                                </div>
                                <div className='lsOptionItem'>
                                    <span className='lsOptionText'>Adult </span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={Options.adult} />
                                </div>
                                <div className='lsOptionItem'>
                                    <span className='lsOptionText'>Childrean </span>
                                    <input type="number" min={0} className="lsOptionInput" placeholder={Options.childrean} />
                                </div>
                                <div className='lsOptionItem'>
                                    <span className='lsOptionText'>Room </span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={Options.room} />
                                </div>
                            </div>
                        </div>
                        <button onClick={handleSearch}>Search</button>
                    </div>
                    <div className='listResult'>
                        {loading ? "Loading..." :
                            <>
                                {data.map((item) => (
                                    <SearchItem key={item._id} item={item} />
                                ))}
                            </>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
