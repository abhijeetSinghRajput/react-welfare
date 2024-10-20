import React from "react";
import "../../stylesheets/nav.css";
import navigation from "../../navigation.json";

function Dropdown({ list }) {
  return (
    <ul className="dropdown">
      {list.map(({ title, href }, index) => (
        <li key={index}>
          <a href={href}>{title}</a>
        </li>
      ))}
    </ul>
  );
}

function BottomNav() {
  const { links } = navigation;

  return (
    <nav className="bottom-nav">
      <div className="container">
        <ul>
          {links.map((link, index) => (
            <li
              key={index}
              className={link.subcategory.length ? "dropmenu" : ""}
            >
              <a href={link.href}>{link.title}</a>
              {link.subcategory.length > 0 && (
                <>
                  <i className="uil uil-angle-down"></i>
                  <Dropdown list={link.subcategory} />
                </>
              )}
            </li>
          ))}
        </ul>
        <div>
          <div className="search-box">
            <input type="text" placeholder="Search" />
            <div className="icon">
              <i className="uil uil-search"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default BottomNav;
