import styled from 'styled-components';
import eyeIcon from '../../images/eye-icon.svg';
import {DEVICE} from '../../variables';

export const Container = styled.div`
  position: relative;
  width: 100%;
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

export const PasswordButton = styled.div<{isShown: boolean}>`
  background-image: ${({isShown}) => isShown ? `` : `url(${eyeIcon})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  bottom: 18px;
  color: grey;
  cursor: pointer;
  font-size: ${({isShown}) => isShown ? `12px` : `0px`};
  height: ${({isShown}) => isShown ? `` : `20px`};
  position: absolute;
  right: 20px;
  text-transform: uppercase;
  width: ${({isShown}) => isShown ? `` : `20px`};

  @media ${DEVICE.M_MOBILE} {
    bottom: 10px;
    right: 15px;
    font-size: ${({isShown}) => isShown ? `8px` : `0px`};
    line-height: 12px;
    width: ${({isShown}) => isShown ? `30px` : `20px`};
  }
`;
