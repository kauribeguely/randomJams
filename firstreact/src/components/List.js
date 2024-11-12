

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
    <>
      <h2>{props.name}</h2>
      <h3>{props.category}</h3>
      {(props.listItems).map((list, index) => (
      (
        <ListItem key={index} text={list.text} completed={list.completed} />
      )))}
    </>
  );

}

export default List;
