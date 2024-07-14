import React from 'react';
import ReactDOM from 'react-dom';
import { App } from "./App.jsx"

async function run() {
    const root = document.getElementById('root');

    const { count } = await fetch('./api/count').then((res) => res.json());
    
    ReactDOM.render(<App />, root);
}

run();