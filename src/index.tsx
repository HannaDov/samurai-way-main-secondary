import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state'


export const renderTree= ()=>{
    ReactDOM.render(
        <React.StrictMode><App store={store}/></React.StrictMode>
        ,
        document.getElementById('root')
    );
}


store.subscribe(renderTree)
renderTree()