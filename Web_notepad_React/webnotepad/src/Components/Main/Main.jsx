import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Form from "../Form/Form";
import Card from "../Card/Card";
import loadingImg from "../../Image/img.gif";

export default function Main() {
  const [formData, setFormData] = useState([]);
  const [imgCard, setImgCard] = useState([]);
  const [userCard, setUserCard] = useState(false);
  const [cardNumber, setCardNumber] = useState(0);
  const [imgPage, setImgPage] = useState(70);
  const [loading, setLoading] = useState(false);

  // console.log(loading);
  console.log(formData);

  const addFormData = (data) => {
    setFormData((prevForm) => {
      return [...prevForm, ...[data]];
    });
  };

  useEffect(() => {
    setUserCard(true);
  });

  const delFormData = (data) => {
    setFormData(data);
    setUserCard(false);
    // console.log(formData);
  };

  const increaseNumber = () => {
    setCardNumber((prevNumber) => {
      return prevNumber + 1;
    });
  };

  useEffect(() => {
    fetchImg();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardNumber]);

  useEffect(() => {
    setImgPage((prevPage) => {
      return prevPage + 1;
    });
  }, [cardNumber]);

  const fetchImg = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${imgPage}&limit=1`
      );
      if (!response.ok) {
        throw new Error("네트워크 응답이 되지 않았어요!");
      }
      const data = await response.json();
      console.log(data);
      setImgCard(data[0].download_url);
      console.log(formData);
      setLoading(false);
    } catch (error) {
      console.log("데이터 받아오기 문제 발생 : ", error);
    }
  };

  return (
    <MainStyle>
      <section>
        <Form
          addFormData={addFormData}
          increaseNumber={increaseNumber}
          imgCard={imgCard}
          formData={formData}
          setFormData={setFormData}
        />

        <article className="desContainer">
          <p>다음과 같이 저장됩니다.</p>
          <Card dec />
        </article>
      </section>

      <article className="container">
        {userCard && <Card formData={formData} delFormData={delFormData} />}
        {loading && <img src={loadingImg} alt="" className="imgLoading" />}
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
      display: flex;
      flex-direction: column;
      gap: 10px;
      p {
        color: #fff;
        font-weight: bold;
      }
    }

    &.container {
      width: 1280px;
      padding: 0 30px;
      display: flex;
      gap: 20px;
      /* wrap : 줄바꿈처리 */
      flex-wrap: wrap;
      position: relative;

      .imgLoading {
        z-index: 9999;
        width: 300px;
        height: 300px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;
