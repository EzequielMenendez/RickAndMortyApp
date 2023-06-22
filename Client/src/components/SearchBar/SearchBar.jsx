import { Input, Button} from "./slyledSearch";
import { useState } from "react";
export default function SearchBar(props) {
   const [ id, setId ] = useState('');

   const handleChange = (evento) =>{
      setId(evento.target.value);
   }

   const handleSearch = () => {
      if(Number(id) >= 1 && Number(id) <= 826){
         props.onSearch(id);
      }else{
         window.alert('¡No hay personajes con este ID!');
      }
   };

   const handleRandom = () =>{
      let random = Math.floor(Math.random() * 826) + 1;
      props.onSearch(random);
   }

   return (
      <div>
         <Input type='search' placeholder="id" onChange={handleChange}/>
         <Button onClick={handleSearch}>Agregar</Button>
         <Button onClick={handleRandom}>Agregar Random</Button>
      </div>
   );
}
