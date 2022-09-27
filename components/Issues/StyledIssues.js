import styled from 'styled-components';

const StyledIssues = styled.section`
    h1{
        font-size: 2em;
        font-weight: 500;
        margin-bottom: 1em;
    }
    /* border-bottom: 1px solid #ccc; */
    .filter-options{
        padding: 0.5em 1em;
        ul{
            display: flex;
            li{
                padding: 0.5em 1em;
            }
        }
    }
    .separator{
        width: 100%;
        border: 1px solid #ccc;
    }

    .issues-table{
        height: 20em;
        width: 100%;
    }
    .issues-creation{
        height: 5em;
        width: 5em;
    }
`;

export default StyledIssues;
