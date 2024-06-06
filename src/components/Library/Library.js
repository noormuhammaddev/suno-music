import React, { useState, useEffect } from 'react';
import Song from '../SongItem/Song';
import AddSongForm from '../AddSongForm/AddSongForm';
import './style.scss';
import { addNewSong, fetchData } from './api';

const Library = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetching songs

  
  useEffect(() => {
    const apiUrl = 'http://localhost:3001/songList';

    // Call the fetchData function from api.js
    fetchData(apiUrl)
      .then((responseData) => {
        setSongs(responseData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [songs]);
 
  // 
  const getRandomColor = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'pink', 'cyan', 'magenta'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };  


  const handleCreateSong = (name, prompt) => {
    console.log("OnCreate")
    const newSong = {
      name,
      prompt,
      color: getRandomColor(),
      createdAt: new Date().toISOString(),
    };

    const apiUrl = 'http://localhost:3001/songList';
    addNewSong(apiUrl, newSong)
    .then((responseData) => {
      setSongs([songs, responseData]);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });
  };

  const handleDeleteSong = (index) => {
    const updatedSongs = [...songs];
    updatedSongs.splice(index, 1);
    setSongs(updatedSongs);
  };

  const handleEditSong = (index, newName, newPrompt) => {
    const updatedSongs = [...songs];
    updatedSongs[index].name = newName;
    updatedSongs[index].prompt = newPrompt;
    setSongs(updatedSongs);
  };

  return (
    <section className="library-layout">
      <div className="library-add-form-wrapper">
        <AddSongForm onAdd={handleCreateSong} />
      </div>
      
      <div className="library-list-wrapper">
        {loading ? (
          <p>Loading...</p>
        ) : (
          songs.map((song, index) => (
            <Song 
              key={index} 
              song={song} 
              onDelete={() => handleDeleteSong(index)} 
              onEdit={(newName, newPrompt) => handleEditSong(index, newName, newPrompt)}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Library;
