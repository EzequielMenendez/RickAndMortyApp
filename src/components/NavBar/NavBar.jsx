import RandMLogo from "../Auxiliares/RandMLogo.png"
import { NavContainer, Title, Button } from "./styledNav"
import { Link } from "react-router-dom"
export default function NavBar(props){

    const handleLogout = ()=>{ 
        props.logout()
    }

    return (
        <NavContainer>
            <div>
            <Title src={RandMLogo}></Title>
            </div>
            <div>
            <Link to={"/Home"}>
                <Button>Home</Button>
            </Link>
            <Link to={"/about"}>
                <Button>About</Button>
            </Link>
            <Link to={"/favorites"}>
                <Button>Favorites</Button>
            </Link>
            <Button onClick={handleLogout}>Logout</Button>
            </div>
        </NavContainer>
    )
}