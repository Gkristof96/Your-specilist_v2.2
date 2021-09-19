import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import style from "./Rating.module.scss";

const Rating = ({ value, numReviews }, props) => {
  return (
    <div className={style.rating}>
      <div className={style["rating-stars"]}>
        <span className={style[`${props.size}`]}>
          {value >= 1 ? (
            <BsStarFill color="F5D547" />
          ) : value >= 0.5 ? (
            <BsStarHalf color="F5D547" />
          ) : (
            <BsStar color="F5D547" />
          )}
        </span>
        <span className={style[`${props.size}`]}>
          {value >= 2 ? (
            <BsStarFill color="F5D547" />
          ) : value >= 1.5 ? (
            <BsStarHalf color="F5D547" />
          ) : (
            <BsStar color="F5D547" />
          )}
        </span>
        <span className={style[`${props.size}`]}>
          {value >= 3 ? (
            <BsStarFill color="F5D547" />
          ) : value >= 2.5 ? (
            <BsStarHalf color="F5D547" />
          ) : (
            <BsStar color="F5D547" />
          )}
        </span>
        <span className={style[`${props.size}`]}>
          {value >= 4 ? (
            <BsStarFill color="F5D547" />
          ) : value >= 3.5 ? (
            <BsStarHalf color="F5D547" />
          ) : (
            <BsStar color="F5D547" />
          )}
        </span>
        <span className={style[`${props.size}`]}>
          {value >= 5 ? (
            <BsStarFill color="F5D547" />
          ) : value >= 4.5 ? (
            <BsStarHalf color="F5D547" />
          ) : (
            <BsStar color="F5D547" />
          )}
        </span>
      </div>
      <span className={style["rating-text"]}>
        {numReviews} vélemény alapján
      </span>
    </div>
  );
};

Rating.defaultProps = {
  size: "small",
};

export default Rating;
