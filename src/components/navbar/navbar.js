import React  from 'react';
// import { Link } from 'react-router-dom'
import { NavbarSection , Container , Logo , LogoText , UlList , ListItem , Anchor } from './style.js'


const Navbar = () => {
    return (
        <NavbarSection>
            
            <Container>
                
                <Logo>
                    <LogoText>React Template</LogoText>
                </Logo>
                
                <UlList>
                    <ListItem><Anchor exact href="/">Home</Anchor></ListItem>
                    <ListItem><Anchor href="/work">Work</Anchor></ListItem>
                    <ListItem><Anchor href="/portfolio">Portfolio</Anchor></ListItem>
                    <ListItem><Anchor href="/profile">Profile</Anchor></ListItem>
                    <ListItem><Anchor href="/about">About</Anchor></ListItem>
                    <ListItem><Anchor href="/contact">Contact</Anchor></ListItem>
                </UlList>
                
            </Container>
            
        </NavbarSection>
    )
}

export default Navbar;