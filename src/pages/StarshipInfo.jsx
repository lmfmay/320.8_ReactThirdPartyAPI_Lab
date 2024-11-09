import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { getAllStarships } from '../utilities/controllers.mjs';


export default function StarshipInfo(){
    const {id} = useParams()
    const [starShip, setStarship] = useState([])
    let url = `https://swapi.dev/api/starships/${id}`;
    
    async function getStarship (){
      let res = await getAllStarships(url);
      setStarship(res)
    }
    
    useEffect(()=>{
          getStarship()
    },[])


    // loaded function for when data is fetched.
    const loaded = () => {
        return (
        <div>
            <h1>
            {starShip.name}/{starShip.manufacturer}
            </h1>
            <p>Cargo Capacity: {starShip.cargo_capacity}</p>
            <p>Passengers: {starShip.passengers}</p>
        </div>
        );
    };

    // Function for when data doesn't exist.
    const loading = () => {
        return <h1>Loading...</h1>;
    };

    // If starship has data, run the loaded function; otherwise, run loading.
    return starShip ? loaded() : loading();
}