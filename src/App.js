import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);

  const [votes, setVotes] = useState(Array(10).fill(0));

  const [mostPopularIndex, setMostPopularIndex] = useState(0);

  function Votes() {
    mostPopular();

    setVotes(
      votes.map((i, index) => {
        if (index === selected) {
          return i + 1;
        }
        return i;
      })
    );
    console.log(votes);
  }

  function mostPopular() {
    votes.forEach((i, index) => {
      if (i > votes[mostPopularIndex]) {
        setMostPopularIndex(index);
      }
    });
  }
  
  function nextAnecdote() {
    let newIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(newIndex);
  }

  return (
    <div>
      <h1>Ancedote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>This anecdote has {votes[selected]} votes.</p>
      <button onClick={() => Votes()}>Vote</button>
      <button onClick={() => nextAnecdote()}>Next anecdote</button>
      <h1>Ancedote with the most votes</h1>
      <p>{anecdotes[mostPopularIndex]}</p>
    </div>
  );
};

export default App;
