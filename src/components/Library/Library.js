import React, { useState, useEffect } from 'react';
import Song from '../SongItem/Song';
import AddSongForm from '../AddSongForm/AddSongForm';
import './style.scss';

const Library = () => {
  const [songs, setSongs] = useState([]);

  let starterData = [
    {
      "name": "Midnight Echoes",
      "prompt": "Reflections under the starlight",
      "color": "red",
      "createdAt": "2024-05-06T17:00:00-07:00"
    },
    {
      "name": "Whispering Pines",
      "prompt": "Mystic trees in twilight's glow",
      "color": "green",
      "createdAt": "2024-05-06T17:00:00-05:00"
    },
    {
      "name": "Neon Dreams",
      "prompt": "City lights in the rain",
      "color": "blue",
      "createdAt": "2024-05-06T17:00:00-06:00"
    },
    {
      "name": "Ocean's Embrace",
      "prompt": "Waves crashing on moonlit shores",
      "color": "yellow",
      "createdAt": "2024-05-06T17:00:00-02:00"
    }
  ]
  
  console.log(starterData)

  const getRandomColor = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'pink', 'cyan', 'magenta'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };  

  useEffect(() => {
    // Fetch songs data from localStorage or use the starter data
    const storedSongs = JSON.parse(localStorage.getItem('songs'));
    if (storedSongs.length > 0) {
      setSongs(storedSongs);
    } else {
      setSongs([...starterData]);
    }
  }, []);

  const updateLocalStorage = (songs) => {
    localStorage.setItem('songs', JSON.stringify(songs));
  }

  useEffect(() => {
    // Save songs data to localStorage
    // localStorage.setItem('songs', JSON.stringify(songs));
    updateLocalStorage(songs)
  }, [songs]);

  const handleCreateSong = (name, prompt) => {
    const newSong = {
      name,
      prompt,
      color: getRandomColor(),
      createdAt: new Date().toISOString(),
    };
    updateLocalStorage(songs)
    setSongs([newSong, ...songs]);
  };

  const handleDeleteSong = (index) => {
    const updatedSongs = [...songs];
    updatedSongs.splice(index, 1);
    setSongs(updatedSongs);
  };

  return (
    <section className="library-layout">
      <div className="library-add-form-wrapper">
        <AddSongForm onAdd={handleCreateSong} />
      </div>
      
      <div className="library-list-wrapper">
        {songs.map((song, index) => (
          <Song key={index} song={song} onDelete={() => handleDeleteSong(index)} />
        ))}
      </div>
    </section>
  );
};

export default Library;
