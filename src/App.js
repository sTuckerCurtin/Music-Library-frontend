import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import Header from './Components/Header/Header';


function App(props) {
  return (
    <div>
      <Header/>
      <MusicTable/>
    </div>
  );
}

export default App;
