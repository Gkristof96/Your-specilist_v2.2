import style from "./ImageBackground.module.scss";

const ImageBackground = (props) => {
  return (
    <div className={`${style.background} ${style[`${props.className}`]}`}>
      {props.children}
    </div>
  );
};

export default ImageBackground;
