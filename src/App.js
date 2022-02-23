
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
//css
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
//Pages
import Home from './components/Home'
import Favorites from './components/Favorites';

function App() {
  return (
    <BrowserRouter>
    <div className='bg-black'>
    <nav className="nav navbar-nav ">
      <Ul className='d-flex'>
        <li>
          <Link to="/" className='text-link'>Home</Link>
        </li>
        <li>
          <Link to="/Favorites" className='text-link'>Favorites</Link>
        </li>
      </Ul>
    </nav>
    </div>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Favorites" component={Favorites} />
    </Switch>
    <footer>
      <div className="bg-black">
        <h5 className="text-center text-white">© Made by Anita Mayousse 2022.</h5>
      </div>
    </footer>
    </BrowserRouter>
  );
}

export default App;

const Ul = styled.li`
  padding: 30px;
  list-style: none;
  gap: 12px;
  `;