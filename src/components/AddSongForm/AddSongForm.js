import React, { useState } from 'react';
import './style.scss';

const AddSongForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !prompt) return; // Prevent adding empty songs

    // Call the onAdd function passed from the parent component (Library)
    onAdd(name, prompt);
    
    // Clear input fields after adding the song
    setName('');
    setPrompt('');
  };

  return (
    <section className="form-wrapper">
      <h3>Create a Song</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter song name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter AI prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit">Add Song</button>
      </form>
    </section>
  );
};

export default AddSongForm;
