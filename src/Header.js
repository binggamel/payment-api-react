import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Header.css";

const { Header } = Layout;

function header() {
  return (
    <>
      <div id="headerBox" className="headerBox">
        <Ul id="headerUl" className="headerUl">
          <Li style={{ marginLeft: "7vw" }}>
            <Link to="/" className="logoA">
              Main
            </Link>
          </Li>
          <Li id="apply_1">
            <Link to="/list">ProductList</Link>
          </Li>
          <Li id="login">
            <Link to="/login">Login</Link>
          </Li>
        </Ul>
      </div>
    </>
  );
}

export default header;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
  float: left;
  margin-right: 20px;
  width: 90px;
  height: 36px;
  text-align: center;
  line-height: 36px;
`;
