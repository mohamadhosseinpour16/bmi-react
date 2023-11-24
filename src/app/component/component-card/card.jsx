import classes from "./card.module.css";
const ComponentCard = () => {
  return (
    <div className={classes.card}>
      <h1>
        BMI : <span>0</span>
      </h1>
      <button className={classes.card__button}>Calc BMI</button>
    </div>
  );
};
export default ComponentCard;
