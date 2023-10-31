import React from 'react'

function Menu(props) {
  return (
    <button onClick={props.onClick} className="hamburger-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
        <g id="Hamburger_Menu">
          <path fill="#f9004d" d="M45.9,12h-44V8h44V12z M45.9,22h-44v4h44V22z M45.9,36h-44v4h44V36z"/>
        </g>
      </svg>
    </button>
  );
}

export default Menu;