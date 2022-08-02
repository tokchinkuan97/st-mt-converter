import Card from "./UI/Card";
import styles from "./InputForm.module.css";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { useState } from "react";
import Dropdown from "./UI/Dropdown";

const InputForm = (props) => {
  const [inputConfig, setInputConfig] = useState({});
  const [inputAddress, setInputAddress] = useState({});

  const dieCountChangeHandler = (event) => {
    setInputConfig((prevConfig) => {
      return { ...prevConfig, dieCount: event.target.value };
    });
  };

  const cellLevelChangeHandler = (value) => {
    console.log(value);
    setInputConfig((prevConfig) => {
      return { ...prevConfig, cellLevel: value };
    });
  };

  const channelChangeHandler = (event) => {
    setInputAddress((prevAddress) => {
      return { ...prevAddress, channel: event.target.value };
    });
  };

  const dieChangeHandler = (event) => {
    setInputAddress((prevAddress) => {
      return { ...prevAddress, die: event.target.value };
    });
  };

  const planeChangeHandler = (event) => {
    setInputAddress((prevAddress) => {
      return { ...prevAddress, plane: event.target.value };
    });
  };

  const blockChangeHandler = (event) => {
    setInputAddress((prevAddress) => {
      return { ...prevAddress, block: event.target.value };
    });
  };

  const pageChangeHandler = (event) => {
    setInputAddress((prevAddress) => {
      return { ...prevAddress, page: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onConvert(inputConfig, inputAddress);
  };

  return (
    <Card className={styles["input-card"]}>
      <header>
        <h2>Enter the address in ST here</h2>
      </header>
      <form onSubmit={submitHandler}>
        <label className={styles["input-type-label"]}>
          <h3>Configuration</h3>
        </label>
        <div className={styles["input-control"]}>
          <Input
            type="number"
            placeholder="Die Count"
            value={inputConfig.dieCount || ""}
            onChange={dieCountChangeHandler}
          />
          <Dropdown
            placeholder="Cell"
            options={["SLC", "TLC"]}
            onChange={cellLevelChangeHandler}
          />
        </div>
        <label className={styles["input-type-label"]}>
          <h3>Address</h3>
        </label>
        <div className={styles["input-control"]}>
          <Input
            type="number"
            placeholder="Channel"
            value={inputAddress.channel || ""}
            onChange={channelChangeHandler}
          />
          <Input
            type="number"
            placeholder="Die"
            value={inputAddress.die || ""}
            onChange={dieChangeHandler}
          />
          <Input
            type="number"
            placeholder="Plane"
            value={inputAddress.plane || ""}
            onChange={planeChangeHandler}
          />
          <Input
            type="number"
            placeholder="Block"
            value={inputAddress.block || ""}
            onChange={blockChangeHandler}
          />
          <Input
            type="number"
            placeholder="Page"
            value={inputAddress.page || ""}
            onChange={pageChangeHandler}
          />
        </div>
        <footer className={styles.footer}>
          <Button type="submit">Convert</Button>
        </footer>
      </form>
    </Card>
  );
};

export default InputForm;
