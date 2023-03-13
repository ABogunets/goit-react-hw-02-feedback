import styled from 'styled-components';

export const Container = styled.tr`
  color: darkgrey;
  font-size: 12px;
  &:nth-child(2n) {
  background-color: aliceblue;
  }
`;

export const ListItem = styled.td`
  text-align: center;
  padding: 10px 0px;
    &::first-letter {
  text-transform: uppercase;
  }
  border: 2px solid gainsboro;

`;

export const StatsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 15px;
`;