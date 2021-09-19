import style from "./ProfessionCategoryCard.module.scss";

const ProfessionCategoryCard = (props) => {
  const chooseCategoryHandler = () => {
    props.onToggleProfessionList(props.category._id);
  };

  return (
    <div className={style["category-card"]} onClick={chooseCategoryHandler}>
      <img src={props.category.image} alt={props.category.category} />
      <h1>{props.category.category}</h1>
    </div>
  );
};

export default ProfessionCategoryCard;
