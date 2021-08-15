import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../redux/selectors/userSelectors";
import { logout } from "../redux/services/userApiService";
import { LogoutButton } from "./FormStyled";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserEmail = styled.span`
  margin-right: 30px;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
  list-style: none;
`;

const UserMenu = () => {
  const userInfo = useSelector(getUserInfo);
  const dispatch = useDispatch();
  const logoutUser = useCallback(() => dispatch(logout()), [dispatch]);
  return (
    <NavContainer>
      <UserEmail>{userInfo && userInfo.email}</UserEmail>
      <LogoutButton onClick={logoutUser}>Logout</LogoutButton>
    </NavContainer>
  );
};

export default UserMenu;
