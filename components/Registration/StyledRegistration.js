import styled from 'styled-components';
import { mainColor } from '../../generalStyledComponents/Pallete';
import Section from '../../generalStyledComponents/Section';

const StyledRegistration = styled(Section)`
    display: flex;
    justify-content: center;
    background: url('/bg2.jpg')  no-repeat left top;
    background-position: fill;
    padding: 3%;
    height: 100vh;
    form{
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        border-radius: 15px;
        height: 90%;
        margin-top: 5%;
        background-color: #eee;
        padding: 1% 5%;
        label {
            width: 100%;
            flex: 1;
            font-size: 105%;
            font-weight: 500;
            display: block;
            color: ${mainColor};
            line-height: 30px;
            padding: 3% 0;
        }
        input{
            border: 1px solid #ccc;
            flex: 1;
            padding: 1%;
            border-radius: 5px;
        }
        .buttons{
            display: flex;
            flex-direction: column;
            width: 100%;
            justify-content: space-evenly;
            button{
                flex: 1;
                color: #eee;
                font-weight: 500;
                background-color: #111;
                margin-top: 8%;
                padding: 3% 9%;
                border: 1px solid black;
                border-radius: 1.3em;
                box-shadow: 1px 1px 1px black;

                &:last-child{
                    margin-bottom: 5%;
                }

                &:hover{
                    background-color: black;
                    box-shadow: 1px 1px 2px black;
                }

                &:active{
                    background-color: #222;
                    box-shadow: 0px 0px 0px black;
                }
            }
        }

        h3{
            text-align: center;
            padding-top: 3%;
            font-weight: 500;
        }
        a{
            background-color: #111;
            color: #eee;
            padding: 2%;
            margin-bottom: 6%;
            border-radius: 1em;
            text-align: center;
            font-weight: 500;
            box-shadow: 1px 1px 1px black;

            &:hover{
                background-color: black;
            }
        }
    }

`;

export default StyledRegistration;
