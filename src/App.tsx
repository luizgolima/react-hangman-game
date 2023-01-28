import { useState } from "react";
import words from "./wordList.json";
import styled from "styled-components";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <AppContainer>
      <div>Lose Win</div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 2rem;
  max-width: 800px;

  div {
    font-size: 2rem;
    text-align: center;
  }
`;

export default App;
