import { NavLink } from 'react-router-dom'
import style from './Nav.module.css'

const css = `.active { background-color: #FFD348; }`

const Nav = () => {
  return (
    <header>
      <style>{css}</style>
      <div className={style.link_group}>
        <NavLink to='/' className={style.links}>Home</NavLink>
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