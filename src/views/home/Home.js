import React from 'react';

import styles from './style.module.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';

function Home() {


  return (

    <div className="page-content">
      <div className="page-title">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-12 mb-3 mb-md-0">
            <h5 className="h3 font-weight-400 mb-0 text-white">Personal profile</h5>
            <span className="text-sm text-white opacity-8">
              My name is Loc, I was born in 1994. I have more than 3 years experiences work on javascript.
              I am strongest in front-end and I want to be a specialist Font-end developer in the future.
          I desire to work in a place where is open and friendly. At there, I able to contribute and improve my skills to build up the great products.</span>
          </div>
        </div>
      </div>


      <div className="row">
        <div className="col-12">
          <div className="card card-fluid">
            <div className="card-header">
              <h5 className="mb-0">Experience and skills</h5>
            </div>
            <div className="card-body">
              <h3>VNG Corporation | April 2017 to Present</h3>
              <ul>
                <li>Software Engineering background.</li>
                <li>Experiences working JavaScript Framework (React, Angular).</li>
                <li>Knowledge REST API, gRPC, Swagger, OOP, JWT, DB and Unit test.</li>
                <li>Proficiency in writing ES6/TypeScript, CSS/Sass/Less, HTML5.</li>
                <li>Problem solving in high performance computing</li>
                <li>Strong HTML 5/CSS skills with the ability to implement pixel perfect designs from mock ups.</li>
                <li>Reviews of completed work on all environments, local/dev/stage/prod and suggest fixes within software best practices.</li>
                <li>Knowledge of Git practices via github.</li>
                <li>Use of JIRA to assign and manage tasks, defects and backlog.</li>
                <li>Ability to research new technology and open source.</li>
              </ul>


            </div>

          </div>


        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card card-fluid">
            <div className="card-body">

              <Swiper
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <a href="#" className="avatar avatar-lg rounded-circle">
                    <img alt="Image placeholder" src="/img/img-slide/hinh1.png" />
                  </a>

                </SwiperSlide>
                <SwiperSlide>
                  <a href="#" className="avatar avatar-lg rounded-circle">
                    <img alt="Image placeholder" src="/img/img-slide/hinh2.jpg" />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#" className="avatar avatar-lg rounded-circle">
                    <img alt="Image placeholder" src="/img/img-slide/hinh3.png" />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#" className="avatar avatar-lg rounded-circle">
                    <img alt="Image placeholder" src="/img/img-slide/hinh4.png" />
                  </a>
                </SwiperSlide>

                <SwiperSlide>
                  <a href="#" className="avatar avatar-lg rounded-circle">
                    <img alt="Image placeholder" src="/img/img-slide/hinh5.png" />
                  </a>

                </SwiperSlide>
                <SwiperSlide>
                  <a href="#" className="avatar avatar-lg rounded-circle">
                    <img alt="Image placeholder" src="/img/img-slide/hinh6.png" />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#" className="avatar avatar-lg rounded-circle">
                    <img alt="Image placeholder" src="/img/img-slide/hinh7.png" />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#" className="avatar avatar-lg rounded-circle">
                    <img alt="Image placeholder" src="/img/img-slide/hinh8.png" />
                  </a>
                </SwiperSlide>

                <SwiperSlide>
                  <a href="#" className="avatar avatar-lg rounded-circle">
                    <img alt="Image placeholder" src="/img/img-slide/hinh9.webp" />
                  </a>
                </SwiperSlide>

                <SwiperSlide>
                  <a href="#" className="avatar avatar-lg rounded-circle">
                    <img alt="Image placeholder" src="/img/img-slide/hinh10.png" />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#" className="avatar avatar-lg rounded-circle">
                    <img alt="Image placeholder" src="/img/img-slide/hinh11.png" />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#" className="avatar avatar-lg rounded-circle">
                    <img alt="Image placeholder" src="/img/img-slide/hinh12.png" />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#" className="avatar avatar-lg rounded-circle">
                    <img alt="Image placeholder" src="/img/img-slide/hinh13.jpg" />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#" className="avatar avatar-lg rounded-circle">
                    <img alt="Image placeholder" src="/img/img-slide/hinh14.png" />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#" className="avatar avatar-lg rounded-circle">
                    <img alt="Image placeholder" src="/img/img-slide/hinh15.png" />
                  </a>
                </SwiperSlide>
              </Swiper>
            </div>


          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card card-fluid ">
            <div className="card-header">
              <h5 className="mb-0">Education</h5>
            </div>
            <div className="card-body">
              <p>Posts and Telecommunications Institute of Technology, HCMC | 2012 - 2017 <br></br>
                Bachelor of Engineer<br></br>
                Engineer’s Degree: Computer Software Engineering<br></br>
                {/* GPA 2.6<br></br> */}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div >

  );
}

export default Home;