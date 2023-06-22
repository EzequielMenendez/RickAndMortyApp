import { connect } from "react-redux"
import Card from "../../components/Card/Card"
import { orderCards, filterCards } from "../../redux/actions/actions"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { Container } from "../../components/Cards/styledCards"
import { Select } from "./styledFavorites"

function Favorites({myFavorites}){
    const dispatch = useDispatch();

    const [ aux, setAux ] = useState(false)

    const handleOrder = (event) =>{
        dispatch(orderCards(event.target.value))
        setAux(true)
    }

    const handleFilter = (event) =>{
        dispatch(filterCards(event.target.value))
        setAux(true)
    }

    return(
        <div>
            <Select onChange={handleOrder}>
            <option value="A" >Ascendente</option>
            <option value="D" >Desendente</option>
            </Select>
            <Select onChange={handleFilter}>
            <option value="All">All</option>
            <option value="Male" >Male</option>
            <option value="Female" >Female</option>
            <option value="Genderless" >Genderless</option>
            <option value="unknown" >unknown</option>
            </Select>
            <Container>
                {myFavorites.map((elemento)=>(
                    <Card          
                    key={elemento.id}
                    id={elemento.id}
                    name={elemento.name}
                    status={elemento.status}
                    species={elemento.species}
                    gender={elemento.gender}
                    origin={elemento.origin?.name}
                    image={elemento.image}
                    onClose={elemento.onClose}/>
                ))}
            </Container>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {myFavorites: state.myFavorites}
}

export default connect(mapStateToProps, null)(Favorites)