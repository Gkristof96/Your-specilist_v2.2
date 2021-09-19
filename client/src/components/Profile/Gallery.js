import style from "./Gallery.module.scss";

const Gallery = (props) => {
  return (
    <div className={style.gallery}>
      <h3>Galléria</h3>
      {props.gallery.length > 0 ? (
        <p>Galléria</p>
      ) : props.userComponent ? (
        <p>Még nem töltöttél fel képeket a profilodba!</p>
      ) : (
        <p>Ez a szakember még nem töltött fel képeket a profiljába!</p>
      )}
    </div>
  );
};

export default Gallery;
