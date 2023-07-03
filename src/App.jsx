import { useState } from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Login from './components/Login'
import { AuthProvider } from './context/authContext'
import Chats from './components/Chats'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/chats' element={<Chats />}/>
      </Routes>
    </AuthProvider>
    </Router>
  
    </>
  )
}

export default App
