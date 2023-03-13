import styled from 'styled-components';

export const StatsWrapper = styled.ul`
  display:flex ;

  background-color: mintcream;
  border-top: 2px solid gainsboro;
`;

export const StatsItem = styled.li`
width: 100px;
padding: 10px 0px;
&:not(:last-child) {
  border-right: 2px solid gainsboro;
  };
`;

export const Label= styled.span`
display: block;
text-align: center;
margin-bottom: 10px;
color: darkgrey;
`;

export const Quantity= styled.span`
display: block;
text-align: center;
font-weight: 700;
`;
