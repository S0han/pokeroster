import React from 'react';
import Slot from './components/slot.component';
import Search from './components/search.component';


export default function App() {
  return (
    <main>
      <title>Pokeroster</title>
      <div>
        <h1>Pokeroster</h1>
        <Search />
        <Slot />
      </div>
    </main>
  );
}
