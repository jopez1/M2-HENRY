import React from "react";
import SearchBar from "./SearchBar";
import style from "./nav.module.css";
import { NavLink } from "react-router-dom";

// antes de esta hw tenia en la funcion "Navegador"
export default function Nav (props) {
    
    return (
      <div className={style.navStyle}>
       {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         <SearchBar onSearch={props.onSearch} />
         <NavLink to="/home">
          Home
         </NavLink>
         <br></br>
         <NavLink className={style.link} to='/about'>About</NavLink>
            <NavLink className={style.link} to='/home'>Home</NavLink>
            <NavLink className={style.link} to='/favorites'>Favorites</NavLink>
      </div>
    );
  }




