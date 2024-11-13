
import './App.css';
import List from './components/List';
import ListItem from './components/ListItem';
import { useState, useEffect } from 'react';

function App() {
  // State to hold list items
  const [lists, setLists] = useState([]);
  // const [lists, setLists] = useState([
  //   {
  //      id: 1,
  //      name: 'List 1',
  //      timeModified: '1 Nov',
  //      listItems: [
  //        { id: 1, text: 'Buy milk', completed: false, owner: 'him' },
  //        { id: 2, text: 'Get bread', completed: true, owner: 'her' }
  //      ]
  //    },
  //    {
  //      id: 2,
  //      name: 'List 2',
  //      timeModified: '1 Nov',
  //      listItems: [
  //        { id: 1, text: 'Email client', completed: false, owner: 'him' },
  //        { id: 2, text: 'Write report', completed: false, owner: 'her' }
  //      ]
  //    },
  // ]);

  const [activePage, setActivePage] = useState("allLists");
  const [currentList, setCurrentList] = useState(null);


  // Load lists from localStorage when the app starts
    useEffect(() => {
      const storedLists = localStorage.getItem("lists");
      if (storedLists) {
        // console.log('stored: ' + storedLists);
        setLists(JSON.parse(storedLists));
      }
    }, []);

    // Save lists to localStorage whenever lists state changes
    useEffect(() => {
      if (lists.length > 0) {  // Prevent saving empty array repeatedly
        console.log('Saving to localStorage:', lists);
        localStorage.setItem("lists", JSON.stringify(lists));
      }
    }, [lists]);  // This effect runs only when lists change

  // Function to view a single list
const viewList = (list) => {
  setCurrentList(list);
  setActivePage("singleList");
};

function formatDate(date) {
        // Define the months array
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        // Get the day and month
        const day = date.getDate();
        const month = months[date.getMonth()];

        // Return formatted date
        return `${day} ${month}`;
    }

  // Function to add a new list item
  const addList = () =>
  {
    // Get the current date
    const currentDate = new Date();
    let dateString = formatDate(currentDate);

    const newList = { name: `List ${lists.length + 1}`, timeModified: dateString, listItems : [ {id: 1, text: 'First ITem', completed: false, owner: 'him'} ] };
    setLists([...lists, newList]);
    viewList(newList);
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
        <button onClick={() => setActivePage("allLists")} id='button-home'>&#127968;</button>
           <h2>{currentList.name}</h2>
           <h3>{currentList.timeModified}</h3>
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
