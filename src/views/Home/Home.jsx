import Cards from '../../components/Cards/Cards.jsx';
import { useState } from 'react';
import axios from 'axios';
import SearchBar from '../../components/SearchBar/SearchBar';

function Home() {
   const [ characters, setCharacters ] = useState([])

   function onSearch(id) {
      id = Number(id)
      if(characters.some(obj => obj.id === id)){
         return
      }
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) =>{
      id = Number(id)
      const fliterCharac = characters.filter((charac) => charac.id !== id);
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