
import './App.css';
import List from './components/List';
import ListItem from './components/ListItem';
import { useState } from 'react';

function App() {
  // State to hold list items
  const [lists, setLists] = useState([
    {
       id: 1,
       name: 'List 1',
       category: 'boop',
       listItems: [
         { id: 1, text: 'Buy milk', completed: false, owner: 'him' },
         { id: 2, text: 'Get bread', completed: true, owner: 'her' }
       ]
     },
     {
       id: 2,
       name: 'List 2',
       category: 'beep',
       listItems: [
         { id: 1, text: 'Email client', completed: false, owner: 'him' },
         { id: 2, text: 'Write report', completed: false, owner: 'her' }
       ]
     },
  ]);

  // const []

// Function to add a new list item
const addList = () => {

 const newList = { name: `List ${lists.length + 1}`, category: 'new category' };
 setLists([...lists, newList]);

};

  // return (
  //  <div className="App">
  //    <div>
  //      {/* Button to add a new list */}
  //      <button onClick={addList}>Add New List</button>
  //      <p>boop</p>
  //      {/* Render each list item */}
  //      {lists.map((list, index) => (
  //        <List key={index} name={list.name} category={list.category} />
  //      ))}
  //    </div>
  //  </div>
  // );

  return (
   <div className="App">
     <div>
       {/* Button to add a new list */}
       <button onClick={addList}>Add New List</button>
       {/* Render each list item */}
       {lists.map((list, index) => (
         <List key={index} name={list.name} category={list.category} listItems={list.listItems} />
       ))}

      </div>
     </div>

       // {lists.map((list, index) =>
       // (
       //   <List key={index} name={list.name} category={list.category} />
       // ))}


       // {lists[0].listItems.map(item, index) => (
       //   <List key={index} text={item.text} completed={item.completed}, owner={item.owner} />
       // ))}
  );
}

export default App;
