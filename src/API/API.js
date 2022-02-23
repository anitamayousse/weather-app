import { useState, useEffect } from "react";
import styled from 'styled-components';
function Api() {
    //states
    const [data, setData] = useState({});
    const [getState, setGetState] = useState('london');
    const [state, setState] = useState('london');
    //fetch url
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=1e16d4d808acf38429a267a69416f852`;
  
    useEffect(() => {
      setTimeout(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data =>{
          setData(data);
         })
         .catch((err) => {

         });
        }, 1000);
    }, [url]);
    const inputHandler = (event) => {
        setGetState(event.target.value);
      };
      //for input
      const submitHandler = () => {
        setState(getState);
      };
      //convert F to C 
      const convertFToC = (f) => {
        return (f - 273.15).toFixed(0);
      };
  return (
   <div className="App">
    <div className="container">
        <div>
          <Input
            type="text"
            id="location-name"
            onChange={inputHandler}
            value={getState}
          />
        </div>
        <Button  onClick={submitHandler}>
          Search
        </Button>
      </div>
      <div className="card mt-3 mx-auto" style={{ width: '60vw' }}>
        {data.main ? (
          <div class="card-body text-center">
            <img
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              alt="weather status icon"
              className="weather-icon"
            />

            <p className="h2">
              {convertFToC(data.main.temp)}&deg; C
            </p>

            <p className="h5">
              <i className="fas fa-map-marker-alt"></i>{' '}
              <strong>{data.name}</strong>
            </p>

            <div className="row mt-4">
              <div >
                <p>
                  <i class="fas fa-temperature-low "></i>{' '}
                  <strong>
                    {convertFToC(data.main.temp_min)}&deg; C
                  </strong>
                </p>
                <p>
                  <i className="fas fa-temperature-high"></i>{' '}
                  <strong>
                    {convertFToC(data.main.temp_max)}&deg; C
                  </strong>
                </p>
              </div>
              <div >
                <p>
                  {' '}
                  <strong>{data.weather[0].main}</strong>
                </p>
                
              </div>
            </div>
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
  </div>
    )
  }


export default Api

const Input = styled.input`
border-radius:12px;
border-color:black;
  `;
const Button = styled.button`
border-radius:12px;
border-width:1px;
border-color:black;
background-color:whitesmoke;
width:50%;
  `;