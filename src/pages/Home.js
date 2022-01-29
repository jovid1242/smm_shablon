import React from "react";

import logo from "../assets/img/logo.png";

export default function Home() {
  return (
    <div>
      <div className="smm">
        <div className="smm__container">
          <div className="header">
            <div className="logo">
              <img src={logo} alt="logo" />
              <a href="https://www.instagram.com/navrvzshoh/">@navrvzshoh</a>
            </div>
          </div>
          <div className="banner">
            <div className="banner__wrapper">
              <h4>Курс SMM</h4>
              <h2>
                Для владельцев бизнеса <br /> и для начинающих
              </h2>
              <p>
                Практический онлайн-курс, где вы узнаете, как продвигать свой
                бизнес в социальных сетях без траты денег на подрядчиков.
                Научитесь настраивать рекламу, привлекать новых клиентов и
                повысить прибыль своего проекта.
              </p>
              <div className="btn">
                <a href="">Вводный урок</a>
              </div>
            </div>
          </div>
          <div className="action">
            <div className="card">
              <h4>
                Скидка до <br />
                конца месяца
              </h4>
            </div>
            <div className="card">
              <h4>
                {" "}
                Можно пройти <br />
                за одну неделю
              </h4>
            </div>
            <div className="card">
              <h4>
                Индивидуальный <br />
                куратор{" "}
              </h4>
            </div>
            <div className="card">
              <h4>
                {" "}
                Меньше теории
                <br />
                больше практики
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
