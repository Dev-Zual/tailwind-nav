import React from 'react';

const Link = (props) => {
  const { name, link } = props.item;
  return (
    <li className="mr-5">
      <a href={link}></a>
      {name}
    </li>
  );
};

export default Link;
