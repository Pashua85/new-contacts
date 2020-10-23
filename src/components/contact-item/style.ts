import styled from 'styled-components';
import pencil from '../../images/pencil.svg';
import wrong from '../../images/wrong.svg';

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;

  &:hover {
    border-bottom: 1px solid silver;
    padding-bottom: 9px;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameText = styled.h3`
  font-size: 20px;
`;

export const PhoneNumber = styled.p`
`;

export const ButtonGroup = styled.div`
  align-self: center;
  display: flex;
`;

export const Button = styled.div<{name: string}>`
  background-repeat: no-repeat;
  background-size: contain;
  background-image: ${({name}) => name === `edit` ? `url(${pencil})` : `url(${wrong})`};
  cursor: pointer;
  height: 15px;
  position: relative;
  width: 15px;
  
  &:first-child {
    margin-right: 40px;
  }

  &:before {
    background-color: rgba(255, 255, 255, .3);
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &:hover:before {
    display: none;
  }
`;
