import Ticker from 'framer-motion-ticker/src';
import React from 'react';

function App() {
  const colors = ['#632bf3', '#f122c8', '#f16022', '#9ef344', '#44d3f3'];

  return (
    <div className="App">
      <Ticker duration={20}>
        {colors.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: item,
              margin: '5px',
              height: '250px',
              width: '200px',
            }}
          />
        ))}
      </Ticker>
    </div>
  );
}

export default App;
