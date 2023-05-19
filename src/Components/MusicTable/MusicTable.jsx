import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../searchBar/SearchBar';

const MusicTable = (props) => {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  

  async function fetchSongs(){
    const response = await axios.get('http://127.0.0.1:5000/api/songs')
    setSongs(response.data.songs);
    setFilteredSongs(response.data.songs)
  }
  useEffect(() =>{fetchSongs()}, []);

  function handleSearch(searchTerm){
    const filteredSongs = songs.filter((song) => song.title.includes(searchTerm) || 
    song.artist.includes(searchTerm) || 
    song.album.includes(searchTerm)||
    song.genre.includes(searchTerm)||
    song.release_date.toString().includes(searchTerm)||
    song.running_time.toString().includes(searchTerm) ||
    song.release_date === parseInt(searchTerm)||
    song.running_time === parseInt(searchTerm));

    console.log('Filtered songs:', filteredSongs);

    setFilteredSongs(filteredSongs)
  }
    return (
        <div>
            <SearchBar onSearch={handleSearch}/>
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
                    {filteredSongs.map((song) =>(
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
        </div>
   
  );
};

export default MusicTable;
