import classes from "./ProfessionCategoryCard.module.css";

const ProfessionCategoryCard = (props) => {
  const chooseCategoryHandler = () => {
    props.onToggleProfessionList(props.category._id);
  };

  return (
    <div className={classes["category-card"]} onClick={chooseCategoryHandler}>
      <img src={props.category.image} alt={props.category.category} />
      <h1>{props.category.category}</h1>
    </div>
  );
};

export default ProfessionCategoryCard;
