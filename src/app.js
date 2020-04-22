import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.js';
import Index from './components/index/index.js';
import Work from './components/work/work.js';
import Portfolio from './components/portfolio/portfolio.js';
import Profile from './components/profile/profile.js';
import About from './components/about/about.js';
import Contact from './components/contact/contact.js';
import './app.scss';

const App = props => {
    return (
        <>
            <Routes>
                <Navbar />
                <Route exact path='/' component={Index} />
                <Route path='/work' component={Work} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/profile' component={Profile} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
            </Routes>
        </>
    );
}

export default App;
