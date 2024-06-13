import React from 'react';
import VoteSubmission from './components/VoteSubmission';
import ResultsDisplay from './components/ResultsDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>E-Voting System</h1>
      </header>
      <main>
        <VoteSubmission />
        <ResultsDisplay />
      </main>
    </div>
  );
}

export default App;

