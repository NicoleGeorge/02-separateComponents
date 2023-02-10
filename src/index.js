import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import Sidebar from './components/Sidebar';
import MainArea from './components/MainArea';
import Footer from './components/Footer';

function App() {
  const [size, setSize] = useState(25);
  const [color, setColor] = useState('skyblue');
  const [likeCount, setLikeCount] = useState(0);

  return (
    <div className='grid-parent'>
      <div className='header'>
        <h1>Welcome To Our App!!</h1>
        <p>
          The current size is {size} and the current color is {color}.
        </p>
        <p>
          This page has been liked <strong>{likeCount}</strong> times.
        </p>
      </div>
      <Sidebar
        size={size}
        color={color}
        setSize={setSize}
        setColor={setColor}
      />
      <MainArea size={size} color={color} />
      <Footer setSize={setSize} setLikeCount={setLikeCount} />
    </div>
  );
}

const root = createRoot(document.querySelector('#app'));
root.render(<App />);
