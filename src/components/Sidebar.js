import React from 'react';

function Sidebar({ size, color, setSize, setColor }) {
  return (
    <div className='sidebar'>
      <input
        type='text'
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <input
        type='text'
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button
        onClick={() => {
          setSize(20), setColor('pink');
        }}
      >
        Make the text 20px and pink
      </button>
    </div>
  );
}

export default Sidebar;
