import { BasicModal } from 'generalStyledComponents/Modal';
import styled from 'styled-components';

const StyledInvitation = styled(BasicModal)`
    h2{
        padding: 0.5em;
        font-weight: 500;
        font-size: 1.5em;
    }
    .project-field{
        margin-bottom: 0.5em;
        margin-top: 0.8em;
    }
    .code-generated{
        .invitation{
            width: 20em;;
            overflow: scroll;
            padding: 0.3em;
            border: 2px solid #bbb;
        }
    }
`;

export default StyledInvitation;