import { Fragment } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import classes from "./ProfileHeader.module.css";

import Rating from "../Provider/Rating";
import ProfessionBadge from "../Professions/ProfessionBadge";

const ProfileHeader = ({ provider }) => {
  const doNothingHandler = () => {};
  return (
    <Fragment>
      <img
        className={classes["profile-image"]}
        src={provider.image}
        alt={provider.name}
      />
      <div className={classes["profile-header"]}>
        <h1>{provider.name}</h1>
        <Rating
          value={provider.rating}
          size='medium'
          numReviews={provider.numReviews}
        />
      </div>
      <div className={classes["contact-info"]}>
        <h2>
          <FaMapMarkerAlt className={classes.icon} />
          Hungary, {provider.city}
        </h2>
        <h2>
          <FaEnvelope className={classes.icon} />
          {provider.email}
        </h2>
        <h2>
          <FaPhoneAlt className={classes.icon} />
          {provider.tel}
        </h2>
      </div>
      <div className={classes["profession-bar"]}>
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
