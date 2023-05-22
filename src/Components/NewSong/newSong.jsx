import axios from 'axios';
import React, { useState } from 'react';
import "./NewSong.css"

const AddNewSongForm = ({ onSongAdded }) => {
  const [newSongTitle, setNewSongTitle] = useState('');
  const [newArtistName, setNewArtistName] = useState('');
  const [newAlbumName, setNewAlbumName] = useState('');
  const [newSongGenre, setNewSongGenre] = useState('');
  const [newSongReleaseDate, setNewSongReleaseDate] = useState('');
  const [newSongRunningTime, setNewSongRunningTime] = useState(0);

  async function addSong() {
    const response = await axios.post('http://127.0.0.1:5000/api/songs', {
      title: newSongTitle,
      artist: newArtistName,
      album: newAlbumName,
      genre: newSongGenre,
      release_date: newSongReleaseDate,
      running_time: newSongRunningTime,
    });

    const newSongData = response.data;
    onSongAdded(newSongData); 
  }

  function handleSubmit(event) {
    event.preventDefault();
    addSong();
  
    
    setNewSongTitle('');
    setNewArtistName('');
    setNewAlbumName('');
    setNewSongGenre('');
    setNewSongReleaseDate('');
    setNewSongRunningTime(0);
  };
  
  

  return (
    <section className='bg'>
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="songTitle" className="form-label">Song Title</label>
          <input
            type="text"
            className="form-control"
            id="songTitle"
            value={newSongTitle}
            onChange={event => setNewSongTitle(event.target.value)}
            placeholder="Song Title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="artistName" className="form-label">Artist</label>
          <input
            type="text"
            className="form-control"
            id="artistName"
            value={newArtistName}
            onChange={event => setNewArtistName(event.target.value)}
            placeholder="Artist"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="albumName" className="form-label">Album</label>
          <input
            type="text"
            className="form-control"
            id="albumName"
            value={newAlbumName}
            onChange={event => setNewAlbumName(event.target.value)}
            placeholder="Album"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="songGenre" className="form-label">Genre</label>
          <input
            type="text"
            className="form-control"
            id="songGenre"
            value={newSongGenre}
            onChange={event => setNewSongGenre(event.target.value)}
            placeholder="Genre"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="songReleaseDate" className="form-label">Release Date</label>
          <input
            type="text"
            className="form-control"
            id="songReleaseDate"
            value={newSongReleaseDate}
            onChange={event => setNewSongReleaseDate(event.target.value)}
            placeholder="Release Date"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="songRunningTime" className="form-label">Song Time In Seconds</label>
          <input
            type="number"
            className="form-control"
            id="songRunningTime"
            value={newSongRunningTime}
            onChange={event => setNewSongRunningTime(parseInt(event.target.value))}
            placeholder="Song Time In Seconds"
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Song</button>
      </form>
    </div>
  </section>
  
  );
}

export default AddNewSongForm;