import React, { useState, useEffect }  from 'react';
import { SocialMedias , Social , Icon  , SocialDesc , Span , SpanInfo} from './style.js'

import axios from 'axios'

function SocailMedia () {

    const [social, setSocial] = useState([]);

    useEffect( () => {
        axios.get('js/data.json').then( res => { setSocial(res.data.social)});
    }, []);

    const socialList = social.map( (socialItem) => {
        return (
            <Social item={socialItem.id} key={socialItem.id}>
                <Icon className={socialItem.icon}></Icon>
                <SocialDesc>
                    <Span>{socialItem.title}</Span>
                    <SpanInfo>{socialItem.body}</SpanInfo>
                </SocialDesc>
            </Social>
        )
    } )

    return (
        <SocialMedias>
            
            {socialList}
            
        </SocialMedias>
    )
}

export default SocailMedia;
