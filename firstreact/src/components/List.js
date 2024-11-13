
import ListItem from './ListItem';
import { useState } from 'react';

function List(props)
{
  const [listItems, setListItems] = useState([
    { text: 'milk', completed: 'true' },
    { text: 'eggs', completed: 'false' },
    { text: 'bread', completed: 'false' },
  ]);

  return  (
    <div className="singleList" onClick={props.onView}>
        <h2>{props.name}</h2>
        <h3 className='right'>{props.timeModified}</h3>
    </div>
  );

}

// {(props.listItems && props.listItems.length > 0 ? props.listItems : [{ text: 'Add Item', completed: false }]).map((list, index) => (
//   <ListItem key={index} text={list.text} completed={list.completed} />
// ))}

export default List;
