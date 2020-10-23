import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;