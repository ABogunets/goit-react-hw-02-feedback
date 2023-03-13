import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
  margin-bottom: 15px;
  };

  padding: 5px 20px;

  background-color: white;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Status = styled.span`
display: block;
width: 15px;
height: 15px;
border-radius: 50%;

background-color: ${({isOnline}) => (isOnline ? "green" : "red")};
`;

export const Avatar = styled.img`
width: 48px;
margin-left: 20px;
border-radius: 5px;
`;

export const Name = styled.p`
margin-left: 20px;
font-weight: 700;
font-size: 20px;
`;



