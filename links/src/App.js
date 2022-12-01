import * as React from 'react';
import Button from '@mui/material/Button';

import './App.css';
import image from "./rachel-mcdermott-0fN7Fxv1eWA-unsplash.jpeg";
import  Header  from "./components/header/Header";

import Icon from "./components/icon/Icon";
import twitter from "./_assets/twitter.svg";
import instagram from "./_assets/instagram.svg";
import facebook from './_assets/facebook.svg';
import whatsapp from './_assets/whatsapp.svg'

function App() {
  return (
    <div className="App container">
      <Header src={image} alt="Minha Imagens" name="Rachel McDermott"/>
      <Button variant="outlined" className='btn'>First Link</Button>
      <Button variant="outlined" className='btn'>Secundary Link</Button>
      <Button variant="outlined" className='btn' >Third Link</Button>

      <div>
      <Icon src={twitter}/>
      <Icon src={facebook}/>
      <Icon src={instagram}/>
      <Icon src={whatsapp}/>
      </div>
    </div>
  );
}

export default App;
