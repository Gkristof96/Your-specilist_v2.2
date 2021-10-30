import { line, hamburger, open } from "./HamburgerButton.module.css";

const HamburgerButton = (props) => {
  return (
    <button
      className={`${hamburger} ${props.isDrawerOpen && open}`}
      onClick={props.onToggleDrawer}
    >
      <div className={line} />
      <div className={line} />
      <div className={line} />
    </button>
  );
};

export default HamburgerButton;
