import React from 'react'


// ---ROUTING---
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'

// ---PAGES---
import Index from './pages/index'

// ---STYLES---
import './App.css'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App