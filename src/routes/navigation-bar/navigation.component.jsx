import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import {ReactComponent as CrownSvg} from '../../assets/crown.svg';

function Navigation() {
  return (
    <Fragment>
      <div className="navigation">
        <h1 style={{ alignContent: "center" }}>I am the navigation bar</h1>
        <Link className="logo-container" to="/">
          <CrownSvg />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/Sign">
            SignIn
          </Link>
        </div>
        <Outlet />
      </div>
    </Fragment>
  );
}

export default Navigation;
