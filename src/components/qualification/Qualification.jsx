import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggle, setToggle] = useState(1);
  const toggleTag = (index) => {
    setToggle(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggle === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => {
              toggleTag(1);
            }}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggle === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => {
              toggleTag(2);
            }}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Certifications
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggle === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Ho Chi Minh City University of Technology and Education
                </h3>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2020 - Present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Specialization in Software Engineering
                </h3>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2020 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Junior </h3>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2020 - Present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">GPA: 7.6</h3>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2020 - Present
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggle === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  BIG DATA MACHINE LEARNING FUNDAMENTALS
                </h3>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>29th SEP, 2022
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  GOOGLE CLOUD TRAINING DAY Core Infrastructure Fundamentals
                </h3>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>30th AUG, 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
