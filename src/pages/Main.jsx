import React from 'react';
import Header from '../components/Header';
import Forms from '../components/Forms';
import SendButton from '../components/SendButton';

export default function Main() {
  return (
    <div className="Forms">
      <Header />
      <Forms />
      <SendButton />
    </div>
  );
}
