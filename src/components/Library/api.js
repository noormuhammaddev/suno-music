import axios from 'axios';

export async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
}

export async function addNewSong(url, newSongData) {
  try {
    const response = await axios.post(url, newSongData);
    return response.data;
  } catch (error) {
    console.error('There was a problem with the operation:', error);
    throw error;
  }
}
