import styled from 'styled-components';
import { mainColor } from '../../generalStyledComponents/Pallete';
import Section from '../../generalStyledComponents/Section';

const StyledSidebar = styled.nav`
    display: flex;
    flex-direction: column;
    width: 14em;
    background-color: black;
    color: white;
    height: 100vh;
    padding: 1.5em;
    .profile{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 2em;
        .profile-picture{
            flex: 1;
        }
        .profile-credentials{
            flex: 2;
        }
    }
    .pages{
        display: flex;
        flex-direction: column;
        & .dashboard, .projects, .issues, .roles{
            /* flex-direction: column; */
            margin-bottom: 0.5em;
            padding: 0.3em;
            text-align:left;
            & a{
                display: flex;
                text-align: left;
                align-items: center;
                color: #ccc;
                transition: all 300ms;
                svg{
                    margin-right: 0.9em;
                }
                &:hover{
                    color: white;
                    transform: scale(1.1, 1.1);
                }
                &:active{
                    background-color: red;
                }
            }
        }
    }
`;

export default StyledSidebar;