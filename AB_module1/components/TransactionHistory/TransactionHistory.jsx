import PropTypes from 'prop-types';
import { Container, TransactionList } from 'components/TransactionHistory/TransactionHistory.styled';
import { TransactionTitle } from 'components/TransactionHistory/TransactionTitle/TransactionTitle'
import { TransactionListItem } from 'components/TransactionHistory/TransactionListItem/TransactionListItem';

export const TransactionHistory = ({items}) => {
  return (
    <Container>
      <TransactionTitle/>
      <TransactionList>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionListItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
            />
        ))}
      </TransactionList>
    </Container>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      }),
    ),
};