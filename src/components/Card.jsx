import React from "react";
import styleCard from "./cards.module.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addCharacter, deleteCharacter } from "../redux/actions";
import {connect} from "react-redux";
import { useEffect, useState } from "react";

const Title = styled.h3`
   color: blue;
   font-weight: bold;
`;
const Text = styled.h4`
   color: green;
   
`;



export default function Card(props) {
   //console.log(props)

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         deleteCharacter(props.id)
      }else{
         setIsFav(true);
         addCharacter(props);
      }
   }

   

   useEffect(() => {
      props.myFavorites?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [props.myFavorites]);

   return (
      
      <div className={styleCard.tarjeta}>
      {isFav ? (
         <button onClick={handleFavorite}>❤️</button>
      ) : (
         <button onClick={handleFavorite}>🤍</button>
      )};
         <button className={styleCard.boton} onClick={() => props.onClose(props.id)}>X</button>
         <img  src={props.image} alt="props.name" />
         {/* <h6>{props.id}</h6> */}
         <Link to={`/detail/${props.id}`}><Title>{props.name}</Title></Link>
         <Text>{props.species}</Text>
         <Text>{props.gender}</Text>
          
      </div>
   );
}

export function mapDispatchToProps(dispatch) {
   return {
      addCharacter: function(fav){
         dispatch(addCharacter(fav))
      },

      deleteCharacter: function(id){
         dispatch(deleteCharacter(id));
      }
   }
}

export function mapStateToProps (state){
   return {
      myFavorites: state.myFavorites
   }
}

//por corregir en el export 25 enero y se completa el ejercicio 3
 connect(mapStateToProps, mapDispatchToProps)(Card);

