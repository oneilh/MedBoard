import Home from './pages/Home'
import Navbar from './pages/navbar'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Home/>

     
      </div>
      
    </Router>
  )
}

export default App
