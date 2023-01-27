//! FALTA IMPLEMENTAR BIEN EL EJERCICIO 6 DE LA HW 10: React-Forms (me bloquea mi app)
import { useState, useEffect } from 'react';
import {Routes, Route} from "react-router-dom"
import './App.css'
import Cards from './components/Cards.jsx'
import background from "./img/universo.jpg";
import Nav from './components/Nav'
import About from './components/About';
import Detail from "./components/Detail";
/* import Error from './components/Error'; */
import Form from './components/Form';
import { useLocation} from "react-router-dom"
                  //useNavigate   
import Favorites from './components/favorites/Favorites';                    


function App () {
  const [characters, setCharacters] = useState([])

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }



 const onClose = (id) => {
console.log(id);
setCharacters(characters.filter(char => char.id !== id))
 } 

 const location = useLocation()
 /* const navigate = useNavigate(); */
 /* const [access, setAccess] = useState(false);
 const username = "antonio@hotmail.com"
 const password = "c54deg6" */
 

 /* function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
   else alert("usuario o contraseña incorrecto")
} */

 

 /* useEffect(() => {
   !access && navigate('/');
}, [access]); */

 const mapStateToProps = () => {} 

 return (                             //tenia 25vw 
    <div className='App' style={{ padding: '25px', backgroundImage:`url(${background})` }}> 
    <div>
    {location.pathname !== "/" && <Nav 
    onSearch={onSearch}
    /> }
    </div>
     <Routes>

     <Route path='/favorites' element={<Favorites/>}/>

      <Route path='/' element={<Form />} />
                         {/* login={login} */}

      <Route path="/home" element= {<Cards
          characters={characters } onClose={onClose}
        />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:detailId" element={<Detail/>}/>
        {/* <Route path='*' element={<Error/>}/> */}
    </Routes>
     
    </div>
  )
}

export default App


