import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const div = document.createElement('div');
document.body.append(div);
ReactDOM.render(<App />, document.querySelector('div'));