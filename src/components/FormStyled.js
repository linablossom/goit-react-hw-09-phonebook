import styled from "styled-components";

export const Container = styled.div`
  width: 415px;
`;

export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -150px 0 0 -150px;
  width: 300px;
  height: 300px;
`;

export const Title = styled.h1`
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
  text-align: center;
`;

export const Subtitle = styled.h2`
  margin-top: 60px;
  margin-bottom: 20px;
  font-size: 32px;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
`;

export const Label = styled.label`
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
`;

export const Contact = styled.li`
  font-size: 14px;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
`;

export const Input = styled.input`
  width: 93%;
  margin-bottom: 10px;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  outline: none;
  padding: 10px;
  font-size: 13px;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2),
    0 1px 1px rgba(255, 255, 255, 0.2);
  -webkit-transition: box-shadow 0.5s ease;
  -moz-transition: box-shadow 0.5s ease;
  -o-transition: box-shadow 0.5s ease;
  -ms-transition: box-shadow 0.5s ease;
  transition: box-shadow 0.5s ease;

  &:focus {
    box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.4),
      0 1px 1px rgba(255, 255, 255, 0.2);
  }
`;

export const Button = styled.button`
  display: block;
  text-align: center;
  vertical-align: middle;
  margin-bottom: 0;
  padding: 9px 14px;
  font-size: 15px;
  line-height: normal;
  color: rgba(255, 255, 255, 0.75);
  border: 1px solid #3762bc;
  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: #4a77d4;
  background-image: -webkit-linear-gradient(top, #6eb6de, #4a77d4);
  background-repeat: repeat-x;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.5);
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;

  &:hover,
  &:active {
    color: #ffffff;
    text-decoration: none;
    background-color: #4a77d4;
    background-position: 0 -15px;
    transition: background-position 0.1s linear;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    filter: none;
  }
`;

export const AddButton = styled.button`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  margin-top: 15px;
  margin-bottom: 0;
  padding: 9px 14px;
  font-size: 15px;
  line-height: normal;
  color: rgba(255, 255, 255, 0.75);
  border: 1px solid #3762bc;
  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: #4a77d4;
  background-image: -webkit-linear-gradient(top, #6eb6de, #4a77d4);
  background-image: -o-linear-gradient(top, #6eb6de, #4a77d4);
  background-image: linear-gradient(top, #6eb6de, #4a77d4);
  background-repeat: repeat-x;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  cursor: pointer;

  &:hover,
  &:active {
    color: #ffffff;
    text-decoration: none;
    background-color: #4a77d4;
    background-position: 0 -15px;
    transition: background-position 0.1s linear;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    filter: none;
  }
`;

export const DeleteButton = styled.button`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  margin-bottom: 0;
  padding: 4px 16px;
  font-size: 13px;
  line-height: normal;
  color: rgba(255, 255, 255, 0.75);
  border: 1px solid #3762bc;
  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: #4a77d4;
  background-image: -webkit-linear-gradient(top, #6eb6de, #4a77d4);
  background-repeat: repeat-x;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  cursor: pointer;

  &:hover,
  &:active {
    color: #ffffff;
    background-color: #4a77d4;
    background-position: 0 -15px;
    text-decoration: none;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    transition: background-position 0.1s linear;
    filter: none;
  }
`;

export const LogoutButton = styled.button`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  margin-bottom: 0;
  padding: 9px 14px;
  font-size: 15px;
  line-height: normal;
  color: rgba(255, 255, 255, 0.75);
  border: 1px solid #3762bc;
  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: #4a77d4;
  background-image: -webkit-linear-gradient(top, #6eb6de, #4a77d4);
  background-image: -o-linear-gradient(top, #6eb6de, #4a77d4);
  background-image: linear-gradient(top, #6eb6de, #4a77d4);
  background-repeat: repeat-x;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  cursor: pointer;

  &:hover,
  &:active {
    color: #ffffff;
    text-decoration: none;
    background-color: #4a77d4;
    background-position: 0 -36px;
    transition: background-position 0.1s linear;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    filter: none;
  }
`;
