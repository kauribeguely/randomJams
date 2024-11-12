

import { useState } from 'react';

function ListItem(props)
{
  return  (
    <>
      <h3> List: {props.name} </h3>
      <p> {props.category ? props.category : "No Category"} </p>
    </>
  );

}

export default ListItem;
