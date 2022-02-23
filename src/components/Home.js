import Api from "../API/API";
import styled from 'styled-components';

function Home() {
    return (
        <div>
            <div>
            <H3>Weather Forecast</H3>
            <Api/>
            </div>
        </div>
    );
  }
  
  export default Home;

  const H3 = styled.h3`
    text-align:center;
    padding:20px;
  `;