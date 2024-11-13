
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
       timeModified: '1 Nov',
       listItems: [
         { id: 1, text: 'Buy milk', completed: false, owner: 'him' },
         { id: 2, text: 'Get bread', completed: true, owner: 'her' }
       ]
     },
     {
       id: 2,
       name: 'List 2',
       timeModified: '1 Nov',
       listItems: [
         { id: 1, text: 'Email client', completed: false, owner: 'him' },
         { id: 2, text: 'Write report', completed: false, owner: 'her' }
       ]
     },
  ]);

  const [activePage, setActivePage] = useState("allLists");
  const [currentList, setCurrentList] = useState(null);

  // Function to view a single list
const viewList = (list) => {
  setCurrentList(list);
  setActivePage("singleList");
};

  // const []

// Function to add a new list item
const addList = () => {

 const newList = { name: `List ${lists.length + 1}`, timeModified: 'new category' };
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

  // Render the appropriate page based on `activePage`
   return (
     <div className="App">
       {activePage === "allLists" ? (
         <div id="allLists">

           <button onClick={addList}>Add New List</button>

           {lists.map((list, index) => (
             <div key={index}>
               <List name={list.name} timeModified={list.timeModified} listItems={list.listItems} onView={() => viewList(list)}/>
             </div>
           ))}

         </div>
       ) : activePage === "singleList" && currentList ? (
         <div id="singleList">
           <h2>{currentList.name}</h2>
           <button onClick={() => setActivePage("allLists")}>Back to All Lists</button>
           {currentList.listItems.map((item, index) => (
             <div key={index}>
               <input type="checkbox" checked={item.completed} readOnly />
               <span>{item.text}</span>
             </div>
           ))}
         </div>
       ) : null}
     </div>
   );
 }

export default App;
