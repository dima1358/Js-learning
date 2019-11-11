import React from 'react'
import preloader from "../../../assets/images/preloader.gif";

let Preloader = (props) => {
    return (
        <div className='preloader__wrap'>
            <img src={preloader} alt="svg"/>
        </div>
    )
}

export default Preloader