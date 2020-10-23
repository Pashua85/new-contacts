import styled from 'styled-components';
import {DEVICE} from '../../variables';

export const Container = styled.div`
  @media ${DEVICE.M_MOBILE} {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;