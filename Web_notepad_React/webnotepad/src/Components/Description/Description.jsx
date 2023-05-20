import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";

export default function Description() {
  return (
    <DesStyle>
      <p>다음과 같이 저장됩니다.</p>
      <Card dec />
    </DesStyle>
  );
}

const DesStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    color: #fff;
    font-weight: bold;
  }
`;
