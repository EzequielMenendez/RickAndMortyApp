import { Container, Imagen, Button, Text, ButtonContainer, FavoriteButton} from "./styledCard";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions/actions";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
function Card(props) {

   const [ isFav, setIsFav ] = useState(false);

   const handleFavorite = () =>{
      if(isFav === true){
         setIsFav(false);
         props.removeFav(props.id)
      }
      if(isFav === false){
         setIsFav(true);
         props.addFav(props)
      }
   }

   const handleClose = () => {
      props.onClose(props.id);
   }

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   let location = useLocation()

   return (
      <Container>
         <ButtonContainer>
            {isFav ? (<FavoriteButton onClick={handleFavorite}>❤️</FavoriteButton>) : (<FavoriteButton onClick={handleFavorite}>🤍</FavoriteButton>)}
            {location.pathname === "/Home" && <Button onClick={handleClose}>X</Button>}
         </ButtonContainer>
         <Text>{props.name}</Text>
         <Link to={`/detail/${props.id}`} >
         <Imagen src={props.image} alt='' />
         </Link>
      </Container>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (product) => dispatch(addFav(product)),
      removeFav: (id) => dispatch(removeFav(id))
    };
}

const mapStateToProps = (state) => {
   return {myFavorites: state.myFavorites}
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);