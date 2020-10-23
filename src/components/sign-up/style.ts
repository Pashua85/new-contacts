import styled from 'styled-components';
import {DEVICE} from '../../variables';

export const Container = styled.div`
  margin: 0 auto;
  padding-top: 200px;
  width: fit-content;

  @media ${DEVICE.TABLET} {
    padding-top: 120px;
  }

  @media ${DEVICE.M_MOBILE} {
    display: flex;
    justify-content: center;
    padding-top: 30px;
    width: 100%;
  }
`;