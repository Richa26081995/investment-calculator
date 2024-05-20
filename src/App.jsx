import Header from "./Components/Header";
import Results from "./Components/Results";
import UserInput from "./Components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header></Header>
      <UserInput onChangeInput={handleChange} userInput={userInput}></UserInput>
      {!inputIsValid && (
        <p className="center">Enter Duration Greater Than Zero.</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
