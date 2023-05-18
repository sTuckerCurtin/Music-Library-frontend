import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MusicTable = (props) => {
  const [songs, setSongs] = useState([]);

  async function fetchSongs() {
      const response = await axios.get('http://127.0.0.1:5000/api/songs');
      setSongs(response.data.songs);
  }
    

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Genre</th>
          <th>Release Date</th>
          <th>Running Time</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song) => (
          <tr key={song.id}>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.genre}</td>
            <td>{song.release_date}</td>
            <td>{song.running_time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MusicTable;
