import React from 'react';

import ReactDOM from 'react-dom';

async function run() {
    const root = document.getElementById('root');

    const { count } = await fetch('./api/count').then((res) => res.json());

    ReactDOM.render(<h1>Hello, World! Count was {count}</h1>, root);
}

run();