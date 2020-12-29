import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let defaultState = [
  {id: 0, name: '멋진신발', quantity: 2},
  {id: 1, name: '인챈트필드 신발', quantity: 5}
]

function reducer (state = defaultState, action){
  if (action.type === 'increase'){
    let copy = [...state]; // deep copy
    copy[0].quantity++;

    return copy
  } else if (action.type === 'decrease') {
    let copy = [...state];
    copy[0].quantity--;

    return copy
  } else {
    return state 
  }
  // return state
}

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="react-shop">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
