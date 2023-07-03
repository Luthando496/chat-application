import React,{useState,useContext,useEffect} from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
// import {} from 'react-router-dom'


const AuthContext = React.createContext()


export const  useAuth = () => useContext(AuthContext)


export const  AuthProvider = ({children}) => {
    const [loading,setLoading]= useState(true)
    const [user,setUser]= useState(null)

    const navigate = useNavigate()


    useEffect(()=>{
        auth.onAuthStateChanged((person)=>{
            setUser(person)
            console.log(person)
            setLoading(false)
            if(user){
                navigate('/chats')
            } 
        })
    },[user,navigate])

    const value ={user}

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}