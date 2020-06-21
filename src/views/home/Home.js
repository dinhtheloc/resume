import React, { useEffect } from 'react';
import Nav from '../../components/nav/Nav';
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
    <div className="application application-offset ready sidenav-pinned">
      <div className="container-fluid container-application">
        <Nav></Nav>

        <div className="main-content position-relative">
          <nav className="navbar navbar-main navbar-expand-lg navbar-dark bg-primary navbar-border" id="navbar-main">
            <div className="container-fluid">

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="navbar-user d-lg-none ml-auto">
                <ul className="navbar-nav flex-row align-items-center">
                  <li className="nav-item">
                    <a href="#" className="nav-link nav-link-icon sidenav-toggler active" data-action="sidenav-pin" data-target="#sidenav-main">
                      <i className="fas fa-bars"></i></a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link nav-link-icon" data-action="omnisearch-open" data-target="#omnisearch">
                      <i className="fas fa-search"></i></a>
                  </li>
                  <li className="nav-item dropdown dropdown-animate">
                    <a className="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-bell"></i></a>

                  </li>
                  <li className="nav-item dropdown dropdown-animate">
                    <a className="nav-link pr-lg-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="avatar avatar-sm rounded-circle">
                        <img alt="Image placeholder" src="https://demo.webpixels.io/purpose-application-ui-kit-v1.0.0/assets/img/theme/light/team-4-800x800.jpg" />
                      </span>
                    </a>

                  </li>
                </ul>
              </div>

              <div className="collapse navbar-collapse navbar-collapse-fade" id="navbar-main-collapse">
                <ul className="navbar-nav align-items-lg-center">

                  <li className="nav-item ">
                    <a className="nav-link pl-lg-0" href="../../application/home.html">
                      Home
                                        </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link pl-lg-0" href="../../application/home.html">
                      Project
                                        </a>
                  </li>
                </ul>
                <ul className="navbar-nav ml-lg-auto align-items-center d-none d-lg-flex">
                  <li className="nav-item">
                    <a href="#" className="nav-link nav-link-icon sidenav-toggler active" data-action="sidenav-pin" data-target="#sidenav-main"><i className="fas fa-bars"></i></a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link nav-link-icon" data-action="omnisearch-open" data-target="#omnisearch"><i className="fas fa-search"></i></a>
                  </li>
                </ul>
              </div>

            </div>
          </nav >


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

                        <div className="swiper-slide">
                          <a href="#" class="avatar avatar-lg rounded-circle">
                            <img alt="Image placeholder" src="https://unitopsmedia.com/wp-content/uploads/2019/10/git.png" />
                          </a>
                        </div>

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

                        <div className="swiper-slide">
                          <a href="#" class="avatar avatar-lg rounded-circle">
                            <img alt="Image placeholder" src="https://cdn.freebiesupply.com/logos/thumbs/2x/figma-1-logo.png" />
                          </a>
                        </div>
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
                    GPA 2.6<br></br>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div >

          <div className="footer pt-5 pb-4 footer-light" id="footer-main">
            <div className="row text-center text-sm-left align-items-sm-center">
              <div className="col-sm-6">
                <p className="text-sm mb-0">© 2019 <a href="https://webpixels.io" className="h6 text-sm" target="_blank">Webpixels</a>. All rights reserved.</p>
              </div>
              <div className="col-sm-6 mb-md-0">
                <ul className="nav justify-content-center justify-content-md-end">

                  <li className="nav-item">
                    <a className="nav-link" href="#">Support</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Terms</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pr-0" href="#">Privacy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div >

      </div >

    </div >
  );
}

export default Home;