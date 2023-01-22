import React, { useState } from 'react'

export const Callback = ({ getColor }) => {
    // const [currentColor, setCurrentColor] = useState(null);

    const handleChange = (e) => {
        // const { value } = e.target;
        // setCurrentColor(value);
        getColor("blue"); // Call back function which sends color to the parent component via callback
    }
    return (
        <div>
            {/* <input
                type="text"
                onChange={handleChange}
            /> */}
            <button onClick={handleChange}>click</button>
        </div>
    )
}
