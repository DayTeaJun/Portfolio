import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderStyle>
      <h1>메모 끄적 (_ _)</h1>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  max-width: 100%;
  background-color: #00131d;
  text-align: center;
  padding: 1em;
  color: #fff;
  h1 {
    font-family: "TheJamsil5Bold";
    font-size: 2em;
  }
`;
