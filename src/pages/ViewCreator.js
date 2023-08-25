import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { supabase } from '../client';

function ViewCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    async function fetchCreator() {
      try {
        const { data } = await supabase
          .from('creators')
          .select('*')
          .eq('id', id)
          .single();

        if (data) {
          setCreator(data);
        }
      } catch (error) {
        console.error(error, "error in fetchCreator");
      }
    }

    fetchCreator();
  }, [id]);

  if (!creator) {
    return <p style={{ color: "white" }}>Loading... if you made it here by clicking delete, you may go back to the show creators page. You're deletion was successful.</p>;
  }

  const handleDelete = async () => {
    try {
      let deletion = await supabase.from('creators').delete().eq('id', id);
      console.log(deletion, "deleting supabase id was successful");
      window.location.href = '/';

    } catch (error) {
      console.log("deletion failed.");
    }
  };

  const styles = {
    container: {
      color: "white",
      display: "flex",
      position: "absolute",
      border:"solid white 5px"
    },
    leftColumn: {
      // flex:1,
    },
    rightColumn: {
      flex: 13,
      padding: "200px 250px",
      maxWidth: "550px",
      margin: "0 auto",
      fontSize:"x-large"
    },
    button: {
      color:"black",
      padding: '10px 20px',
      borderRadius: '6px',
      border: 'none',
      boxShadow:
        'rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, rgba(58, 65, 111, .5) 0 -3px 0 inset',
      backgroundColor: 'radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%)',
      cursor: 'pointer',
      // display: 'inline-flex',
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: '18px',
      alignItems: 'center',
      justifyContent: 'center',
      height: '48px',
      userSelect: 'none',
      WebkitUserSelect: 'none',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textDecoration: 'none',
      transition: 'box-shadow 0.15s, transform 0.15s',
      willChange: 'box-shadow, transform',
    },
    // Add styles for the button on :focus, :hover, and :active states
    buttonFocus: {
      boxShadow:
        '#3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset',
    },
    buttonHover: {
      boxShadow: 'rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset',
      transform: 'translateY(-2px)',
    },
    buttonActive: {
      boxShadow: '#3c4fe0 0 3px 7px inset',
      transform: 'translateY(2px)',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftColumn}>
        <img src={creator.imageURL} alt={creator.name} style={{ maxWidth:"100%", width:"816px" }} />
      </div>
      <div style={styles.rightColumn}>
        <h1>{creator.name}</h1>
        <p>{creator.url}</p>
        <p>{creator.description}</p>

      <div>
        <Link to={`/edit/${id}`} style={{...styles.button, backgroundColor:"white", padding:"14px", margin:"10px" }}>
          Edit
        </Link>

        <button onClick={handleDelete} style={{...styles.button, backgroundColor:"red" }}>
          Delete
        </button>
        </div>
      </div>
    </div>

  );
}

export default ViewCreator;
