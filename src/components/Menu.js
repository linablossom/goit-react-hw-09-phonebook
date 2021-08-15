import React from "react";
import Nav from "./Nav";
import UserMenu from "./UserMenu";
import { useSelector } from "react-redux";
import { isLogged } from "../redux/selectors/userSelectors";
import styled from "styled-components";

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 78px;
  padding-top: 5px;
  padding-bottom: 15px;
  height: 50px;
  border-bottom: 2px solid rgba(100, 100, 100, 0.5);
`;

const Menu = () => {
  const logged = useSelector(isLogged);
  return (
    <MenuContainer>
      <Nav isLogged={logged} />
      {logged ? <UserMenu /> : null}
    </MenuContainer>
  );
};

export default Menu;
