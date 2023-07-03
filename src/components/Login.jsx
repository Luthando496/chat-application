import React from 'react'
// import {GoogleOutlined,FacebookOutlined} from '@ant-design/icons'
import {auth,app} from '../firebase.js'
import {signInWithPopup,GoogleAuthProvider} from 'firebase/auth'

const Login =()=>{

    const signIn = async()=>{
        await signInWithPopup(auth, new GoogleAuthProvider());

    }


    return (
        <div id='login-page'>
                <div id="login-card">
                    <h2>Welcome To MyChat</h2>
                <div onClick={signIn} className="login-button google">
                     Login with Google
                </div>
                <br /> <br />

                <div className="login-button facebook">
                     Login with Google
                </div>
                </div>

        </div>
    )
}


export default Login