import Card from "./Card";
import styleForCard from './cards.module.css';

export default function Cards(props) {
  const { characters } = props;
  //console.log(characters)
  return (
    <div  className={styleForCard.contenedor}>
      {
        characters.map((char) => (
        <Card
          key={char.name}
          name={char.name}
          species={char.species}
          gender={char.gender}
          image={char.image}
          id={char.id}
          onClose={props.onClose}
        />
      ))
      }
    </div>
  );
}

/* characters.map((char) => 
<h2 personaje={char.name}></h2>
 <h2 personaje={char.species}></h2>
 <h2 personaje={char.gender}></h2>
 <img  src={char.image} alt="" />
) */
