import React, {useState} from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Song = ({ song, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(song.name);
  const [editedPrompt, setEditedPrompt] = useState(song.prompt);

  const handleSaveEdit = () => {
    onEdit(editedName, editedPrompt);
    setIsEditing(false);
  };

  return (
    <div className="song-card" >
      <div className="song-card-thumbnail" style={{ backgroundColor: song.color }}></div>
      
      <div className="song-card-detail">
        {
          isEditing ? (
            <>
              <div className="editable-fields">
                <div className="item">
                  <input
                    type="text"
                    className="editable-form-control"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                </div>
                <div className="item">
                  <input
                    type="text"
                    className="editable-form-control"
                    value={editedPrompt}
                    onChange={(e) => setEditedPrompt(e.target.value)}
                  />
                </div>
                
                
                <button onClick={handleSaveEdit}>Save</button>
              </div>
              
            </>
          ) : (
            <>
              <div>
                <h3>{song.name}</h3>
                <p>{song.prompt}</p>
              </div>
              <div className="song-card-actions">
                <button onClick={() => setIsEditing(true)}><FontAwesomeIcon icon={faPencilAlt} /></button>
                <button onClick={onDelete}><FontAwesomeIcon icon={faTrash} /></button>
              </div>
            </>
            
          )
        }
        
      </div>
    </div>
  );
};

export default Song;
