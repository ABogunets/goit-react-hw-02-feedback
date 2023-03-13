import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 20px;
  border-radius: 5px;

  background-color:white;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const StatsTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
  padding-top: 30px;
  padding-bottom: 30px;
  color: dimgrey;
`;

export const StatsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 15px;
`;