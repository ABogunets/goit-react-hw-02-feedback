import PropTypes from 'prop-types';
import {Container, Label, Percentage} from 'components/Statistics/StatsItem/StatsItem.styled';

export const StatsItem = ({ label, percentage, statsItemColor}) => {
  return (
    <Container itemColor={statsItemColor}>
        <Label>{label}</Label>
        <Percentage>{percentage}%</Percentage>
    </Container>
  )
}


StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  statsItemColor: PropTypes.string.isRequired,
};