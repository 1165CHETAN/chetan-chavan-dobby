import React, { useState } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';

const HomeScreen = () => {
  const [image, setImage] = useState(null);

  // Function to handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
  };

  // Function to handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);

    try {
      // Send image data to the backend server
      const response = await axios.post('/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Image uploaded successfully:', response.data);
      // Handle success (e.g., show a success message to the user)
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <>
      <Hero />
      <div>
        <h1>Upload Image</h1>
        <form onSubmit={handleFormSubmit}>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <button type="submit">Upload</button>
        </form>
      </div>
    </>
  );
}

export default HomeScreen;
