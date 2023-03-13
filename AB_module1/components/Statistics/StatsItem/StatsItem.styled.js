import styled from 'styled-components';

export const Container = styled.li`
  flex-basis: calc(100% / 5);
  padding: 10px 0px;
  background-color: ${p => p.itemColor};

`;

export const Label = styled.span`
display: block;
text-align: center;
margin-bottom: 10px;
color: white;
`;

export const Percentage = styled.span`
display: block;
text-align: center;
font-weight: 700;
color: white;
`;