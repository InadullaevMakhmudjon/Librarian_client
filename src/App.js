import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { HomeButton } from './components/index';
// import Main from './views/Main';
// import Waiting from './views/Waiting';
import Details from './views/Details';
import './App.css';

function App() {
  return (
    <div className="App">
      <Details />
      <HomeButton variant="contained">
        <HomeIcon fontSize="large" />
      </HomeButton>
    </div>
  );
}

export default App;
