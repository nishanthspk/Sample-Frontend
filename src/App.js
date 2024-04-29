import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Resources from './pages/Resources';

const App = () => {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/contact' Component={Contact} />
          <Route path='/resources' Component={Resources} />
        </Routes>
      </Router>
      
     
      
    </div>
    
  )
}

export default App