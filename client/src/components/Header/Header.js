import React, { useContext, useState } from 'react'
import './Header.css'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'


export const Header = ({ type }) => {
    const [date, setDate] = useState([{
        startdate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }]);
    const [opendate, setOpendate] = useState(false)
    const [destination, setDestination] = useState("");
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        childrean: 0,
        room: 1,
    })

    const navigate = useNavigate();

    const { dispatch } = useContext(SearchContext);
    const handleSearch = () => {
        dispatch({
            type: "NEW_SEARCH", payload: {
                destination, date, options
            }
        })
        navigate('/hotels', { state: { destination, date, options } });
    }
    const handleclick = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };
    console.log(destination)
    return (
        <div className='header'>
            <div className={type == "list" ? "headerContainer listmode" : "headerContainer"}>
                <div className='headerList'>
                    <div className='headerListItem active'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rental</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                {type != "list" && <><h1 className='headerTitle'>A lifetime of discount? It's Genius.</h1>
                    <p className='headerDesc'>Get rewarded for your travels unlock instant savings of 10% or more with a free SachinBooking account</p>
                    <button className='headerBtn'>Sign in / Register</button>
                    <div className='headerSearch'>
                        <div className='headerSearchIteam'>
                            <FontAwesomeIcon icon={faBed} className='headerIcon' />
                            <input type="text" placeholder='Where are you going' className='headerSearchInput' onChange={e => setDestination(e.target.value)} />
                        </div>
                        <div className='headerSearchIteam'>
                            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                            <span className='headerSearchText' onClick={() => setOpendate(!opendate)}>{`${format(date[0].startdate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`} to date</span>
                            {opendate && <DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className='date'
                                minDate={new Date()}
                            />}
                        </div>
                        <div className='headerSearchIteam'>
                            <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                            <span className='headerSearchText' onClick={() => { setOpenOptions(!openOptions) }}>{`${options.adult} adult   ${options.childrean} childrean    ${options.room} room`}</span>
                            {openOptions && <div className='options'>
                                <div className='optionItems'>
                                    <span className='optionText'>Adult</span>
                                    <div className='btnContainor'>
                                        <button className='optionbtn' onClick={() => handleclick("adult", "d")} disabled={options.adult <= 1}>-</button>
                                        <span className='optionNumber'>{options.adult}</span>
                                        <button className='optionbtn' onClick={() => handleclick("adult", "i")}>+</button>
                                    </div>
                                </div>
                                <div className='optionItems'>
                                    <span className='optionText'>childrean</span>
                                    <div className='btnContainor'>
                                        <button className='optionbtn' onClick={() => handleclick("childrean", "d")} disabled={options.childrean <= 0}>-</button>
                                        <span className='optionNumber'>{options.childrean}</span>
                                        <button className='optionbtn' onClick={() => handleclick("childrean", "i")}>+</button>
                                    </div>

                                </div>
                                <div className='optionItems'>
                                    <span className='optionText'>Room</span>
                                    <div className='btnContainor'>
                                        <button className='optionbtn' onClick={() => handleclick("room", "d")} disabled={options.room <= 1}>-</button>
                                        <span className='optionNumber'>{options.room}</span>
                                        <button className='optionbtn' onClick={() => handleclick("room", "i")}>+</button>
                                    </div>

                                </div>
                            </div>}
                        </div>
                        <div className='headerSearchIteam'>
                            <button className='headerBtn' onClick={handleSearch}>Search</button>
                        </div>
                    </div></>}
            </div>
        </div>
    )
}
