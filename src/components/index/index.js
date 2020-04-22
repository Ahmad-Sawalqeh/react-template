import React from 'react';

import Home from './../home/home.js'
import About from './../about/about.js'
import Contact from './../contact/contact.js';
import Profile from './../profile/profile.js'
import Portfolio from './../portfolio/portfolio.js'
import SocailMedia from './../socailMedia/socailMedia.js'
import Work from './../work/work.js'
import Footer from './../footer/footer.js'

const Index = () => {

    return (
      <>
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <SocailMedia />
        <Contact />
        <Footer />
      </>
    );
}

export default Index;