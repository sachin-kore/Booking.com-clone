import './SearchItem.css'

export const SearchItem = ({ item }) => {


    return (
        <div className='searchItem'>
            <img src='https://cf.bstatic.com/xdata/images/hotel/square600/136175277.webp?k=29a8bab23c48444cd46ca97f9800f6ba59f80b9efe69f6d2a2f26dcec59b879e&o=&s=1' />
            <div className='siDesc'>
                <h1 className='siTitle'>{item.name}</h1>
                <span className='siDistance'>{item.distance}m from center</span>
                <span className='siTaxiOp'>Free airport taxi</span>
                <span className='siSubtitleOp'>{item.title}Studio Apartment with Air conditioning</span>
                <span className='siFeatures'>{item.desc}Entire studio . 1 bathroom . 21m 1 full bed</span>
                <span className='sicancelOp'>Free cancellation</span>
                <span className='sicancelOpSubTitle'>You can cancel later, so lock in this great price today!</span>
            </div>
            <div className='siDetails'>
                {item.rating &&
                    <div className='siDetails-top'>
                        <p>Excellent</p>
                        <button>{item.rating}</button>
                    </div>}
                <div className='siDetails-bottom'>
                    <p className='siamount'>${item.cheapestPrice}</p>
                    <span>include taxes and fees</span>
                    <button>See Availability</button>
                </div>
            </div>
        </div>
    )
}
