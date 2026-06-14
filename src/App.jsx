import Display from "./components/Display";
import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  let [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      const newDisplayValue = calVal.slice(0, calVal.length - 1);
      setCalVal(newDisplayValue);
    } else if (buttonText === "=") {
      const newDisplayValue = eval(calVal).toString();
      setCalVal(newDisplayValue);
    } else if (buttonText === "AC") {
      setCalVal("");
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}
export default App;
