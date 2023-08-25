import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';

function AddCreator() {
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from('creators').insert([{ ...formData, imageURL: formData.imageURL }]);
      if (error) {
        throw error;
      }
      window.location.href = '/';
      console.log(data, "New creator added successfully!");
    } catch (error) {
      console.error(error, "Error adding creator");
      // Handle the error, display a message to the user, etc.
      return;
    }
  };

  const styles = {
    formContainer: {
      color: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      marginTop:"40px",
    },
    inputLabel: {
      fontWeight: 'bold',
      textAlign: 'left',
    },
    input: {
      padding: '20px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      backgroundColor: 'white',
      color: 'black',
      width: '1000px',
      maxWidth: '100%',
      margin: '0 auto', // Center-align the input fields horizontally
    },
    button: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '15px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginRight:"10px"
    },
    goBackLink: {
      marginTop: '10px',
      textDecoration: 'none',
      backgroundColor: 'transparent',
      color: 'white',
    },
  };
  

  return (
    <div style={styles.formContainer}>
    <h1>Add a Content Creator</h1>
    <form style={styles.form} onSubmit={handleSubmit}>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Name Of the Creator:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          style={styles.input}
          required
          placeholder="Enter the creator's name"
        />
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>URL:</label>
        <input
          type="text"
          name="url"
          value={formData.url}
          onChange={handleInputChange}
          style={styles.input}
          required
          placeholder="Enter the URL "
        />
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          style={styles.input}
          required
          placeholder="Enter a description"
        />
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Image URL:</label>
        <input
          type="text"
          name="imageURL"
          value={formData.imageURL}
          onChange={handleInputChange}
          style={styles.input}
          required
          placeholder="Enter the image URL"
        />
      </div>
      <div style={{display:"flex", justifyContent:"center", margin:"10px"}}>
      <button type="submit" style={styles.button}>Add Content Creator</button>
      <Link to="/" style={styles.goBackLink}>Go Back to Home</Link>
      </div>
    </form>
  </div>
  
  );
}

export default AddCreator;
