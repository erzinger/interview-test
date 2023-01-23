import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <ul class="nav flex-column">
            <li class="nav-item">
            <Link to={"/pagina-1"} className="nav-link text-white" aria-current="page">Pagina 1</Link>
            </li>
            <li class="nav-item">
            <Link className="nav-link text-white" to="/pagina-2">Pagina 2</Link>
            </li>
        </ul>
    )
}