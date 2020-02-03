import React, { useState } from 'react'


function GridTile(props) {
    const [isActive, setActive] = useState(
        false
    );

    const handleClick = () => {
        setActive(!isActive)
        console.log(isActive)
    }

    return (
        <div>
            <button onClick={handleClick}></button>
        </div>
    )
}