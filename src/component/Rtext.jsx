import React from 'react';

function Rtext(props) {
    return (
        <div>
        <input
        type={props.type}
        style={props.style}
        placeholder={props.placeholder}
        />
        </div>
    );
}

export default Rtext;