import React, {useState, useEffect} from 'react';

const Liker = (props) => {
    const [initLikes, setInitLikes] = useState(0)

    const { likes } = props

    function handleClick() {
        setInitLikes(initLikes + likes)
    }

    useEffect(() => {
        console.log(initLikes);
    }, [initLikes]);

    return (
        <div>
            <button className='butt' onClick={handleClick} >
                {initLikes} Likes
            </button>
        </div>
    )
}

export default Liker;