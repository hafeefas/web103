import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div>
      <nav style={styles.navbar}>
        <h1 style={styles.logo}> Creatorverse </h1>
        <div style={styles.navLinks}>
          <Link to="/" style={styles.link}>
            <button style={{ ...styles.button, ...styles.buttonHover }}>Show Creators</button>
          </Link>
          <Link to="/addcreator" style={styles.link}>
            <button style={{ ...styles.button, ...styles.buttonHover }}>Add Creator</button>
          </Link>

        </div>
      </nav>
      <div className="content">{children}</div>
    </div>
  );
}

const styles = {
  navbar: {
    color: "black",
    background: '#333',
    backgroundImage: "url('https://img.freepik.com/free-vector/realistic-galaxy-background-with-stars_52683-69202.jpg?w=2000&t=st=1692914517~exp=1692915117~hmac=533a1965e328e6df4d8ff2b972ecdbc2a3c51c957f45296fbec16dfba40d4231')",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    paddingTop: "315px",
    paddingRight: "10px",
  },
  logo: {
    color: "white",
    fontSize: '74px',
    fontWeight: 'bold',
    marginTop: "-20px",
  },

  navLinks: {
    display: 'flex',
    justifyContent:"center",
    gap: '20px', // This adds a gap between the links
    paddingBottom:"90px"
  },
  
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '16px',
    position: "relative",
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

export default Layout;
