import styled from 'styled-components';
// import Navbar from '../components/Navbar';

const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    background-color: #eee;
    box-shadow: 0px 1px 5px black;
    position: fixed;
    top: 0;
    width: 100%;
    height: 5em;
    
    .logo{
        flex: 1;
        display: flex;
        align-items: center;
        padding-left: 3%;
        h1{
            margin-left: 0.4em;
            text-transform: uppercase;
            font-size: 250%;
            font-weight: 500;
        }    
    }
    
    .options{
        height: 100%;
        flex: 1;
        text-transform: uppercase;
        ul{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            li{
                flex: 1;
                width: 10em;
                display: inline-block;
                height: 100%;
                text-align: center;
                font-size: 140%;
                transition: all 300ms;
                &:hover{
                    background-color: #111;
                    color: #eee;
                }
                a{
                    line-height: 300%;

                }
            }
        }
    }

    .register{
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        text-transform: uppercase;
        div{
            background-color: #222;
            color: whitesmoke;
            padding: 1em;
            border-radius: 2em;
            a{
                font-weight: 500;
            }
            &:hover{
                background-color: #000;
                box-shadow: 0px 0px 1px black;
            }
        }   
    }
`;

export default StyledNavbar;
