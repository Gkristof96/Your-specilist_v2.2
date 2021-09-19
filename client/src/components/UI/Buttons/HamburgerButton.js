import { line, hamburger, open } from "./HamburgerButton.module.scss";

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
