

import { useState } from 'react';

function ListItem(props)
{
  // Set initial checked state based on props
  const [isChecked, setIsChecked] = useState(props.isChecked);

  // Function to toggle checked state
  const toggleCheck = () => {
    setIsChecked((prev) => !prev); // Toggle the checked state
  };

    return (
      <div>
        <input type="checkbox" checked={props.isChecked} onChange={toggleCheck} />
        <span style={{ textDecoration: props.isChecked ? "line-through" : "none" }}>
          {props.text}
        </span>
      </div>
    );

}

export default ListItem;
