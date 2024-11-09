
import { Link } from "react-router-dom";
import { getAllStarships } from "../utilities/controllers.mjs"
import { useState, useEffect } from 'react'

export default function StarshipCard(){
    let url = `https://swapi.dev/api/starships/`
    const [starShips, setStarships] = useState([])

    async function getStarships (){
        let res = await getAllStarships(url);
        res = res.results
        setStarships(res)
      }
    useEffect(()=>{
        getStarships()
    },[])
     
return(
    <>
        {starShips.map((starship,i) => {
            const { name, url } = starship;
            let id = url.substring(32)
            return (
                <div className="card" key={i}>
                    <Link to={`/starships/${id}`}>
                        <h2>{name}</h2>
                    </Link>
                </div>
            );
        })}
    </>
)
}