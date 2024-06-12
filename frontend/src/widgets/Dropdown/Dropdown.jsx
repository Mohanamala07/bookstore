import React from 'react';

const Dropdown = ({ title, links }) => {
  return (
    <li className="dropdown">
      <span className="menu-item">{title}</span>
      <div className="dropdown-content">
        {links.map((link, index) => (
          <a key={index} href={link.path}>{link.link}</a>
        ))}
      </div>
    </li>
  );
};

export default Dropdown;
