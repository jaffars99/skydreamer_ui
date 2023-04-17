import React, { useState, useEffect } from 'react'

import Particle from './particle';

import LandingPage from './components/landing_page';
import TextFilling from './text_filling';


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <>
    <Particle/>
    {loading === false ? (
      <>
        <LandingPage/>
      </>
        
            ) : (
        <TextFilling />
      )}
      </>
  );
}

export default App;
