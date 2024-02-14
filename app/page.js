import React from 'react';
import Search from './components/search.component';
import Navbar from './components/navbar.component';

export default function App() {
  return (
    <main>
      <title>Pokeroster</title>
      <div>
        <h1>Pokeroster</h1>
        <Navbar />
        <Search />
      </div>
    </main>
  );
}
