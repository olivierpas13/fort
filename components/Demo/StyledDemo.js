import styled from 'styled-components';
import Section from '../../generalStyledComponents/Section';

const StyledDemo = styled(Section)`
    padding-top: 10%;
    text-align: center;
    background: url('/bg2.jpg')  no-repeat left top;
    background-position: fill;
    .container{
        margin: auto;
        width: 70%;
        background-color: white;
        border-radius: 2em;
        box-shadow: 1px 1px 4px black;
    }
    h2{
        font-weight: 500;
        text-transform: uppercase;
        font-size: 160%;
    }
    p{
        font-weight: 500;
        font-size: 130%;
    }
    .demo-users{
        margin: 0 auto; 
        /* background-color: blue; */
        display: grid;
        width: 100%;
        padding: 5% 0;
        grid-template-columns: 1fr 1fr;
        .developer, .admin, .project-manager, .submitter{
            text-align: center;
            display: flex;
            justify-content: center;
            flex-direction: column; 
            width: auto;
            button{
                margin: 1em;
                align-items: center;
                display: flex;
                flex-direction: column; 
                justify-content: center;
            }
        } 
    }
`;

export default StyledDemo;