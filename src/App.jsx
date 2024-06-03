
import Footer from './component/Footer'

import Navbar from './component/Navbar'

import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Settings from './pages/Settings'
import Recipes from './pages/Recipes'

function App() {


  return (
    <>

      <Router>
        <Navbar />
        <div className='container main'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <Routes>
            <Route path='/recipes' element={<Recipes />} />
          </Routes>
          <Routes>
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </Router>

    </>
  )
}

export default App
