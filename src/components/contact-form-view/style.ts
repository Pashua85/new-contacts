import styled from 'styled-components';
import {DEVICE} from '../../variables';

export const Form = styled.form`
  border-radius: 5px;
  border: 1px solid silver;
  padding: 30px; 
  width: 500px;

  @media ${DEVICE.M_MOBILE} {
    padding: 20px;
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: 20px;

  &:nth-child(2) {
    margin-bottom: 30px;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubmitButton = styled.button`
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

  @media ${DEVICE.M_MOBILE} {
    padding: 0 20px;
  }
`;

export const CancelButton = styled.button`
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  color: darkgray;
  cursor: pointer;
  display: block;
  height: 40px;
  outline: none;
  padding: 0 40px;
  user-select: none;

  &:hover {
    color: darkslategray;
  }

  &:active {
    color: darkgray;
  }

  @media ${DEVICE.M_MOBILE} {
    padding: 0 20px;
  }

`;