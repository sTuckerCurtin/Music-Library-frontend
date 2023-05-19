import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import Header from './Components/Header/Header';
import AddNewSongForm from './Components/NewSong/newSong';


function App(props) {
  const [songs, setSongs] = useState([]);

  function handleSongAdded(newSong) {
    setSongs(prevSongs => [...prevSongs, newSong]);
  }
  

  return (
    <div>
      <Header/>
      <AddNewSongForm onSongAdded={handleSongAdded}/>
      <MusicTable songs={songs}/>
    </div>
  );
}

export default App;
