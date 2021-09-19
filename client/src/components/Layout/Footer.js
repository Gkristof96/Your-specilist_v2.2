import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      {/*<div className={style["footer-header"]}>
        <div className="logo">
          <img src="/images/logo.png" alt="logo" />
          <div className="text">
            <h1>Your Specialist</h1>
            <h2>The best professionist’s</h2>
          </div>
        </div>
        <ul className="social">
          <li>
            <AiFillFacebook className="icon" />
          </li>
          <li>
            <AiFillInstagram className="icon" />
          </li>
          <li>
            <AiFillTwitterSquare className="icon" />
          </li>
        </ul>
        <ul className="menu">
          <li>Szakmák</li>
          <li>Áralánlat</li>
          <li>Kapcsolat</li>
          <li>Bejelentkezés</li>
        </ul>
  </div>*/}
      <div className={style["footer-bottom"]}>
        <h1>Terms of usage | CopyRight © Kristof - 2020</h1>
      </div>
    </footer>
  );
};

export default Footer;
