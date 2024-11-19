import './Header.css';
import {NavLink, Link} from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to='/' className='logo'>#VANLIFE</Link>
      <ul className='header-link-lists'>
        <li className='header-link'>
          <NavLink to='/host' className={({isActive}) => isActive ? 'active-link' : null}>Host</NavLink>
        </li>
        <li className='header-link'>
          <NavLink to='/about' className={({isActive}) => isActive ? 'active-link' : null}>About</NavLink>
        </li>
        <li className='header-link'>
          <NavLink to='/vans' className={({isActive}) => isActive ? 'active-link' : null}>Vans</NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header
