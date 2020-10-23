import styled from 'styled-components';
import {DEVICE} from '../../variables';

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const Input = styled.input`
  border: 1px solid gainsboro;
  border-radius: 4px;
  font-size: 18px;
  height: 60px;
  line-height: 44px;
  padding-left: 20px;
  vertical-align: middle;
  width: 100%;

  &::placeholder {
    font-size: 18px;
  }

  @media ${DEVICE.M_MOBILE} {
    height: 44px;
    font-size: 16px;
  }
`;

export const ErrorMessage = styled.div`
  bottom: 2px;
  color: red;
  font-size: 10px;
  left: 20px;
  position: absolute;
  text-transform: uppercase;

  @media ${DEVICE.M_MOBILE} {
    font-size: 8px;
    line-height: 8px;
  }
`;