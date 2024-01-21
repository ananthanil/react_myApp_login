import React from 'react';
import Rbutton from '../component/Rbutton';
import Rtext from '../component/Rtext';
import '../page/style.css'

function login(props) {
    return (
        <div className='App'>

            <h1 style={{color:'white'}}>Log In</h1>

            <Rtext
            style={{width:"375px",height:"30px",marginBottom:"15px"}}
            type={"text"}
            placeholder={"Username"}
            ></Rtext>

            <Rtext
            style={{width:"375px",height:"30px",marginBottom:"15px"}}
             type={"password"}
             placeholder={"Password"}
            ></Rtext>

            <Rbutton
            label={'LOG IN'}
            ></Rbutton> 

        </div>
    );
}

export default login;