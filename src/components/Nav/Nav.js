import { NavLink } from 'react-router-dom'
import style from './Nav.module.css'

const Nav = () => {
  return (
    <header className={style.navbar}>
      <div className={style.nav_links}>
        <NavLink exact to='/' className={style.links}>Home</NavLink>
        <NavLink to='/games' className={style.links}>Games</NavLink>
        <NavLink to='/coins' className={style.links}>Coins</NavLink>
      </div>
      <div>
        <NavLink to='/profile' className={style.links}>Profile</NavLink>
      </div>
    </header>
  )
}

export default Nav