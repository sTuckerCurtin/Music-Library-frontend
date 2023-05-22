import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import Header from './Components/Header/Header';
import AddNewSongForm from './Components/NewSong/newSong';
import "./App.css"


function App(props) {
  const [songs, setSongs] = useState([]);

  async function fetchSongs(){
    const response = await axios.get('http://127.0.0.1:5000/api/songs')
    setSongs(response.data.songs);
    
  }
  useEffect(() =>{fetchSongs()}, []);
  




  return (
    <div>
      <Header />
      <section>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6'>
              <MusicTable songs={songs} />
            </div>
            <div className='col-md-6'>
              <AddNewSongForm onSongAdded={fetchSongs} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
  
  
export default App;