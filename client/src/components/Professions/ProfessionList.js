import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import classes from "./ProfessionList.module.css";

import ProfessionBadge from "./ProfessionBadge";

const ProfessionList = (props) => {
  const history = useHistory();
  const { category, professionList } = props.data;

  const searchProfessionHandler = (profession) => {
    history.replace(`/providers?profession=${profession}`);
  };

  const closeProfessionListHandler = () => {
    props.setShowList(false);
  };

  return (
    <div className={classes["profession-list"]}>
      <FaArrowAltCircleLeft
        className={classes["back-arrow"]}
        onClick={closeProfessionListHandler}
      />
      <h1 className={classes.title}>{`${category} Kategória Szakmái`}</h1>
      <div className={classes.professions}>
        {professionList.map((data, i) => (
          <ProfessionBadge
            onChooseProfession={searchProfessionHandler}
            type='action'
            professionName={data}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfessionList;
