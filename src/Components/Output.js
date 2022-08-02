import Card from "./UI/Card";
import styles from "./Output.module.css";

const OutputCard = (props) => {
  return (
    <Card className={styles["output-card"]}>
      <h3>{props.title}</h3>
      <p>{props.value}</p>
    </Card>
  );
};

const Output = (props) => {
  let die = -1;
  if (+props.address.channel === 0) {
    die = props.address.die;
  } else {
    die = +props.address.die + props.config.dieCount / 2;
  }

  let block = -1;
  if (+props.address.plane === 0) {
    block = props.address.block * 2;
  } else {
    block = +props.address.block * 2 + 1;
  }

  let wordline = -1;
  let string = -1;
  if (props.config.cellLevel === "SLC") {
    wordline = Math.floor(props.address.page / 4);
    string = props.address.page % 4;
  } else {
    const slcEquiPage = Math.floor(props.address.page / 3);
    console.log("slc equivalent page");
    console.log(slcEquiPage);
    wordline = Math.floor(slcEquiPage / 4);
    console.log(wordline);
    string = slcEquiPage % 4;
  }

  return (
    <Card className={styles["output"]}>
      <header>
        <h2>The corresponding address in MT would be</h2>
      </header>
      <div className={styles["output-results"]}>
        <OutputCard title="Die" value={die === undefined ? "-" : die} />
        <OutputCard title="Block" value={block === undefined ? "-" : block} />
        <OutputCard
          title="Wordline"
          value={wordline === undefined ? "-" : wordline}
        />
        <OutputCard
          title="String"
          value={string === undefined ? "-" : string}
        />
      </div>
    </Card>
  );
};

export default Output;
