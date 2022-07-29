import { useState } from 'react';
import './clicker.css'

function Clicker() {
    const [clicks, setClicks] = useState(0);

    function clickHandler() {
        setClicks(clicks + 1)
    }

    return(
        <div className='clicker-wrapper'>
            <button onClick={clickHandler}>Click me!</button>
            <p>Number of clicks: {clicks}</p>
        </div>
    );
}

export default Clicker;