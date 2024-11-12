

import ListItem from './ListItem';
import { useState } from 'react';

function List(props)
{
  const [listItems, setListItems] = useState([
    { name: 'List 1', category: 'boop' },
  ]);

  return  (
    <>
      {listItems.map((list, index) => (
        <ListItem name={list.name} category={list.category} />
      ))}
    </>
  );

}

export default List;
