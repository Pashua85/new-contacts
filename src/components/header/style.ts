import styled from 'styled-components';
import {DEVICE} from '../../variables';

export const PageHeader = styled.header`
  background-color: gainsboro;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1536px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 20px;
  width: 80%;

  @media ${DEVICE.M_MOBILE} {
    flex-wrap: wrap;
  }
`;

export const Title = styled.h1`
  margin: 0 0 10px;

  @media ${DEVICE.M_MOBILE} {
    font-size: 26px;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserText = styled.p`
  @media ${DEVICE.M_MOBILE} {
    display: flex;
    flex-direction: column;
    text-align: right;
  }
`;

export const EmailName = styled.span`
  font-size: 20px;
  margin-right: 30px;

  @media ${DEVICE.M_MOBILE} {
    font-size: 18px;
    margin-right: 0;
  }
`;

export const ChangeLink = styled.a`
  align-self: center;
  color: teal;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media ${DEVICE.M_MOBILE} {
    text-transform: uppercase;
    margin-top: 10px;
  }
`;