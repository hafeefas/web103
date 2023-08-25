import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';

const sharedStyles = {
  input: {
    display: "flex",
    marginBottom:"20px",
    padding: '20px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: 'white',
    width: '1000px',
    maxWidth: '100%',
    margin: '0 auto',
    color: "black"
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    padding:"16px"
  },
};

function EditCreator() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: '',
  });

  const [creator, setCreator] = useState(null);

  useEffect(() => {
    async function fetchCreator() {
      try {
        const { data, error } = await supabase
          .from('creators')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          console.error('Error fetching creator:', error);
          return;
        }

        console.log('Fetched creator:', data);
        setCreator(data);
        setFormData(data);
      } catch (error) {
        console.error('Error in fetchCreator:', error);
      }
    }

    fetchCreator();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from('creators')
        .update(formData)
        .eq('id', id);

      if (error) {
        console.error('Error updating creator:', error);
        return;
      }
      window.location.href = '/';


      console.log('Updated creator:', data);
    } catch (error) {
      console.error('Error in handleSubmit:', error);
    }
  };

  return (
    <div style={{ color: "white" }}>
      <h1 style={{ padding: "20px", paddingBottom: "20px" }}>Edit Content Creator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={sharedStyles.input}
            required
            placeholder="Enter the creator's name"
          />
        </div>
        <div>
          <label>URL:</label>
          <input
            type="text"
            name="url"
            value={formData.url}
            onChange={handleInputChange}
            style={sharedStyles.input}
            required
            placeholder="Enter the URL"
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            style={sharedStyles.input}
            required
            placeholder="Enter a description"
          />
        </div>
        <div>
          <label>Image URL (Optional):</label>
          <input
            type="text"
            name="imageURL"
            value={formData.imageURL}
            onChange={handleInputChange}
            style={sharedStyles.input}
            placeholder="Enter the image URL (optional)"
          />
        </div>
        <div style={{margin:"26px", padding:"16px"}}>
        <button type="submit" style={sharedStyles.button}>Update Content Creator</button>
      <Link to={`/view/${id}`} style={{color:"white", margin:"10px"}}>Back to View</Link>
      </div>
      </form>
    </div>
  

  );
}

export default EditCreator;
