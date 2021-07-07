import React from 'react'
import ReactDOM from 'react-dom'
import Greeting from './Greeting.jsx';
import './index.scss';

const rootElemnt = document.querySelector('#root');

const age = birthDate => {
  const nowDate = new Date()
  return (
    nowDate.getFullYear() - birthDate.getFullYear()
  )
}

ReactDOM.render(
  <Greeting
    firstName="John"
    lastName="Doe"
    birthDate={age(new Date('2004-07-01T11:32:19.566Z'))}
  />,
  rootElemnt
);