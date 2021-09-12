import React, {useState, useEffect} from 'react';
import Liker from './Liker';

const CounterInput = () => {
    const [likesCount, setLikesCount] = useState(0)
    
    function handleChange(e) {
        setLikesCount(parseInt(e.target.value))
    } 

    return (
        <div>
            <label>+ or -</label>
                <input
                    className='panelInput'
                    type='number'
                    defaultValue={likesCount}
                    onChange={handleChange}
                />
                <label>Likes</label>
                <Liker likes={likesCount} />
        </div>
    )
}

export default CounterInput;