import { Fragment } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import style from "./ProfileHeader.module.scss";

import Rating from "../Provider/Rating";
import ProfessionBadge from "../Professions/ProfessionBadge";

const ProfileHeader = ({ provider }) => {
  const doNothingHandler = () => {};
  return (
    <Fragment>
      <img
        className={style["profile-image"]}
        src={provider.image}
        alt={provider.name}
      />
      <div className={style["profile-header"]}>
        <h1>{provider.name}</h1>
        <Rating
          value={provider.rating}
          size="medium"
          numReviews={provider.numReviews}
        />
      </div>
      <div className={style["contact-info"]}>
        <h2>
          <FaMapMarkerAlt className={style.icon} />
          Hungary, {provider.city}
        </h2>
        <h2>
          <FaEnvelope className={style.icon} />
          {provider.email}
        </h2>
        <h2>
          <FaPhoneAlt className={style.icon} />
          {provider.tel}
        </h2>
      </div>
      <div className={style["profession-bar"]}>
        {provider.professions.map((profession, index) => (
          <ProfessionBadge
            onChooseProfession={doNothingHandler}
            professionName={profession.name}
            key={index}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default ProfileHeader;
