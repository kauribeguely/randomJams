import { useEffect, useState } from 'react';

function App() {
  // State to hold the count of items
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Retrieve the array from localStorage, defaulting to an empty array if it doesn't exist
    const storedArray = JSON.parse(localStorage.getItem("myArray")) || [];

    // Set count based on the current length of storedArray
    setCount(storedArray.length);

    // Add one new item to storedArray for each app start
    const newArray = [...storedArray, storedArray.length + 1];
    localStorage.setItem("myArray", JSON.stringify(newArray));
  }, []); // Empty dependency array ensures this effect only runs once on component mount

  return (
    <div>
      <h1>Number of items in storage: {count}</h1>
    </div>
  );
}

export default App;
