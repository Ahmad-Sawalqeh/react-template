import React  from 'react';

import { HomeSection , Container , HomeInformation , HomeTitle , HomeInfo , HomeDesc , Span , HomeBtn } from './style.js'

const Home = () => {
    return (
        <HomeSection>
            <Container>
                <HomeInformation>
                    <HomeTitle>Ahmad Fayez</HomeTitle>
                    <HomeInfo >Full Stack Developer</HomeInfo>
                    <HomeDesc>
                        I am a professional <Span>React Developer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </Container>
        </HomeSection>
    )
}

export default Home;