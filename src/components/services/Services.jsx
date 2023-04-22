import React, { useState } from "react";
import "./services.css";
const Services = () => {
  const [toggle, setToggle] = useState(0);
  const toggleTag = (index) => {
    setToggle(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Work Experience</h2>
      {/* <span className="section__subtitle">What is offer</span> */}

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Build website <br /> E-commerce
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTag(1)}>
            View more
            <i className="uil uil-arrow-right"></i>
          </span>

          <div
            className={
              toggle === 1 ? "services__modal active_modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTag(0)}
              ></i>

              <h3 className="services__modal-title">
                Build website E-commerce
              </h3>
              <p className="services__modal-description">
                Building an E-commerce website with all 3 roles: Admin, user,
                and seller.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Link github: github.com/NPC2704/ecommerce-web
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    My team size: 03 people
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Technology description: <br />
                    + Front-end: HTML, CSS (Bootstrap), Javacript, <br />+
                    Back-end: Spring datta JPA, Hibernate, MVC pattern
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {" "}
                    My position in project: <br />
                    + User interface programming <br />
                    + API access <br />
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Clone App <br /> ZING MP3
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTag(2)}>
            View more
            <i className="uil uil-arrow-right"></i>
          </span>

          <div
            className={
              toggle === 2 ? "services__modal active_modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTag(0)}
              ></i>

              <h3 className="services__modal-title"> Clone App ZING MP3</h3>
              <p className="services__modal-description">
                Using available APIs to rebuild the ZING MP3 music website.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Link github: github.com/NPC2704/Zing_MP3
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Personal project</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Technology description: <br />+ Front-end: HTML, CSS
                    (TaiwindCss), ReactJS, Redux
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Visual <br /> Designer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTag(3)}>
            View more
            <i className="uil uil-arrow-right"></i>
          </span>

          <div
            className={
              toggle === 3 ? "services__modal active_modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTag(0)}
              ></i>

              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of product for companies.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};
export default Services;
