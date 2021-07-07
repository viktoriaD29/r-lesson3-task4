import React from 'react'
import ReactDOM from 'react-dom'
import Greeting from './Greeting.jsx';
import './index.scss';

const rootElemnt = document.querySelector('#root');

ReactDOM.render(
  <Greeting
    firstName="John"
    lastName="Doe"
    birthDate={new Date('2004-07-01T11:32:19.566Z')}
  />,
  rootElemnt
);