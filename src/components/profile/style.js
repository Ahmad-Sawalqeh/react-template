import styled from 'styled-components';

export const Container = styled.div`
    width: 980px;
    margin: 0 auto;
`

export const ProfileSkill = styled.div`
    padding: 50px 0;
    overflow: hidden;
`;

export const ProfileSection = styled.div`
    width: 50%;
    float: left;
`;

export const ProfileUlList = styled.ul`
    list-style: none;
`;

export const ProfileItem = styled.li`
    margin-bottom: 8px;
`;

export const Span = styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold;
`;

export const SpanWithSite = styled.span`
    font-weight: normal;
    color: #eb5424;
`;

export const Skills = styled.div`
    width: 50%;
    float: left;
`;

export const SkillsDesc = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px;
`;

export const SkillsBar = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px;
`;

export const SkillsTitle = styled.span`
    float: left;
`;

export const SkillsPerc = styled.span`
    float: right;
    margin-right: 100px;
`;

export const SkillsParent = styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px;
`;

export const SkillsParentSpan = styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
`;

export const SkillsParentSpan1 = styled(SkillsParentSpan)`
    width: 100%;
`;

export const SkillsParentSpan2 = styled(SkillsParentSpan)`
    width: 90%;
`;

export const SkillsParentSpan3 = styled(SkillsParentSpan)`
    width: 80%;
`;

export const ProfileSkillsTitle = styled.h2`
    font-size: 40px; 
    margin-bottom: 20px;
`;

export const ProfileSkillsTitleSpan = styled.span`
    font-weight: normal;
`;
