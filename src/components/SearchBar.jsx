import { useState } from "react";
import "./styleSearchBar.css"

export default function SearchBar(props) {
   
   const [character, setCharacter] = useState("");

   const handleChange = (e) => {
      const{value} = e.target;
      setCharacter(value)
   }
   
   return (
      <div className="input">
         <input type='search' onChange={handleChange} placeholder="Buscar"/>
      <button onClick={() => props.onSearch (character)}>Agregar</button> 
      </div>
   );
}
