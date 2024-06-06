import React, { useState, useEffect } from 'react';
import Song from '../SongItem/Song';
import AddSongForm from '../AddSongForm/AddSongForm';
import axios from 'axios';
import './style.scss';

const Library = () => {
  const [songs, setSongs] = useState([]);

  // fetching songs
  useEffect(() => {
    axios.get('http://localhost:3001/songList')
      .then(response => {
        setSongs(response.data);
      })
      .catch(error => {
          console.error('Error fetching todos:', error);
      });
  }, []);
 
  // 
  const getRandomColor = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'pink', 'cyan', 'magenta'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };  


  const handleCreateSong = (name, prompt) => {
    const newSong = {
      name,
      prompt,
      color: getRandomColor(),
      createdAt: new Date().toISOString(),
    };

    axios.post('http://localhost:3001/songList', newSong)
      .then(response => {
        setSongs([newSong, response.data]);
      })
      .catch(error => {
          console.error('Error adding todo:', error);
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
        {songs.map((song, index) => (
          <Song 
            key={index} 
            song={song} 
            onDelete={() => handleDeleteSong(index)} 
            onEdit={(newName, newPrompt) => handleEditSong(index, newName, newPrompt)}
          />
        ))}
      </div>
    </section>
  );
};

export default Library;
