import styled from 'styled-components';

const StyledDashboard = styled.section`
    .dashboard-title{
        /* background-color: red; */
        margin-bottom: 1em;
        border-bottom: 1px solid #bbb;
        .organization-title{
            font-size: 2em;
            font-weight: 600;
            letter-spacing: 1px;
        }
    }
    .select{
        width: 19em;
    }
    .stats{
        width: 110%;
        padding-top: 1em;
        display: flex;
        justify-content: space-between;
        .projects, .users, .issues{
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 1;
            margin-right: 2em;
            height: 10em; 
            border: 1px solid #bbb;
            border-radius: 0.5em;
            box-shadow: 0px 0px 1px black;
            & :last-child{
                margin-right: 0;
            }
            & .title{
                flex: 1;
                font-size: 2em;
            }
            & .stat{
                flex: 3;
                font-size: 4.5em;
            }
        }
    }
    .data-tables{
        margin-top: 2em;
        display: flex;
        width: 110%;
        justify-content: center;
        .priority-table, .type-table, .status-table{
            display: flex;
            flex-direction: column;
            /* width: 100%; */
            justify-content: center;
            border: 1px solid #bbb;
            border-radius: 0.5em;
            box-shadow: 0px 0px 1px black;
            margin-right: 1em;
            align-items: center;
            flex: 1;
            /* height: 20em; */
            .table-title{
                padding: 0.5em;
                color: whitesmoke;
                text-align: center;
                background-color: #111;
                width: 100%;
                flex: 1;
                display: block;
                border-bottom: 1px solid #ccc;
            }
            .table-graph{
                /* background-color: black; */
                flex: 1;
            }
        }
    }
`;

export default StyledDashboard;