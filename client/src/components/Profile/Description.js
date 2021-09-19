import style from "./Description.module.scss";

const Description = (props) => {
  return (
    <div className={style.description}>
      <h3>Bemutatkozás</h3>
      {props.bio ? (
        <p>{props.bio}</p>
      ) : props.userComponent ? (
        <p>Még nem töltöttél fel bemutatkozást!</p>
      ) : (
        <p>Ez a szakember még nem töltött fel bemutatkozást!</p>
      )}
    </div>
  );
};

export default Description;
