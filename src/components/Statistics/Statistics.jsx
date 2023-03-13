import PropTypes from 'prop-types';
import {Container, Title, StatData, StatCalc} from 'components/Statistics/Statistics.styled';


export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <Container>
      <Title>Statistics</Title>
      <StatData>Good: {good}</StatData>
      <StatData>Neutral: {neutral}</StatData>
      <StatData>Bad: {bad}</StatData>
      <StatCalc>Total: {total}</StatCalc>
      <StatCalc>Positive feedback: {positivePercentage}%</StatCalc>
    </Container>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
};