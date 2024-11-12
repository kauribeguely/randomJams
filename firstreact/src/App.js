
import './App.css';
import List from './components/List';
import ListItem from './components/ListItem';
import { useState } from 'react';

function App() {
  // State to hold list items
  const [lists, setLists] = useState([
    { name: 'List 1', category: 'boop' },
    { name: 'List 2', category: 'beep' },
    { name: 'List 3', category: '' },
  ]);

  // const []

// Function to add a new list item
const addList = () => {
 const newList = { name: `List ${lists.length + 1}`, category: 'new category' };
 setLists([...lists, newList]);
};

  return (
   <div className="App">
     <div>
       {/* Button to add a new list */}
       <button onClick={addList}>Add New List</button>

       {/* Render each list item */}
       {lists.map((list, index) => (
         <List key={index} name={list.name} category={list.category} />
       ))}
     </div>
   </div>
  );
}

export default App;
