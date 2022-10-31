import { BasicModal } from 'generalStyledComponents/Modal';
import styled from 'styled-components';

const StyledInvitation = styled(BasicModal)`
    /* background-color: red; */
    h2{
        padding: 1em;
    }
    .code-generated{
        /* width: 100%; */
        /* background-color:red; */
        .invitation{
            width: 20em;;
            overflow: scroll;
            padding: 0.3em;
            border: 2px solid #bbb;
        }
    }
`;

export default StyledInvitation;