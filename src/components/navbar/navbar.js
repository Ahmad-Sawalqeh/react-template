import React  from 'react';
import { Link } from 'react-router-dom'
import { NavbarSection , Container , Logo , LogoText , UlList , ListItem, Anchor } from './style.js'


const Navbar = () => {
    return (
        <NavbarSection>
            
            <Container>
                
                <Logo>
                    <LogoText>React Template</LogoText>
                </Logo>
                
                <UlList>
                    <ListItem><Link exact to="/"><Anchor>Home</Anchor></Link></ListItem>
                    <ListItem><Link to="/work"><Anchor>Work</Anchor></Link></ListItem>
                    <ListItem><Link to="/portfolio"><Anchor>Portfolio</Anchor></Link></ListItem>
                    <ListItem><Link to="/profile"><Anchor>Profile</Anchor></Link></ListItem>
                    <ListItem><Link to="/about"><Anchor>About</Anchor></Link></ListItem>
                    <ListItem><Link to="/contact"><Anchor>Contact</Anchor></Link></ListItem>
                </UlList>
                
            </Container>
            
        </NavbarSection>
    )
}

export default Navbar;