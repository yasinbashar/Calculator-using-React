import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [calval , setcalval] =useState("");
  const onButtonClick = (buttonText) => {
    if(buttonText === "C"){
       setcalval("");
    }
    else if(buttonText ==="="){
       let result = eval(calval);
       setcalval(result);
    }
    else{
        let newcalval = calval + buttonText ;
        setcalval(newcalval);
    }
  }
  return (
    <div className={styles.calculator}>
      <Display displayval={calval}></Display>
      <ButtonsContainer buttonDisplay={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
