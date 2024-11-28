import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to the Home Page</h1>
      <p>This is where the main content of your site will go.</p>
      <section style={{ marginTop: '20px' }}>
        <h2>Featured Games</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ width: '200px', padding: '10px', border: '1px solid #ccc' }}>
            <h3>Game 1</h3>
            <p>Description of the game...</p>
          </div>
          <div style={{ width: '200px', padding: '10px', border: '1px solid #ccc' }}>
            <h3>Game 2</h3>
            <p>Description of the game...</p>
          </div>
          <div style={{ width: '200px', padding: '10px', border: '1px solid #ccc' }}>
            <h3>Game 3</h3>
            <p>Description of the game...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
