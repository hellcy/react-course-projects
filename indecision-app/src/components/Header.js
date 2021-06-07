import React from 'react';

// As a functional components, you do not have access to THIS
// you need to pass props as the first argument
// get rid of all the THIS keyword
const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
  </div>
)

// default props will be used if props is not given
Header.defaultProps = {
  title: 'Indecision'
}

export default Header;