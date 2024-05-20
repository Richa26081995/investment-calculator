import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import { useState } from "react";

function handleChange(inputIdentifier, newValue) {
  setUserInput((prevState) => {
    return {
      ...prevState,
      [inputIdentifier]: newValue,
    };
  });
}

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  return (
    <>
      <Header></Header>
      <UserInput onChangeInput={handleChange} userInput={userInput}></UserInput>
    </>
  );
}

export default App;
