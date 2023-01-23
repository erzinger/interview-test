import { BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from "./NavBar";
import Pagina1 from "./Pagina1"
import Pagina2 from "./Pagina2"


export default function Rotas(){
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Pagina1/>}/>
                <Route path="/pagina-1" element={<Pagina1/>}/>
                <Route path="/pagina-2" element={<Pagina2/>}/> 
            </Routes>
        </BrowserRouter>
    );
}