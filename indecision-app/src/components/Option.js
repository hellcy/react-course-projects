import React from 'react';

// remove option will an arrow function, pass in optionText
const Option = (props) => (
  <div>
    {props.optionText}
    <button 
      onClick={() => {
        props.handleDeleteOption(props.optionText)
      }}
    >
      remove
    </button>
  </div>
)

export default Option