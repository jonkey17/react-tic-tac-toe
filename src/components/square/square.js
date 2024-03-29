import React from 'react';
import  './square.css';

function Square(props) {
  return (
    <button className={"square " + (props.winner ? 'winner': '')} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
