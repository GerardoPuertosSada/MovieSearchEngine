import { Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import ShowDetails from '../src/pages/ShowDetails'

const Routesindex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/show/:id' element={<ShowDetails />} />

    </Routes>
  )
}

export default Routesindex
