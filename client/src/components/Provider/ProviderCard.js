import { FaMapMarkerAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import style from "./ProviderCard.module.scss";

import Rating from "./Rating";
import ProfessionBadge from "../Professions/ProfessionBadge";

const ProviderCard = ({ provider }) => {
  const history = useHistory();

  const chooseProviderHandler = () => {
    history.replace(`/provider/${provider._id}`);
  };
  return (
    <div onClick={chooseProviderHandler} className={style["provider-card"]}>
      <img
        src={provider.image}
        alt={`${provider.firstname} ${provider.lastname}`}
      />
      <div className={style["provider-info"]}>
        <div className={style.header}>
          <h1>{provider.name}</h1>
          <Rating
            value={provider.rating}
            numReviews={provider.numReviews}
            size="small"
          />
        </div>
        <h2>
          <FaMapMarkerAlt className={style.icon} /> Hungary, {provider.city}
        </h2>
        {provider.bio ? (
          <p>{provider.bio}</p>
        ) : (
          <p>Ez a szakember még nem töltött fel bemutatkozó szöveget.</p>
        )}
        <div className={style["professions-bar"]}>
          {provider.professions.map((profession, index) => (
            <ProfessionBadge
              professionName={profession.name}
              size="small"
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProviderCard;
