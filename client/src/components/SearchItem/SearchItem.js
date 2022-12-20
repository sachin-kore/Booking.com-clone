import './SearchItem.css'

export const SearchItem = () => {
    return (
        <div className='searchItem'>
            <img src='https://cf.bstatic.com/xdata/images/hotel/square600/136175277.webp?k=29a8bab23c48444cd46ca97f9800f6ba59f80b9efe69f6d2a2f26dcec59b879e&o=&s=1' />
            <div className='siDesc'>
                <h1 className='siTitle'>Tower Street Apartment</h1>
                <span className='siDistance'>500m from center</span>
                <span className='siTaxiOp'>Free airport taxi</span>
                <span className='siSubtitleOp'>Studio Apartment with Air conditioning</span>
                <span className='siFeatures'>Entire studio . 1 bathroom . 21m 1 full bed</span>
                <span className='sicancelOp'>Free cancellation</span>
                <span className='sicancelOpSubTitle'>You can cancel later, so lock in this great price today!</span>
            </div>
            <div className='siDetails'>
                <div className='siDetails-top'>
                    <p>Excellent</p>
                    <button>8.9</button>
                </div>
                <div className='siDetails-bottom'>
                    <p className='siamount'>$112</p>
                    <span>include taxes and fees</span>
                    <button>See Availability</button>
                </div>
            </div>
        </div>
    )
}
