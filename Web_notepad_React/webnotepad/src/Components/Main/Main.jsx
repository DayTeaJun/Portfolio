import React from "react";
import styled from "styled-components";
import Form from "../Form/Form";
import Description from "../Description/Description";
import Card from "../Card/Card";

export default function Main() {
  return (
    <MainStyle>
      <section>
        <Form />
        <article className="desContainer">
          <Description />
        </article>
      </section>

      <article className="container">
        <Card />
      </article>
    </MainStyle>
  );
}

const MainStyle = styled.main`
  max-width: 1280px;
  display: flex;
  margin: 0 auto;
  padding: 1.5em;

  section {
    width: 500px;
    border-right: solid 1px #d2e9ef;
    padding-right: 20px;
  }

  article {
    /* padding-right: 20px; */

    &.desContainer {
    }

    &.container {
      width: 1280px;
      padding: 0 30px;
      display: flex;
      gap: 20px;
      /* wrap : 줄바꿈처리 */
      flex-wrap: wrap;
    }
  }
`;
