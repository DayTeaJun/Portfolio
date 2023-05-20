/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";

export default function Card(props) {
  console.log(props);

  return (
    <CardStyle {...props}>
      <a href="#">
        <div className="coverImg">
          <img src="./img/cat1.jpg" alt="고양이사진입니다" />
        </div>
        <div className="cardText">
          <h2>샘플</h2>
          <p>내용</p>
          <div>
            <p>1번 카드</p>
            <p>2023-04-15</p>
          </div>
        </div>
        <button type="button">✖️</button>
      </a>
    </CardStyle>
  );
}

const CardStyle = styled.article`
  width: ${({ dec }) =>
    dec === true ? `50%` : `calc((100% - (20px * 3)) / 4)`};
  height: ${({ dec }) => (dec === true ? `auto` : `330px`)};

  position: relative;
  border-radius: 8px;
  background: #fff;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: 0.2s;

  &:hover {
    transform: scale(1.12);
    box-shadow: 0 0 10px black;
    outline: solid white 3px;
    border: none;
    box-sizing: border-box;
    z-index: 30;
  }

  &.dec {
    width: 100%;
  }

  a {
    width: 100%;
    color: #29363d;
    .coverImg {
      position: relative;
      min-height: ${({ dec }) => (dec === true ? `100px` : `200px`)};
      overflow: hidden;

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        object-fit: cover;
      }
    }

    .cardText {
      padding: 10px;

      h2 {
        font-size: 16px;
        padding: 5px;
        white-space: nowrap;
        text-overflow: ellipsis;
        border-bottom: solid 1px black;
        text-align: center;
      }

      h2 + p {
        font-size: 12px;
        color: #5a6a72;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        word-break: break-all;
        margin: 12px 0 16px;
        line-height: 20px;
        min-height: 40px;
        border-bottom: solid 1px black;
      }

      div {
        display: flex;
        justify-content: space-between;
        font-size: 1em;
        font-weight: bold;
        align-items: center;

        & > p {
          font-size: 0.6em;
          color: black;
        }
        p + p {
          text-decoration: underline;
          font-size: 0.6em;
          color: black;
        }
      }
    }

    button {
      position: absolute;
      background-color: transparent;
      border: none;
      border-radius: 5px;
      font-size: 1em;
      padding: 3px;
      top: 0;
      right: 0;
      transition: 0.2s;

      &:hover {
        background-color: #fff;
      }
    }
  }
`;
