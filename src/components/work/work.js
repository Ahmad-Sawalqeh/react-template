import React , { useState, useEffect } from 'react';
import axios from 'axios';

import { WorkSection , Container , WorkTitle , Span , WorkPart , Icon , PartTitle , Line , PartDesc} from'./style.js'

const Work = () => {
  
    const [works , setWorks] = useState([]);

    useEffect(() => {
        axios.get('js/data.json').then( res => { setWorks(res.data.works) } );
    }, [])

    return (
        <WorkSection>
            <Container>
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                {
                    // all my data rendered here fine
                    works.map( (workItem) => {
                        return (
                            <WorkPart first={workItem.id} key={workItem.id}>
                                <Icon className={workItem.icon_name}></Icon>
                                <PartTitle>{workItem.title}</PartTitle>
                                <Line />
                                <PartDesc>{workItem.body}</PartDesc>
                            </WorkPart>
                        )
                    })
                }
            </Container>
        </WorkSection>
    )
}


export default Work;






// import React , {Component} from 'react';
// import axios from 'axios'

// import { WorkSection , Container , WorkTitle , Span , WorkPart , Icon , PartTitle , Line , PartDesc} from'./style.js'

// class Work extends Component {
  
//     state = {
//         works : []
//     }

//     componentDidMount () {
//         axios.get('js/data.json').then( res => { this.setState({ works: res.data.works }) } )
//     }

//     render() {

//         const {works} = this.state;

//         const worksList = works.map( (workItem) => {
//             return (
//                 <WorkPart first={workItem.id} key={workItem.id}>
//                     <Icon className={workItem.icon_name}></Icon>
//                     <PartTitle>{workItem.title}</PartTitle>
//                     <Line />
//                     <PartDesc>
//                         {workItem.body}
//                     </PartDesc>
//                 </WorkPart>
//             )
//         })

//         return (
//         <WorkSection>
//             <Container>
//                 <WorkTitle><Span>My</Span> Work</WorkTitle>
//                 {worksList}
//             </Container>
//         </WorkSection>
//     )
//    }

   
// }

// export default Work;