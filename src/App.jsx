import React from 'react';
import QuoteGenerator from './QuoteGenerator';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Quote Generator</h1>
      </header>
      <main>
        <QuoteGenerator />
      </main>
    </div>
  );
}

export default App;