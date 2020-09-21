import React from 'react';
import UserGreeting from './usergreeting';
import GuestGreeting from './guestgreeting';

export default function Greeting(props) {
  const isLogin = props.isLogin;
  if(isLogin) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}