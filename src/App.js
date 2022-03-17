import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import './App.css'

function App() {

  return (
    <div className="app">
          <Router>
              <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/details/:user" element={<Details></Details>}/>
              </Routes>
          </Router>
    </div>
  )
}

export default App;
