import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Song = ({ song, onDelete, onEdit  }) => {
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
          <button onClick={onDelete}><FontAwesomeIcon icon={faPencilAlt} /></button>
          <button onClick={onDelete}><FontAwesomeIcon icon={faTrash} /></button>
        </div>
      </div>
    </div>
  );
};

export default Song;
