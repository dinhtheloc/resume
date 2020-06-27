import React, { useEffect } from 'react';

import styles from './style.module.scss';

import Swiper from 'swiper';

function Home() {

  useEffect(() => {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 5,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
    });
  });

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
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a href="#" class="avatar avatar-lg rounded-circle">
                      <img alt="Image placeholder" src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#" class="avatar avatar-lg rounded-circle">
                      <img alt="Image placeholder" src="https://ih1.redbubble.net/image.630715057.4214/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#" class="avatar avatar-lg rounded-circle">
                      <img alt="Image placeholder" src="https://angular.io/assets/images/logos/angular/angular.png" />
                    </a>
                  </div>

                  <div className="swiper-slide">
                    <a href="#" class="avatar avatar-lg rounded-circle">
                      <img alt="Image placeholder" src="https://www.gstatic.com/devrel-devsite/prod/vec8054dd6c74f1424e7592d63d6d2872d5c94cd4d7afe1dc4e818c4ad10419d1/firebase/images/touchicon-180.png" />
                    </a>
                  </div>


                  <div className="swiper-slide">
                    <a href="#" class="avatar avatar-lg rounded-circle">
                      <img alt="Image placeholder" src="https://upload.wikimedia.org/wikipedia/vi/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png" />
                    </a>
                  </div>

                  <div className="swiper-slide">
                    <a href="#" class="avatar avatar-lg rounded-circle">
                      <img alt="Image placeholder" src="https://images.tutorialedge.net/images/node.png" />
                    </a>
                  </div>



                  <div className="swiper-slide">
                    <a href="#" class="avatar avatar-lg rounded-circle">
                      <img alt="Image placeholder" src="https://seeklogo.com/images/S/swagger-logo-A49F73BAF4-seeklogo.com.png" />
                    </a>
                  </div>

                  <div className="swiper-slide">
                    <a href="#" class="avatar avatar-lg rounded-circle">
                      <img alt="Image placeholder" src="https://cdn.auth0.com/blog/jwtalgos/logo.png" />
                    </a>
                  </div>

                  <div className="swiper-slide">
                    <a href="#" class="avatar avatar-lg rounded-circle">
                      <img alt="Image placeholder" src="https://cdn.shopify.com/s/files/1/1300/8977/products/2846416_1200x1200.png?v=1556134203" />
                    </a>
                  </div>

                  <div className="swiper-slide">
                    <a href="#" class="avatar avatar-lg rounded-circle">
                      <img alt="Image placeholder" src="https://jmetervietnam.files.wordpress.com/2019/04/1_uhzoof1etgckn9_xisst4w.png" />
                    </a>
                  </div>

                  <div className="swiper-slide">
                    <a href="#" class="avatar avatar-lg rounded-circle">
                      <img alt="Image placeholder" src="https://phambinh.net/wp-content/uploads/2019/07/mysql_PNG9.png" />
                    </a>
                  </div>

                  {/* <div className="swiper-slide">
                  <a href="#" class="avatar avatar-lg rounded-circle">
                    <img alt="Image placeholder" src="https://unitopsmedia.com/wp-content/uploads/2019/10/git.png" />
                  </a>
                </div> */}

                  <div className="swiper-slide">
                    <a href="#" class="avatar avatar-lg rounded-circle">
                      <img alt="Image placeholder" src="https://img.favpng.com/10/1/9/sass-logo-cascading-style-sheets-scalable-vector-graphics-clip-art-png-favpng-MBDAQaKjCfm6GBcGEKDZdiM04.jpg" />
                    </a>
                  </div>

                  <div className="swiper-slide">
                    <a href="#" class="avatar avatar-lg rounded-circle">
                      <img alt="Image placeholder" src="https://ttsvn.net/wp-content/uploads/2016/04/PTS.png" />
                    </a>
                  </div>

                  {/* <div className="swiper-slide">
                  <a href="#" class="avatar avatar-lg rounded-circle">
                    <img alt="Image placeholder" src="https://cdn.freebiesupply.com/logos/thumbs/2x/figma-1-logo.png" />
                  </a>
                </div> */}
                </div>
              </div>

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