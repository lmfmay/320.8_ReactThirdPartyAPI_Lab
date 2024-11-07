
import { Link } from "react-router-dom";


export default function StarshipCard(){
    const starships = [
        {name: 'CR90 corvette'},
        {name: 'Star Destroyer'},
        {name: 'Sentinel-class landing craft'},
        {name: 'Death Star'},
        {name: 'Millennium Falcon'},
        {name: 'Y-wing'},
        {name: 'X-wing'},
        {name: 'TIE Advanced x1'},
        {name: 'Executor'},
        {name: 'Rebel transport'}
    ]
        
return(
    <>
        {starships.map((starship) => {
            const { name } = starship;
            return (
                <div className="card">
                    <Link to={`/starships/${name}`}>
                        <h2>{name}</h2>
                    </Link>
                </div>
            );
        })}
    </>
)
}

{/* <div className="currencies">
            {currencies.map((coin) => {
                const { name, symbol } = coin;

                return (
                    <Link to={`/price/${symbol}`}>
                        <h2>{name}</h2>
                    </Link>
                );
            })}
        </div> */}