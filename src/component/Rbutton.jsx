import React from 'react';
import '../component/Stylebutton.css'

function Rbutton(props) {
    return (
        <div>
            <button
            className='login_btn'
            >{props.label}</button>
        </div>
    );
}

export default Rbutton;