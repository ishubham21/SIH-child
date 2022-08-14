import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";

const css = `.active { background-color: #FFD348; }`;

const Nav = () => {
  return (
    <header>
      <style>{css}</style>
      <NavLink to="/" className={style.links}>
        Home
      </NavLink>
      <NavLink to="/games" className={style.links}>
        Games
      </NavLink>
      <NavLink to="/coins" className={style.links}>
        Coins
      </NavLink>
      <NavLink to="/profile" className={style.links}>
        Profile
      </NavLink>
    </header>
  );
};

export default Nav;
