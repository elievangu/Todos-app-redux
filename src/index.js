//npm import
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './Reducers/reducers';
import * as serviceWorker from '../src/serviceWorker.js';

//local import
import '../src/style.css';
import App from './Components/App';

let store = createStore(reducers);

const TodoApp = () => {
  return (

    <Provider store={store}>
      <App />
    </ Provider>
  )
}

ReactDOM.render(
<TodoApp />, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
