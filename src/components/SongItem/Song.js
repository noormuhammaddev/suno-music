import React from 'react';
import './style.scss';

const Song = ({ song, onDelete }) => {
  const { name, prompt, color } = song;

  return (
    <div className="song-card" >
      <div className="song-card-thumbnail" style={{ backgroundColor: color }}></div>
      
      <div className="song-card-detail">
        <div>
          <h3>{name}</h3>
          <p>{prompt}</p>
        </div>
        <div className="song-card-actions">
          <button onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Song;
