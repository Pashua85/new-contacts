import styled from 'styled-components';
import {DEVICE} from '../../variables';

export const Container = styled.div`
  @media ${DEVICE.M_MOBILE} {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const OpenButton = styled.button`
  background-color: gainsboro;
  border: 1px solid lightgray;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  height: 40px;
  outline: none;
  padding: 0 40px;
  user-select: none;

  &:hover {
    background-color: lightgray;
  }

  &:active {
    color: darkslategray;
  }
`;