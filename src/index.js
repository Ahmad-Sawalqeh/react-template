import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app.js';
import './index.scss';

const Main = () => {
    return (
        <>
            <App />
        </>
    );
}

render(<Main />,document.getElementById('root'));