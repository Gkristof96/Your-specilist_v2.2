import style, { action } from "./ProfessionBadge.module.scss";

const ProfessionBadge = (props) => {
  const chooseProfessionHandler = () => {
    props.onChooseProfession(props.professionName);
  };
  return (
    <div
      className={style["profession-badge"]}
      onClick={chooseProfessionHandler}
    >
      <span className={`${style[`${props.size}`]} ${props.type && action}`}>
        {props.professionName}
      </span>
    </div>
  );
};

ProfessionBadge.defaultProps = {
  size: "medium",
};

export default ProfessionBadge;
