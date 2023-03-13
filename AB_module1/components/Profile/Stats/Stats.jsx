import PropTypes from 'prop-types';
import { StatsWrapper, StatsItem, Label, Quantity } from 'components/Profile/Stats/Stats.styled';

export const Stats = ({stats}) => {
  return (
    <StatsWrapper>
      <StatsItem>
        <Label>Followers</Label>
        <Quantity>{stats.followers}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Views</Label>
        <Quantity>{stats.views}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Likes</Label>
      <Quantity>{stats.likes}</Quantity>
      </StatsItem>
    </StatsWrapper>
  )
}

Stats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
}
