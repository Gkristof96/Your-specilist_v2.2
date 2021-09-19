import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import style from "./ProfessionList.module.scss";

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
    <div className={style["profession-list"]}>
      <FaArrowAltCircleLeft
        className={style["back-arrow"]}
        onClick={closeProfessionListHandler}
      />
      <h1 className={style.title}>{`${category} Kategória Szakmái`}</h1>
      <div className={style.professions}>
        {professionList.map((data, i) => (
          <ProfessionBadge
            onChooseProfession={searchProfessionHandler}
            type="action"
            professionName={data}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfessionList;
