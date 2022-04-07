import React, { useContext } from "react";
import Card from "../components/Card";
import { useHistory } from "react-router-dom";
import { favContext } from "../App";
import styled from 'styled-components';
import moment from "moment";



function Favorites() {
// Add a favorite city
    const favorite = useContext(favContext);


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
            <div className="video-wrapper">
            <video loop autoPlay  muted >
            <source src="https://media.istockphoto.com/videos/colorful-cloudscape-changing-in-time-lapse-video-in-4k-video-id1271757279" type="video/mp4"/>
            </video>
            <div className='bg-fav'></div>
            </div>
            <div className='date'>
            <H3> Your Favorites Weather Forecasts</H3>
            <div>
              <H5>Today:</H5>
              <P>{moment().format('LL')}</P>
            </div>
            </div>
            <p>Favorites</p>
            {favorite.store.map((data) => {
                       const getStorage = () => {
                        localStorage.setItem("savedCity", data[0].name)
                        }
            return (
            <div className="cardfavorit">
            <div className="col fav" >
            <Card 
            image={`http://openweathermap.org/img/w/${data[0].weather[0].icon}.png`}
            status={data[0].weather[0].main}
            name={data[0].name}
            degree={Math.round(data[0].main.temp)}
            tempMin={Math.round(data[0].main.temp_min)}
            tempMax={Math.round(data[0].main.temp_max)}
            onClick={() => removeFavorite(data)}
            onStorage={getStorage}
            children="-"
            title='Remove favorite'
      />
      </div>
            </div>
            
        );
            })}
    </>
    );
  }
  
  export default Favorites;
const H3 = styled.h1`
  text-align:center;
  padding:20px;
  font-family: 'Oswald', sans-serif;
  color:black;
`;
const H5 = styled.h5`
  text-align:center;
  font-family: 'Oswald', sans-serif;
  color:black;
`;
const P = styled.p`
  text-align:center;
  font-family: 'Oswald', sans-serif;
  color:black;
`;