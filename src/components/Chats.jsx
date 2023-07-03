import React,{useRef,useState,useEffect} from 'react'
import { ChatEngine } from 'react-chat-engine'
import { useNavigate } from 'react-router-dom'
import {auth} from '../firebase.js'
import {useAuth} from '../context/authContext.jsx'
import axios from 'axios'


const Chats = () => {

    const navigate = useNavigate()
    const [loading,setLoading] = useState(true)
    const {user}  = useAuth()

    console.log(user)


    const handleLogOut =async()=>{
    await auth.signOut()
    navigate('/')

    }

    const getFile = async(url) =>{
        const response = await fetch(url)
        const data = await response.blob()

        return new File([data],"userPhoto.jpeg",{type:"jpeg"})

    }

    useEffect(()=>{
        if(!user){
            navigate('/')
            return;
        }

        axios.get('https://api.chatengine/.io/users/me',{
            headers:{
                "project-id":"00e05c42-6762-4c8d-94af-a30e8ad9b396",
                "user-name":user.email,
                "user-secret":user.uid
            }
        }).then(()=>setLoading(false)).catch(()=>{
            let formData = new FormData()
            formData.append('email',user.email)
            formData.append('username',user.displayName)
            formData.append('secret',user.uid)

            getFile(user.photoUrl).then((avatar)=> {
                formData.append('avatar',avatar,avatar.name)

                axios.post('https://api.chatengine/.io/users',formData,{
                    headers:{
                        "private-key":"29464037-bd1f-476d-bccc-577479ec708b",

                    }
                })
            })



        })

    },[])
  return (
    <div className='chats-page'>
        <div className="nav-bar">
            <div className="logo-tab">
                MyChat
            </div>
            <div onClick={handleLogOut} className="logout-tab">
                logout
            </div>
        </div>

        <ChatEngine  height='calc(100vh -66px)'  projectId="00e05c42-6762-4c8d-94af-a30e8ad9b396" userName='' userSecret="" />
    </div>
  )
}

export default Chats