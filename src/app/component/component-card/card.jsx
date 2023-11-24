import { useState } from "react";
import classes from "./card.module.css";
const ComponentCard = () => {
  const [calcBmi, setcalcBmi] = useState(0);

  const handleClick = () => {
    let height = +prompt("Please enter the height value like 1.80Cm");
    let weight = +prompt("Please enter the weight value like 70Kg");
    setcalcBmi(Math.floor(weight / (height * height)));
  };

  return (
    <div className={classes.card}>
      <h1 className={classes.card__h1}>
        BMI : <span className={classes.card__h1__span}>{calcBmi}</span>
      </h1>
      <button className={classes.card__button} onClick={handleClick}>
        Calc BMI
      </button>
    </div>
  );
};
export default ComponentCard;
