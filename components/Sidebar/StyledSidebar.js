import styled from 'styled-components';
import { mainColor } from '../../generalStyledComponents/Pallete';
import Section from '../../generalStyledComponents/Section';

const StyledSidebar = styled.nav`
    display: flex;
    position: fixed;
    flex-direction: column;
    width: 14em;
    background-color: black;
    color: white;
    height: 100vh;
    padding: 1.5em;
    box-shadow: 2px 0 3px 1px #555;
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
            margin-bottom: 0.5em;
            padding: 0.3em;
            text-align:left;
            & a, button{
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
                    transform: scale(1.02, 1.02);
                }
                &:active{
                    background-color: red;
                }
            }
        }
        .invitation{
            /* background-color: white; */
            button{
             margin: 0 auto;
             margin-top: 30px;
             width: auto;
             text-transform: capitalize;
             padding: 5px 20px ;
             border: 1px solid white;
                /* color: black !important; */
            }
            /* border: 1px solid #bbb;
            border-radius: 4px;
            &:hover{
                transform: scale(1,1) !important;
            } */
        }
    }
`;

export default StyledSidebar;