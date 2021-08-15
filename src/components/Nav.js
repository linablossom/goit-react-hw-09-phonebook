import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled(NavLink)`
  color: #fff;
  font-size: 20px;
  letter-spacing: 1px;
  list-style: none;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  & + & {
    margin-left: 30px;
  }
`;

const Nav = ({ isLogged }) => {
  return (
    <>
      {!isLogged ? (
        <NavContainer>
          <NavItem to={"/register"}>Register</NavItem>
          <NavItem to={"/login"}>Login</NavItem>
        </NavContainer>
      ) : null}
      {isLogged ? <NavItem to={"/contacts"}>Contacts</NavItem> : null}
    </>
  );
};

export default Nav;
