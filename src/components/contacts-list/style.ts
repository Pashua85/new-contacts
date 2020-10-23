import styled from 'styled-components';
const glass = require('../../images/magnifying-glass.svg') as string;

export const Container = styled.div`
  max-width: 1536px;
  margin: 0 auto;
  width: 80%;
`;

export const SearchPanel = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 30px;
`;

export const SearchIcon = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${glass});
  width: 40px;
  height: 40px;
  margin-right: 40px;
`;

export const SearchInputContainer = styled.div`
  width: 500px;
`;

export const ItemsList = styled.div`
`;

export const EmptyMessage = styled.p`
`;