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
              <a href="https://www.instagram.com/navrvzshoh/" target="_blank">
                @navrvzshoh
              </a>
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
              <div className="btns">
                <div className="btn">
                  <a href="https://youtu.be/BLfmCA7UQEc" target="_blank">
                    Вводный урок
                  </a>
                </div>
                <div className="btn">
                  <a
                    href="https://www.instagram.com/navrvzshoh/"
                    target="_blank"
                  >
                    Приобрести
                  </a>
                </div>
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
      <div className="course_section">
        <div className="smm__container">
          <div className="c_wrapper">
            <div className="c_head">
              <h2>Программа обучения</h2>
              <p>"SMM для начинающих"</p>
            </div>
            <div className="ul">
              <ul>
                <li>
                  <div className="title">
                    <h2>1. SMM и c чем его едят</h2>
                  </div>
                  <p>• Что такое SMM</p>
                  <p>• Кто такой SMM специалист</p>
                  <p>• Какие бизнес-задачи решаются с помощью SMM</p>
                </li>
                <li>
                  <div className="title">
                    <h2> 2. Основы SMM-стратегии</h2>
                  </div>
                  <p> • Как составить портрет аудитории. Методы выявления ЦА</p>
                  <p> • Как выбрать методы продвижения</p>
                  <p>• Пошаговая инструкция по созданию SMM-стратегии </p>
                </li>
                <li>
                  <div className="title">
                    <h2>3. INSTAGRAM и FACEBOOK для бизнеса </h2>
                  </div>
                  <p>• Оформление Инстаграм </p>
                  <p> • Погружаемся в визуал аккаунта</p>
                  <p> • Контент план</p>
                </li>
                <li>
                  <div className="title">
                    <h2> 4. Методы продвижения в соцсетях</h2>
                  </div>
                  <p>• Обзор основных методов продвижения </p>
                  <p>• Таргетированная реклама и influencer-маркетинг </p>
                  <p>• Как продвигать свой бизнес в соцсетях </p>
                </li>
                <li>
                  <div className="title">
                    <h2> 5. Таргетированная реклама</h2>
                  </div>
                  <p>• Как создать и настроить рекламные кабинеты </p>
                  <p>• Установка пикселя и создание событий </p>
                  <p>• Запуск рекламных кампаний в Facebook и Instagram </p>
                </li>
                <li>
                  <div className="title">
                    <h2>6. Безопасность аккаунта </h2>
                  </div>
                  <p>• Как обезопасить свой аккаунт от взлома </p>
                  <p>• Как обезопасить аккаунт от бана </p>
                  <p>• Как выйти из теневого бана </p>
                </li>
                <li>
                  <div className="title">
                    <h2>7. Бонусы </h2>
                  </div>
                  <p>• Книги по маркетингу </p>
                  <p>• Гайды </p>
                  <p>• Чек-листы и полезные приложения</p>
                </li>
                <li>
                  <div className="title">
                    <h2>8. Экзамен </h2>
                  </div>
                  <p>• По итогам экзамена можно попасть в мою команду </p>
                  <p>• Можно вернуть свои деньги </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
