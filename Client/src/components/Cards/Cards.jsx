import Card from '../Card/Card';
import { Container } from "./styledCards"

export default function Cards(props) {
   return (
      <Container>
         {props.characters.map((elemento) => (
         <Card
         key={elemento.id}
         id={elemento.id}
         name={elemento.name}
         status={elemento.status}
         species={elemento.species}
         gender={elemento.gender}
         origin={elemento.origin?.name}
         image={elemento.image}
         onClose={props.onClose}
         />
    ))}
      </Container>
   )
}
