import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assest/crown.svg";
import { auth } from "../../firebase/firebase.utils";
const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className ="logo-section">
      <Logo className="logo-container"></Logo>
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/shop" className="option">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="Sign-out-block">
          {currentUser.photoURL ? (
            <img
              className="profileImg"
              alt={`${currentUser.displayName}`}
              src={`${currentUser.photoURL}`}
            ></img>
          ) : null}
          <div className="option " onClick={() => auth.signOut()}>
            Sign Out
          </div>
        </div>
      ) : (
        <Link to="/signin" className="option">
          Sign in
        </Link>
      )}
    </div>
  </div>
);

export default Header;
