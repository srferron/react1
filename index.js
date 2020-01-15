import React, { Component } from 'react';
import { render } from 'react-dom';

//React Component
function Saluda () {
  return <h2>Hola componente</h2>
}
render(<Saluda/>, document.getElementById('root'));

//React element
//const hello = <h1>Hola2</h1>
//render(hello, document.getElementById('root'));

//console.log(hello);




