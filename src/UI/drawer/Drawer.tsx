import * as React from "react";
import "./drawer.css";

export const Drawer: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const open = menuIsOpen ? "bmd-drawer-in" : "";
  const inClass = menuIsOpen ? "in" : "";

  return (
    <React.Fragment>
      <div className={`bmd-drawer-f-l bmd-drawer-overlay ${open}`}>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="drawer"
          data-target="#dw-s2"
          onClick={toggleMenu}
        >
          <span className="sr-only">Toggle drawer</span>
          <span className="navbar-toggler-icon" />
        </button>
      <div id="dw-s2" className="bmd-layout-drawer bg-faded">
        <header>
          <a className="navbar-brand">Title</a>
        </header>
        <ul className="list-group">
          <a className="list-group-item">Link 1</a>
          <a className="list-group-item">Link 2</a>
          <a className="list-group-item">Link 3</a>
        </ul>
      </div>
      <div className={`bmd-layout-backdrop ${inClass}`} onClick={toggleMenu} />
      </div>
    </React.Fragment>
  );
};
