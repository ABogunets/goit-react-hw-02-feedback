import user from 'backendData/user.json';
import data from 'backendData/data.json';
import friends from 'backendData/friends.json';
import transactions from 'backendData/transactions.json';

import { Container } from "./App.styled";
import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";
import { FriendsList } from "components/FriendsList/FriendsList";
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";


export const App = () => {
  return (
    <Container>
      <Profile userData={user}/>
      <Statistics title='Upload stats' stats={data}/>
      <FriendsList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </Container>
  );
};
