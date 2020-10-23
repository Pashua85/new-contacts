import styled from 'styled-components';
import {DEVICE} from '../../variables';

export const CreateFormWrapper = styled.div`
  margin: 30px auto 30px;
  width: fit-content;

  @media ${DEVICE.M_MOBILE} {
    width: 80%;
  }
`;