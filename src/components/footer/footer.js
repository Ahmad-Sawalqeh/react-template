import React  from 'react';
import { Container, FooterSection , FooterDesc} from './style.js'

const Footer = () => {
    return (
        <Container>
            <FooterSection>
                <FooterDesc> copyright &copy; 2018 by React Teamplate </FooterDesc>
            </FooterSection>
        </Container>
    )
}

export default Footer;