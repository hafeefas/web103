import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '../components/Card';
import { supabase } from '../client';

function ShowCreators() {
  const [creators, setCreators] = useState([]);
  // eslint-disable-next-line no-unused-vars
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

  return (
    <div>
      <h1 style={{color:"white"}}>Welcome to the Creators page!</h1>
      <Link to="/AddCreator">
        {/* <button style={addButtonStyle} onMouseOver={() => {}} onMouseOut={() => {}}>
          Add Creator
        </button> */}
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
