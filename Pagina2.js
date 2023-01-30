import axios from "axios";
import { useEffect, useState } from "react";

export default function Pagina1(){

    const [dados, setDados] = useState([])

    useEffect(()=> {
        axios.get("https://raw.githubusercontent.com/erzinger/interview-test/main/2/data.json")
        .then((response)=>{
            setDados(response.data)
            
        })
        .catch(()=>{

        })
    },[])

    
    return(
        <div className="main">

            {dados.pagina2.map((variavel)=> (
           
                <div className="content">
                    <h2>{variavel}</h2><br/>
                    <h1>{variavel.value}  {variavel.unit}</h1>
                </div>
            ))}
             
              
        </div>
    )
    
}