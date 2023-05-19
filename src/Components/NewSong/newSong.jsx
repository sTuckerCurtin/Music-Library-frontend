import axios from 'axios';
import React, { useState } from 'react';

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
    addSong().catch(error => {
      console.error(error);
    });
  }

  return (
    <section>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newSongTitle}
            onChange={event => setNewSongTitle(event.target.value)}
            placeholder="Song Title"
          />
          <input
            type="text"
            value={newArtistName}
            onChange={event => setNewArtistName(event.target.value)}
            placeholder="Artist"
          />
          <input
            type="text"
            value={newAlbumName}
            onChange={event => setNewAlbumName(event.target.value)}
            placeholder="Album"
          />
          <input
            type="text"
            value={newSongGenre}
            onChange={event => setNewSongGenre(event.target.value)}
            placeholder="Genre"
          />
          <input
            type="text"
            value={newSongReleaseDate}
            onChange={event => setNewSongReleaseDate(event.target.value)}
            placeholder="Release Date"
          />
          <input
            type="number"
            value={newSongRunningTime}
            onChange={event => setNewSongRunningTime(parseInt(event.target.value))}
            placeholder="Song Time In Seconds"
          />
          <button type="submit">Add Song</button>
        </form>
      </div>
    </section>
  );
}

export default AddNewSongForm;
