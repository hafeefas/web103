import React from 'react';
import { Link } from 'react-router-dom'
import { supabase } from '../client';

function Card(props) {
    const { id, name, description, url, imageURL } = props;

    // Check if any of the user information is available
    const hasUserData = name || description || url || imageURL;

    const handleDelete = async () => {
        try {
            let deletion = await supabase.from('creators').delete().eq('id', id);
            console.log(deletion, "deleting supabase id was successful")
            window.location.href = '/';

        } catch (error) {
            console.log("deletion failed.")
        }
    }

    return (
        <div style={styles.card}>
            {hasUserData ? (
                <>
                    <h2 style={styles.title}>{name}</h2>
                    <p style={styles.description}>{description}</p>
                    <p style={styles.url}>{url}</p>
                    {imageURL && <img src={imageURL} alt={name} style={styles.image} />}
                </>
            ) : (
                <p style={styles.noData}>There are no users currently registered in the database.</p>
            )}
            <div>
                <div style={styles.actions}>
                    <Link to={`/edit/${id}`} style={editButtonStyle}>
                        Edit
                    </Link>

                    <button onClick={handleDelete} style={deleteButtonStyle}>Delete</button>
                </div>
            </div>
        </div>
    );
}

const styles = {
    card: {
        border: "2px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
        maxWidth: "40%",
        marginTop: "50px",
        marginRight: "1%",
        height: "auto",
        marginBottom: "20px",
        float:"left"
    },
    title: {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "10px",
    },
    description: {
        fontSize: "16px",
        marginBottom: "10px",
    },
    url: {
        fontSize: "14px",
        color: "#007bff",
        marginBottom: "10px",
    },
    image: {
        width: "100%", // Make sure the image takes full width of the card
        height: "auto",
        marginBottom: "10px", // Add some spacing below the image
    },
    noData: {
        fontStyle: "italic",
        color: "#777",
    },
    actions: {
        marginTop: "10px",
    },
    button: {
        color: "white",
        padding: '10px 20px',
        borderRadius: '6px',
        border: 'none',
        boxShadow:
            'rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, rgba(58, 65, 111, .5) 0 -3px 0 inset',
        backgroundColor: 'radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%)',
        cursor: 'pointer',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '18px',
        alignItems: 'center',
        justifyContent: 'center',
        height: '58px',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textDecoration: 'none',
        transition: 'box-shadow 0.15s, transform 0.15s',
        willChange: 'box-shadow, transform',
        margin: "10px"
    },
};

const editButtonStyle = {
    ...styles.button, // Include the common button styles
    backgroundColor: 'white', // Customize the background color
    color: "black",
    padding: "19px"
};

const deleteButtonStyle = {
    ...styles.button, // Include the common button styles
    backgroundColor: 'red', // Customize the background color
    color: "black"
};

export default Card;
