/** @jsxImportSource @emotion/react */
import React from "react";
import logo from "./logo.svg";
import { css } from "@emotion/react";
import "./App.css";

function App() {
  return (
    <div
      css={css`
        background-color: white;
      `}
    >
      <div
        css={css`
          min-height: 33vh;
          height: 537px;
          z-index: 2;
          position: relative;
        `}
      >
        <img
          src="https://images.squarespace-cdn.com/content/v1/626f7b979700b83d88ed171c/c8e9c2c4-ad45-4da3-a9fa-acf4c180014e/Artboard+4.png"
          css={css`
            object-position: 50% 50%;
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 1;
          `}
        />
      </div>
      <div
        css={css`
          background-color: #9e2129;
          color: white;
          padding: 25px 100px;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <h3
          css={css`
            font-size: 2rem;
          `}
        >
          ChAMP Engineering นำนิสิตเก่าที่ประสบความสำเร็จในอาชีพการงาน มาเป็น
          Mentor เพื่อให้คำแนะนำกับ Mentee ซึ่งเป็นรุ่นน้องนิสิต ป.ตรี
        </h3>
        <div>
          <p>
            ทั้งในด้านการตั้งเป้าหมายชีวิต วางแผนเส้นทางอาชีพ
            ตลอดจนสร้างแรงบันดาลใจและทัศนคติที่ดี
            พัฒนาทักษะความสามารถในมิติต่างๆ
            รวมทั้งเชื่อมโยงโลกการศึกษาเข้าสู่โลกแห่งการทำงาน
          </p>
          <br />
          <p>
            โดยมีต้นแบบจาก <strong>ChAMP Chulalongkorn</strong>
          </p>
        </div>
      </div>
      <div
        css={css`
          padding: 25px;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: center;
        `}
      >
        <strong
          css={css`
            font-size: 1.5rem;
            text-align: center;
          `}
        >
          ร่วมเป็นส่วนหนึ่งกับ ChAMP Engineering โดย
        </strong>
        <div
          css={css`
            margin-top: 20px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            :first-child {
              max-width: 50%;
              margin-right: 10%;
            }
          `}
        >
          <div>
            <h3
              css={css`
                font-size: 1.5rem;
              `}
            >
              Become ChAMP Engineering 5 mentee
            </h3>
            <p>
              สมัครเป็น Mentee กับ Mentorship program
              ที่จะเปิดรับสมัครนิสิตปริญญาตรี คณะวิศวฯ จุฬาฯ
              <br />
              ซึ่ง Mentee
              จะมีรุ่นพี่นิสิตเก่าที่ประสบความสำเร็จในอาชีพการงานมาเป็นพี่เลี้ยง
              (Mentor) ที่คอยให้คำแนะนำตลอดทั้งโครงการ
            </p>
            <button
              css={css`
                background-color: #9e2129;
                color: white;
                border-color: #9e2129;
                padding: 20px;
                margin-top: 20px;
              `}
            >
              สมัครเป็น mentee
            </button>
          </div>
          <img
            alt=""
            css={css`
              max-height: 100%;
              max-width: 100%;
              border-radius: 30px;
            `}
            src={
              "https://images.squarespace-cdn.com/content/v1/626f7b979700b83d88ed171c/d9822357-d237-4fa2-b2f2-d02921c7f826/DSC06969.jpg?format=1500w"
            }
          />
        </div>
        <div
          css={css`
            margin-top: 20px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          `}
        >
          <img
            alt=""
            css={css`
              max-height: 100%;
              max-width: 100%;
              border-radius: 30px;
            `}
            src={
              "https://images.squarespace-cdn.com/content/v1/626f7b979700b83d88ed171c/d9822357-d237-4fa2-b2f2-d02921c7f826/DSC06969.jpg?format=1500w"
            }
          />
          <div>
            <h3
              css={css`
                font-size: 1.5rem;
              `}
            >
              Become ChAMP Engineering 5 mentee
            </h3>
            <p>
              สมัครเป็น Mentee กับ Mentorship program
              ที่จะเปิดรับสมัครนิสิตปริญญาตรี คณะวิศวฯ จุฬาฯ
              <br />
              ซึ่ง Mentee
              จะมีรุ่นพี่นิสิตเก่าที่ประสบความสำเร็จในอาชีพการงานมาเป็นพี่เลี้ยง
              (Mentor) ที่คอยให้คำแนะนำตลอดทั้งโครงการ
            </p>
            <button
              css={css`
                background-color: #9e2129;
                color: white;
                border-color: #9e2129;
                padding: 20px;
                margin-top: 20px;
              `}
            >
              สมัครเป็น mentee
            </button>
          </div>
        </div>
        <div
          css={css`
            margin-top: 20px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            :first-child {
              max-width: 50%;
              margin-right: 10%;
            }
          `}
        >
          <div>
            <h3
              css={css`
                font-size: 1.5rem;
              `}
            >
              Become ChAMP Engineering 5 mentee
            </h3>
            <p>
              สมัครเป็น Mentee กับ Mentorship program
              ที่จะเปิดรับสมัครนิสิตปริญญาตรี คณะวิศวฯ จุฬาฯ
              <br />
              ซึ่ง Mentee
              จะมีรุ่นพี่นิสิตเก่าที่ประสบความสำเร็จในอาชีพการงานมาเป็นพี่เลี้ยง
              (Mentor) ที่คอยให้คำแนะนำตลอดทั้งโครงการ
            </p>
            <button
              css={css`
                background-color: #9e2129;
                color: white;
                border-color: #9e2129;
                padding: 20px;
                margin-top: 20px;
              `}
            >
              สมัครเป็น mentee
            </button>
          </div>
          <img
            alt=""
            css={css`
              max-height: 100%;
              max-width: 100%;
              border-radius: 30px;
            `}
            src={
              "https://images.squarespace-cdn.com/content/v1/626f7b979700b83d88ed171c/d9822357-d237-4fa2-b2f2-d02921c7f826/DSC06969.jpg?format=1500w"
            }
          />
        </div>
      </div>
      <div
        css={css`
          background-color: #2a2829;
          padding: 100px 60px;
          margin-left: auto;
          margin-right: auto;
        `}
      ></div>
    </div>
  );
}

export default App;

// https://images.squarespace-cdn.com/content/v1/626f7b979700b83d88ed171c/c8e9c2c4-ad45-4da3-a9fa-acf4c180014e/Artboard+4.png
