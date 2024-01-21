import React from 'react';
import '../component/Stylebutton.css'

function Rbutton(props) {
    const{label}=props
    return (
        <div>
            <button
            className='login_btn'
            >{label}</button>
        </div>
    );
}

export default Rbutton;