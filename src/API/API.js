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
   <>
   <div>
    <Container >
        <Input
          type="text"
          id="location-name"
          onChange={inputHandler}
          value={getState}
        />
      <Button  onClick={submitHandler}>
        Search
      </Button>
    </Container>
      <Card>
        {data.main ? (
          <div >
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
      </Card>
      </div>
  </>
    )
  }


export default Api

const Input = styled.input`
  border-radius:12px;
  border: 1px solid black;
  background-color:rgb(255, 255, 255,0.7);
  width:80px;
  height:40px;
  @media (max-width: 1500px) {
    width:200px;
    height:40px;
  }
  `;
const Button = styled.button`
  border-radius:12px;
  border-color:black;
  border: 1px solid ;
  background-color:rgb(255, 255, 255,0.9);
  width:80px;
  height:40px;
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
`;

const Card = styled.div`
  justify-content: center;
  align-items: center;
  text-align:center;
  border-color:gray;
  border-width:1px;
  border-radius:12px;
  margin:20px;
  background-color:rgb(255, 255, 255,0.2);
  max-width:20rem;
  margin-left:auto;
  margin-right:auto;
`;
