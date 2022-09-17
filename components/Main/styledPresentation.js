import styled from 'styled-components';
import { mainColor } from '../../generalStyledComponents/Pallete';
import Section from '../../generalStyledComponents/Section';

const MainSection = styled(Section)`
    padding-top: 15%;
    background: #fff url('/bg1.jpg') no-repeat left top;
    background-size: cover;
    width: 100vw;

    .main-text{
        color: white;
        font-weight: 600;
        font-size: 250%;
        text-shadow: 0px 0px 1px black;
        margin-bottom: 5%; 
    }

    .try-button{
        display: inline-block;
        background-color: #111;
        color: #fff;
        text-transform: uppercase;
        font-weight: 500;   
        border-radius: 100px;
        font-size: 120%;
        padding: 2%;
        cursor: pointer;
        transition: all 300ms;
        &:hover{
            background-color: black;
            text-shadow:0px 0px 1px black;
        }
    }

`;

export default MainSection;
