import React, { useState } from 'react';

function App() {
  const [imageSrc, setImageSrc] = useState('');
  const [imageWidth, setImageWidth] = useState(100); // Default width: 100px
  const [rows, setRows] = useState(3);
  const [itemsPerRow, setItemsPerRow] = useState(4);
  const [rowSpacing, setRowSpacing] = useState(10);
  const [itemSpacing, setItemSpacing] = useState(10);

  return (
    <div className="App">
      <h1>Image Loop App</h1>

      {/* Input Form */}
      <div>
        <input
          type="text"
          placeholder="Image URL"
          value={imageSrc}
          onChange={(e) => setImageSrc(e.target.value)}
        />
        <input
          type="number"
          value={imageWidth}
          onChange={(e) => setImageWidth(e.target.value)}
          placeholder="Set image width"
        />
        <input
          type="number"
          placeholder="Number of Rows"
          value={rows}
          onChange={(e) => setRows(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Items Per Row"
          value={itemsPerRow}
          onChange={(e) => setItemsPerRow(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Row Spacing (px)"
          value={rowSpacing}
          onChange={(e) => setRowSpacing(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Item Spacing (px)"
          value={itemSpacing}
          onChange={(e) => setItemSpacing(Number(e.target.value))}
        />
      </div>

      {/* Preview Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateRows: `repeat(${rows}, auto)`,
          gap: `${rowSpacing}px`,
        }}
      >
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              display: 'flex',
              gap: `${itemSpacing}px`,
            }}
          >
            {Array.from({ length: itemsPerRow }).map((_, itemIndex) => (
              <img
                key={itemIndex}
                src={imageSrc || 'https://via.placeholder.com/100'}
                alt="Looped"
                style={{ width: `${imageWidth}px` }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
