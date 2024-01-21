import React from 'react';

function Rtext(props) {
    const {type,style,placeholder}=props
    return (
        <div>
        <input
        type={type}
        style={style}
        placeholder={placeholder}
        />
        </div>
    );
}

export default Rtext;