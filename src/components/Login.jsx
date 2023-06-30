import React from 'react'
import {GoogleOutlined,FacebookOutlined} from '@ant-design/icons'


const Login =()=>{


    return (
        <div id='login-page'>
                <div id="login-card">
                    <h2>Welcome To MyChat</h2>
                </div>

                <div className="login-button google">
                    <GoogleOutlined/> Login with Google
                </div>
                <br /> <br />
        </div>
    )
}


export default Login