import React, { useState, useEffect } from 'react';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 5000); 
  }, []);

  return (
    <div className="flex flex-col bg-[#242424]">
      {loading ? (
        <div className="loading-screen">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <Header />
          <Body />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

