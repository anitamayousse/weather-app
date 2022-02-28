import React, { useContext } from "react";
import Card from "../components/Card";
import { useHistory } from "react-router-dom";
import { favContext } from "../App";



function Favorites() {
// Add a favorite city
    const favorite = useContext(favContext);


//convert F to C 
    const convertFToC = (f) => {
        return (f - 273.15).toFixed(0);
        }
        const history = useHistory();
        const removeFavorite = (name) => {
            const index = favorite.store.indexOf(name);
            if (index > -1 ) {
                favorite.store.splice(index, 1)
                history.push("/Favorites")
            }
          }
        
        return (
            <>
            <p>Favorites</p>
            {favorite.store.map((data) => {
                       const getStorage = () => {
                        localStorage.setItem("savedCity", data[0].name)
                        }
            return (
            <div>
            <Card 
            image={`http://openweathermap.org/img/w/${data[0].weather[0].icon}.png`}
            status={data[0].weather[0].main}
            name={data[0].name}
            degree={convertFToC(data[0].main.temp)}
            tempMin={convertFToC(data[0].main.temp_min)}
            tempMax={convertFToC(data[0].main.temp_max)}
            onClick={() => removeFavorite(data)}
            onStorage={getStorage}
            children="-"
            title='Remove favorite'
      />
      </div>
        );
            })}
    </>
    );
  }
  
  export default Favorites;
