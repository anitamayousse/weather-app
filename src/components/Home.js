import styled from 'styled-components';
import moment from "moment";

import { useForm } from "react-hook-form";

import { useState, useEffect, useContext } from "react";

import {favContext} from '../App';
import Card from '../components/Card'

function Home() {

//states
      const [data, setData] = useState([]);
      const [getState, setGetState] = useState(localStorage.getItem("savedCity"));
      const favorite = useContext(favContext);
      const {
        register,
        getValues,
        handleSubmit,
      } = useForm();
// following function handles the operation of adding fav recipes's id's
      const getFavorite = () => {
        if (favorite.store.length < 3  ) {
            favorite.store.push(data);
      
        } else {
          alert("You can't add more than 3 items")
        }
      };

      useEffect(() => {
        if (localStorage.getItem("savedCity") === null) {
          navigator.geolocation.getCurrentPosition((position) => {
        console.log(`latitude : ${position.coords.latitude} / longitude : ${position.coords.longitude}`);
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=1e16d4d808acf38429a267a69416f852`
        )
          .then((res) => res.json())
          .then((data) => {
    
            setData([data]);
            setGetState(data.name);
    
          });
      }, (error) => {
        console.error(error);
      });
        }
        
      }, [])

      const inputHandler = () => {
        const value = getValues("location");
        setGetState(value);
      };
      useEffect(() => {
        setTimeout(() =>{
        if (getState !== undefined && getState !== null) {
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${getState}&units=metric&appid=1e16d4d808acf38429a267a69416f852`
        )
          .then((res) => res.json())
          .then((data) => {
    
            setData([data]);
          })
          .catch((err) => {

          })}
         }, 1000);
        
      }, [getState]);

    return (
      <>
          <div className="video-wrapper" >
            <video loop autoPlay  muted  >
            <source src="https://media.istockphoto.com/videos/colorful-cloudscape-changing-in-time-lapse-video-in-4k-video-id1271757279" type="video/mp4"/>
            </video>
            </div>
            <div className='bg-home'></div>
            <div className='date'>
            <H3>Weather Forecast</H3>
            <div>
              <H5>Today:</H5>
              <P>{moment().format('LL')}</P>
            </div>
            </div>
   <div className="cardhome">
    <Container >
    <form onSubmit={handleSubmit(inputHandler)}>
        <Input
          {...register("location", { required: true })}
          type="text"
          name="location"
          id="location"
          placeholder="Enter a city"
        />
      <Button type="submit">
        Search
      </Button>
      </form> 
    </Container>
    {data.length === 0 ?  
    (<p></p>
            ):(
      <Card 
            image={`http://openweathermap.org/img/w/${data[0].weather[0].icon}.png`}
            status={data[0].weather[0].main}
            name={data[0].name}
            degree={Math.round(data[0].main.temp)}
            tempMin={Math.round(data[0].main.temp_min)}
            tempMax={Math.round(data[0].main.temp_max)}
            onClick={getFavorite}
            children="&hearts;"
            title='Add to favorite'
      />)}
      </div>
          
          </>
          );
  }
  
  export default Home;

  const H3 = styled.h1`
    text-align:center;
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

const Input = styled.input`
border-radius:12px;
border: 1px solid black;
background-color:rgb(255, 255, 255,0.7);
width:80px;
height:40px;
@media (max-width: 1500px) {
  width:200px;
  height:40px;
  font-family: 'Oswald', sans-serif;
}
`;
const Button = styled.button`
border-radius:12px;
border-color:black;
border: 1px solid ;
background-color:rgb(255, 255, 255,0.9);
width:80px;
height:40px;
font-family: 'Oswald', sans-serif;
@media (max-width: 2500px) {
  width:80px;
  height:40px;
}
`;

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap:10px;
padding-bottom:12px;

`;
