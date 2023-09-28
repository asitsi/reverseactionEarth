import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import menuItem from './menuItems'
// import MenuItemConsultant from "./utiils/MenuItemConsultant";

const Sidebar = ({ children, Roles }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  //   const role = JSON.parse(window.localStorage.getItem('roles'));
  const role = 1;
  console.log(role)

  return (
    <div>
      <div className="container">
        <div style={{ width: isOpen ? "250px" : "60px" }} className="sidebar">
          <div className="top_section" style={{ backgroundColor: 'rgba(8,149,81,255)', display: 'flex', justifyContent: 'center' }}>
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
              Logo
            </h1>
          </div>
          <div style={{ backgroundColor: 'rgba(8,149,81,255)', height: '100vh', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="link"
                activeclassName="active"
              >
                <div style={{ display: 'flex', justifyContent: 'center', width: '150px', gap: '1rem', alignItems:'center', transition: 'background-color 0.5s ease', margin:'1rem 0' }}>
                  <div className="icon">{item.icon}</div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    {item.name}
                  </div>
                </div>
              </NavLink>
            ))}
          </div>

        </div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Sidebar;
