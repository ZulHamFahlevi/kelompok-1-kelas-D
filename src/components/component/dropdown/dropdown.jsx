import "./dropdown.css";
import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function DropdownComponent(props) {
  const location = useLocation();
  const onClick = (event, link) => {
    // if ctrl or meta key are held on click, allow default behavior of opening link in new tab
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    // prevent full page reload
    event.preventDefault();
    // update url
    window.history.pushState({}, "", link);

    // communicate to Routes that URL has changed
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <div className="dropdown">
      <a
        className="dropdown-container"
        href={props.link}
        style={
          location.pathname === props.link
            ? {
                backgroundColor: "#f0f2f5",
              }
            : {}
        }
        onClick={(event) => {
          onClick(event, props.link);
          props.setLocation(props.link);
        }}
      >
        <Link className="menu-title" to={props.link}>
          {props.title}
        </Link>
        {props.submenu.length > 0 && <i className="bx bxs-down-arrow"></i>}
      </a>
      {props.submenu.length > 0 ? (
        <div className="dropdown-submenu">
          {props.submenu.map((item, idx) => (
            <a
              className="dropdown-subcontainer"
              key={idx}
              href={item.link}
              onClick={(event) => {
                onClick(event, item.link);
                props.setLocation(item.link);
              }}
            >
              <span className="submenu-title">{item.label}</span>
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
