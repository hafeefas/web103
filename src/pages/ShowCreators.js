import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '../components/Card';
import AddCreator from './AddCreator';
import { supabase } from '../client';

function ShowCreators() {
  const [creators, setCreators] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchCreators() {
      try {
        const { data, error } = await supabase.from('creators').select('*');
        if (error) {
          console.error('Error fetching creators:', error);
          return;
        }
        console.log('Fetched creators:', data);
        setCreators(data);
      } catch (error) {
        console.error('Error in fetchCreators:', error);
      }
    }

    fetchCreators();
  }, []); // Run once when the component mounts

  // Define inline styles

  const addButtonStyle = {
    backgroundColor: '#007bff', // Customize the background color
    color: '#fff', // Customize the text color
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const addButtonHoverStyle = {
    backgroundColor: '#0056b3', // Customize the hover background color
  };

  return (
    <div>
      <h1 style={{color:"white"}}>Welcome to the Creators page!</h1>
      <Link to="/AddCreator">
        <button style={addButtonStyle} onMouseOver={() => {}} onMouseOut={() => {}}>
          Add Creator
        </button>
      </Link>

      {console.log(creators, 'creators')}
      {creators.length === 0 ? (
        <p> There are currently no users in the database. </p>
      ) : (
        <ul style={{ listStyleType: 'none' }}>
          {creators.map((creator, index) => {
            return (
              <li key={index}>
                <Link to={`/view/${creator.id}`}>
                  <Card
                    id={creator.id}
                    name={creator.name}
                    description={creator.description}
                    url={creator.url}
                    imageURL={creator.imageURL} // Use imageURL here
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      {console.log('creators array now:', creators)}
      <Link to="/AddCreator"></Link>
    </div>
  );
}

export default ShowCreators;
