import PropTypes from 'prop-types';
import {Container, ListItem} from 'components/TransactionHistory/TransactionListItem/TransactionListItem.styled';

export const TransactionListItem = ({ type, amount, currency}) => {
  return (
    <Container>
      <ListItem>{type}</ListItem>
      <ListItem>{amount}</ListItem>
      <ListItem>{currency}</ListItem>
    </Container>
  )
}


TransactionListItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};