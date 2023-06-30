import { useState } from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Login from './components/Login'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
      </Routes>
    </Router>
  
    </>
  )
}

export default App
