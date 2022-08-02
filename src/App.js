import InputForm from "./Components/InputForm";
import Output from "./Components/Output";
import Card from "./Components/UI/Card";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [currentConfig, setCurrentConfig] = useState({});
  const [currentAddress, setCurrentAddress] = useState({});

  const convertHandler = (inputConfig, inputAddress) => {
    setCurrentConfig(inputConfig);
    setCurrentAddress(inputAddress);
  };

  return (
    <>
      <header className={styles.header}>
        <h1>NAND Address Converter</h1>
      </header>
      <div className={styles["input-output"]}>
        <InputForm onConvert={convertHandler} />
        <Output config={currentConfig} address={currentAddress} />
      </div>
    </>
  );
}

export default App;
