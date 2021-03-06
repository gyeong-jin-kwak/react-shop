import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

let defaultState = [
  {id: 0, name: '캡모자 black', quantity: 2},
  {id: 1, name: '인챈트필드 신발', quantity: 5}
];

let alertState = true;

function reducer (state = defaultState, action){
  if(action.type === 'add'){
    let copy = [...state];
    console.log(action.payload);
    let found =  state.findIndex((a)=>{return a.id === action.payload.id})

    if(found >= 0){
      let copy = [...state];
      copy[found].quantity++;
      return copy
    } else {
      let copy = [...state];
      copy.push(action.payload);
      return copy
    }

    return copy
  } else if (action.type === 'increase'){
    // action.payload;
    let copy = [...state]; // deep copy
    copy[action.payload].quantity++;

    return copy
  } else if (action.type === 'decrease') {
    let copy = [...state];
    copy[action.payload].quantity--;

    return copy
  } else {
    return state 
  }
  // return state
}

function reducer2 (state = alertState, action){
  if(action.type === 'close') {
    let copy = state;
    copy = false;
    return copy
  } else {
    return state
  }
}

let store = createStore(combineReducers({reducer, reducer2}));

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
