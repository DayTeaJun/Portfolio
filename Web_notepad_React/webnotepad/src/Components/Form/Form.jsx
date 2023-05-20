import React from "react";
import styled from "styled-components";

export default function Form() {
  return (
    <FormStyle>
      <label htmlFor="title-txt" className="a11y-hidden">
        제목
      </label>
      <input type="text" id="title-txt" placeholder="제목" />

      <textarea rows="6" placeholder="내용을 입력하세요."></textarea>

      <button type="submit">메모 등록</button>
      <button className="reset" onClick="deleteAll()" type="button">
        초기화
      </button>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  gap: 10px;
  padding-bottom: 10px;

  input,
  textarea,
  button {
    width: 100%;
    font-size: 1.2em;
    display: block;
    box-sizing: border-box;
    border: none;
    padding: 0.5em;
    font-weight: bold;
    color: black;
  }

  input {
    background: rgb(233, 233, 233);
  }

  textarea {
    font-size: 1em;
    resize: none;
  }

  button {
    background-color: rgb(40, 40, 40);
    color: #fff;

    border-radius: 5px;
    transition: 0.4s;

    &.reset {
      background-color: rgb(94, 76, 76);
    }

    &:hover {
      background-color: rgb(133, 133, 133);
      color: black;
    }
  }
`;
