import styled from 'styled-components';
import {DEVICE} from '../../variables';

export const Form = styled.form`
  border-radius: 5px;
  border: 1px solid silver;
  padding: 30px; 
  width: 500px;

  @media ${DEVICE.M_MOBILE} {
    padding: 20px;
    width: 80%;
  }
`;

export const Header = styled.h2`
  margin-bottom: 30px;
  text-align: center;

  @media ${DEVICE.M_MOBILE} {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: 50px;

  @media ${DEVICE.M_MOBILE} {
    margin-bottom: 30px;
  }
`;

export const SubmitButton = styled.button`
  background-color: gainsboro;
  border: 1px solid lightgray;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  height: 40px;
  margin: 0 auto 20px;
  padding: 0 40px;
  outline: none;
  user-select: none;

  &:hover {
    background-color: lightgray;
  }

  &:active {
    color: darkslategray;
  }

  @media ${DEVICE.M_MOBILE} {
    font-size: 14px;
    width: 100%;
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  text-align: center;
`;

export const Link = styled.a`
  color: teal;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;