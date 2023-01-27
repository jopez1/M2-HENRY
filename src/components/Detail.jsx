import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom' //useNavigate
import styled from 'styled-components'


export default function Detail() {
   const {detailId} = useParams();
   /* const navigate = useNavigate(); */

   const [character,setCharacter] = useState();

   useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  /* const handleClick = () =>{
    navigate("home");
  } */

  const TextDiv = styled.h1`
   color: greenyellow;
    left;
`; 

  return (
    <div>
    {/* <button onClick={handleClick}>Go Home</button> */}
    <Link to='/home'><button>To Home</button></Link>
        {
            character ?
            <TextDiv>
            <h1>{character.name}</h1>
            <h5>{character.status}</h5>
            <h5>{character.species}</h5>
            <h5>{character.gender}</h5>
            <h5>{character.origin?.name}</h5>
            <div>
                <img src={character.image} alt={character.name}></img>
            </div>
            </TextDiv> : ("")
        }
    </div>
  )
}
