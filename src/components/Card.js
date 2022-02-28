import styled from 'styled-components';

export default function Card(props) {

return (
  
 <CityCard>
  <div >
    <div className="justify-content-end d-flex py-2 px-2">
      <FavoriteButton title={props.title} type="submit" className="favoriteButton" onClick={props.onClick}><span>{props.children}</span></FavoriteButton>
    </div>
    <img
      src={props.image}
      alt="weather status icon"
    />
      <p>
        <p>{props.status}</p>
      </p>
    <h5>
      <i className="fas fa-map-marker-alt"></i>
      <p>{props.name}</p>
    </h5>
    <h2>
      {props.degree}&deg; C
    </h2>
    <div>
      <div>
        <p>
          <i className="fas fa-temperature-low "></i>
          <p>
            {props.tempMin}&deg; C
          </p>
        </p>
        <p>
          <i className="fas fa-temperature-high"></i>
          <p>
            {props.tempMax}&deg; C
          </p>
        </p>
      </div>
    </div>
  </div>
</CityCard>
);
}


const CityCard = styled.div`
  justify-content: center;
  align-items: center;
  text-align:center;
  border-color:gray;
  border-width:1px;
  border-radius:12px;
  margin:20px;
  background-color:rgb(255, 255, 255,0.3);
  max-width:20rem;
  margin-left:auto;
  margin-right:auto;
  padding:5px;
`;

const FavoriteButton = styled.button`
  justify-content: center;
  align-items: center;
  text-align:center;
  background-color:rgb(255, 255, 255,0.0);
  border:none;
  max-width:20rem;
  font-size:35px;
  color:white;
`;