import React from 'react';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Task } from './App.css';

export const App = () => {
  return (
    <>
      <Task>Task 1</Task>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Task>Task 2</Task>
      <Statistics title="Upload stats" stats={data} />
      <Task>Task 3</Task>
      <FriendList friends={friends} />
      <Task>Task 4</Task>
      <TransactionHistory items={transactions} />
    </>
  );
};
