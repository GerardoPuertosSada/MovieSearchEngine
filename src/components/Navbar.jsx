import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navBar'>
      <div className='container'>
        <nav className='navBar__nav'>
          <h3 className='navbar__brand'>
            <NavLink to='/'>TV SHOW SEARCH</NavLink>
          </h3>
          <ul className='nav__links'>
            <li className='links__link'>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li className='links__link'>
              <NavLink to='/about'>About</NavLink>
            </li>
          </ul>
        </nav>

      </div>
    </div>
  )
}

export default NavBar
