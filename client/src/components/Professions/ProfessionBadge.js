import classes, { action } from "./ProfessionBadge.module.scss";

const ProfessionBadge = (props) => {
  const chooseProfessionHandler = () => {
    props.onChooseProfession(props.professionName);
  };
  return (
    <div
      className={classes["profession-badge"]}
      onClick={chooseProfessionHandler}
    >
      <span className={`${classes[`${props.size}`]} ${props.type && action}`}>
        {props.professionName}
      </span>
    </div>
  );
};

ProfessionBadge.defaultProps = {
  size: "medium",
};

export default ProfessionBadge;
