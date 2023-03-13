import {TitleHead, TitleList, TitleListItem} from 'components/TransactionHistory/TransactionTitle/TransactionTitle.styled';

export const TransactionTitle = () => {
  return (
    <TitleHead>
      <TitleList>
        <TitleListItem>Type</TitleListItem>
        <TitleListItem>Amount</TitleListItem>
        <TitleListItem>Currency</TitleListItem>
      </TitleList>
    </TitleHead>
)
}
