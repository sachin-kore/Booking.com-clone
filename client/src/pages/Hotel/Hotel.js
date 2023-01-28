import './Hotel.css'
import { Navbar } from '../../components/Navbar/Navbar'
import { Header } from '../../components/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { MailList } from '../../components/mailList/MailList'
import { Footer } from '../../components/Footer/Footer'
import { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { SearchContext } from '../../context/SearchContext'



export const Hotel = () => {
    const navigate = useLocation()
    const path = navigate.pathname.split("/")[2];

    const { data, loading, error } = useFetch(`http://localhost:5000/api/hotels/find/${path}`);


    const { date, options } = useContext(SearchContext);
    const MILLISECOND_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
        const timDiff = Math.abs(date2.getTime() - date1.getTime());
        const dayDiff = Math.ceil(timDiff / MILLISECOND_PER_DAY);
        return dayDiff;
    }

    const days = dayDifference(date[0].endDate, date[0].startDate);


    const [openslider, setOpenslider] = useState(false)
    const [imageIndexNum, setImageIndexNumr] = useState(0)
    const images = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/281617320.jpg?k=c99f2cd6b58738755c0f1c3d99a7420d8f21aa606e5f7ab82fa31d5e7b142f45&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max300/281616841.jpg?k=81155f3ce9bbb50672843e3314fc890904aadb41249eba729f8c8eef568a1227&o=&hp=1"
        }, {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/281617303.jpg?k=590b34d75350ec6102ca85c0a286ed760611168a6eae580c878af3036bcfe5b2&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/281616984.jpg?k=1e675d98b307d9a24908dfd1fbcffd62bf9a615f90745026b53834fd275bb0ac&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/281617542.jpg?k=565f14a492ace9b6cadaf199655173ce8ff3fcb8217a6658d415bdeb685fc37a&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/281618060.jpg?k=9135f701615020099061fffaf5e643a535f7917a1031e385c98796495bad39f7&o=&hp=1"
        }

    ]
    const handleOpen = (i) => {
        setImageIndexNumr(i);
        setOpenslider(true);

    }
    const handledir = (direction) => {
        let neslideNumber;
        if (direction === "l") {
            neslideNumber = imageIndexNum === 0 ? 5 : imageIndexNum - 1;


        } else {
            neslideNumber = imageIndexNum === 5 ? 0 : imageIndexNum + 1;
        }
        setImageIndexNumr(neslideNumber);
    }

    return (
        <div style={{ backgroundColor: "white" }}>
            <Navbar />
            <Header type="list" />
            <div className='hotelContainer'>
                {openslider && <div className='slider'>
                    <FontAwesomeIcon icon={faCircleXmark} onClick={() => setOpenslider(false)} className="close" />
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handledir("l")} />
                    <div className='imageWrapper'>
                        <img className='sliderimg' src={images[imageIndexNum].src} />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handledir("r")} />
                </div>}
                <div className='hotelwrapper'>
                    <button className='booknow'>Reserve or Book Now</button>
                    <h1>{data.name}</h1>
                    <div className='hotellocationDetails'>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>{data.address}</span>
                    </div>
                    <span className='locationText'>Excellent location -{data.distance}m from center</span>
                    <span className='hotelTaxiDetails'>Book a stay over ${data.cheapestPrice} at this property and get free airport taxi</span>
                    <div className='hotelImages'>
                        {images.map((photo, i) => (
                            <div className='hotelImageWrapper'>
                                <img src={photo.src} className="hotelImg" onClick={() => handleOpen(i)} />
                            </div>
                        ))}
                    </div>
                    <div className='hotelOtherDetails'>
                        <div className='hotelDetails'>
                            <h1 className='hotelDetailsheading'>{data.title}</h1>
                            <span className='hotelDetailsspan'>{data.desc}</span>
                        </div>
                        <div className='hotelText'>
                            <h1>Perfect for a {days}-night stay</h1>
                            <span className='hotelspanText'>5.1 km from Brigade Road, FabHotel The Leela Park is
                                set in Bangalore and offers
                            </span>
                            <h2><b>${days * data.cheapestPrice * options.room}</b> {days} nights</h2>
                            <button className='booknow1'>Reserve or Book Now</button>
                        </div>
                    </div>
                </div>
                <MailList /><br />
                <Footer />

            </div>
        </div>
    )
}
