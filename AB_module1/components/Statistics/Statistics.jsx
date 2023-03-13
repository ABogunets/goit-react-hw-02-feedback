import PropTypes from 'prop-types';
import { StatsItem } from 'components/Statistics/StatsItem/StatsItem'

import { Container, StatsTitle, StatsList} from 'components/Statistics/Statistics.styled';
import { getRandomHexColor } from 'utils/getColor';

export const Statistics = ({title, stats}) => {
  return (
    <Container>
      {title && <StatsTitle>{title}</StatsTitle >}
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem
            key={id}
            label={label}
            percentage={percentage}
            statsItemColor={getRandomHexColor()}
            />
      ))}
      </StatsList>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      }),
    ),
};



