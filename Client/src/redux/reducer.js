import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions/action-type";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        case REMOVE_FAV:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        case FILTER:
            if(action.payload === "All"){
                return {...state, myFavorites: [...state.allCharacters]}
            }
            let filter = state.allCharacters.filter((character)=> character.gender === action.payload)
            return {...state, myFavorites: filter}
        case ORDER:
            let order = [...state.myFavorites].sort((a,b)=>{
                if (action.payload === "A"){
                    return a.id - b.id;
                }else if(action.payload === "D"){
                    return b.id - a.id;
                }else{
                    return 0;
                }
            })
            return {...state, myFavorites: order}
        default:
            return {...state}
    }
}

export default reducer