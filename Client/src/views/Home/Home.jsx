import Cards from '../../components/Cards/Cards.jsx';
import { useState } from 'react';
import axios from 'axios';
import SearchBar from '../../components/SearchBar/SearchBar';

function Home() {
   const [ characters, setCharacters ] = useState([])

   async function onSearch(id) {
      id = Number(id)
      try {
         if(characters.some(obj => +obj.id === +id)){
            throw Error(`El personaje ID: ${id} ya esta renderizado`)
         }
         let { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
      } catch (error) {
         if(error.message.includes("El personaje ID:")){
            window.alert(error.message)
         }else{
            window.alert('¡No hay personajes con este ID!');
         }
      }
   }

   const onClose = (id) =>{
      id = Number(id)
      const fliterCharac = characters.filter((charac) => +charac.id !== id);
      setCharacters(fliterCharac)
   }
   
   return (
      <div>
         <SearchBar onSearch = {onSearch}/>
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default Home;