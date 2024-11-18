import './Header.css';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to='/' className='logo'>#VANLIFE</Link>
      <ul className='header-link-lists'>
        <li className='header-link'>
          <Link to='/about'>About</Link>
        </li>
        <li className='header-link'>
          <Link to='/'>Vans</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
