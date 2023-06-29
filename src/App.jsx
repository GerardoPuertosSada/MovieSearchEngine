import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Routesindex from '../routes/Index'
import ShowDetails from './pages/ShowDetails'
function App () {
  return (
    <div className='container'>
      <BrowserRouter>
        <Navbar />
        <Routesindex />
      </BrowserRouter>
    </div>

  )
}

export default App
