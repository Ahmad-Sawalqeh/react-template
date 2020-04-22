import React  from 'react';
import { ProfileSkill, Container, ProfileSection, ProfileSkillsTitle, ProfileSkillsTitleSpan, ProfileUlList, ProfileItem, Span, SpanWithSite, Skills, SkillsDesc, SkillsBar, SkillsTitle, SkillsPerc, SkillsParent, SkillsParentSpan1, SkillsParentSpan2, SkillsParentSpan3  } from './style.js'

const Profile = () => {
    return (
        <ProfileSkill >
            <Container>
                <ProfileSection>
                    <ProfileSkillsTitle><ProfileSkillsTitleSpan>My </ProfileSkillsTitleSpan>Profile</ProfileSkillsTitle>
                    <ProfileUlList>
                        <ProfileItem >
                            <Span>Name</Span>
                            Ahmad Sawalqeh
                        </ProfileItem>
                        <ProfileItem >
                            <Span>Birthday</Span>
                            3/6/1994
                        </ProfileItem>
                        <ProfileItem >
                            <Span>Address</Span>
                            Jordan
                        </ProfileItem>
                        <ProfileItem >
                            <Span>Phone</Span>
                            1111 2222 3333 4444
                        </ProfileItem>
                        <ProfileItem >
                            <Span>Email</Span>
                            my@email.com
                        </ProfileItem>
                        <ProfileItem >
                            <Span>Website</Span>
                            <SpanWithSite >www.google.com</SpanWithSite>
                        </ProfileItem>
                    </ProfileUlList>
                </ProfileSection>
                
                <Skills>
                    <ProfileSkillsTitle>Some <ProfileSkillsTitleSpan>skills</ProfileSkillsTitleSpan></ProfileSkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    <SkillsBar>
                        <SkillsTitle>Bootstrap</SkillsTitle>
                        <SkillsPerc>100%</SkillsPerc>
                        <SkillsParent>
                            <SkillsParentSpan1></SkillsParentSpan1>
                        </SkillsParent>
                    </SkillsBar>
                    
                    <SkillsBar>
                        <SkillsTitle>CSS3</SkillsTitle>
                        <SkillsPerc>90%</SkillsPerc>
                        <SkillsParent>
                            <SkillsParentSpan2></SkillsParentSpan2>
                        </SkillsParent>
                    </SkillsBar>
                    
                    <SkillsBar>
                        <SkillsTitle>Photoshop</SkillsTitle>
                        <SkillsPerc>80%</SkillsPerc>
                        <SkillsParent>
                            <SkillsParentSpan3></SkillsParentSpan3>
                        </SkillsParent>
                    </SkillsBar>
                </Skills>
                
            </Container>
        </ProfileSkill>
    )
}

export default Profile;


// import React  from 'react';
// import './style.css'

// const Profile = () => {
//     return (
//         <div className="profile_skills">
//         <div className="container">
//             <div className="profile">
//                 <h2 className="profile-title"><span>My </span>Profile</h2>
//                 <ul className="profile-list">
//                     <li className="profile-item">
//                         <span>Name</span>
//                         Ahmad Sawalqeh
//                     </li>
//                     <li className="profile-item">
//                         <span>Birthday</span>
//                         3/6/1994
//                     </li>
//                     <li className="profile-item">
//                         <span>Address</span>
//                         Jordan
//                     </li>
//                     <li className="profile-item">
//                         <span>Phone</span>
//                         1111 2222 3333 4444
//                     </li>
//                     <li className="profile-item">
//                         <span>Email</span>
//                         my@email.com
//                     </li>
//                     <li className="profile-item">
//                         <span>Website</span>
//                         <span className="web">www.google.com</span>
//                     </li>
//                 </ul>
//             </div>
            
//             <div className="skills">
//                 <h2 className="skills-title">Some <span>skills</span></h2>
//                 <p className="skills-desc">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
//                 </p>
//                 <div className="bar">
//                     <SkillsTitle>Bootstrap</span>
//                     <SkillsPerc>100%</span>
//                     <SkillsParent>
//                         <SkillsParentSpan></span>
//                     </div>
//                 </div>
                
//                 <div className="bar">
//                     <SkillsTitle>CSS3</span>
//                     <SkillsPerc>90%</span>
//                     <SkillsParent>
//                         <span className="sp2"></span>
//                     </div>
//                 </div>
                
//                 <div className="bar">
//                     <SkillsTitle>Photoshop</span>
//                     <SkillsPerc>80%</span>
//                     <SkillsParent>
//                         <span className="sp3"></span>
//                     </div>
//                 </div>
//             </div>
            
//         </div>
//     </div>
//     )
// }

// export default Profile;