import React from 'react';
import Nav from '../../components/nav/Nav'
import styles from './style.module.scss';

function Home() {

    return (
        <div class="application application-offset ready sidenav-pinned">
            <div className="container-fluid container-application">
                <Nav></Nav>

                <div class="main-content position-relative">
                    <nav class="navbar navbar-main navbar-expand-lg navbar-dark bg-primary navbar-border" id="navbar-main">
                        <div class="container-fluid">

                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="navbar-user d-lg-none ml-auto">
                                <ul class="navbar-nav flex-row align-items-center">
                                    <li class="nav-item">
                                        <a href="#" class="nav-link nav-link-icon sidenav-toggler active" data-action="sidenav-pin" data-target="#sidenav-main">
                                            <i class="fas fa-bars"></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link nav-link-icon" data-action="omnisearch-open" data-target="#omnisearch">
                                            <i class="fas fa-search"></i></a>
                                    </li>
                                    <li class="nav-item dropdown dropdown-animate">
                                        <a class="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-bell"></i></a>

                                    </li>
                                    <li class="nav-item dropdown dropdown-animate">
                                        <a class="nav-link pr-lg-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span class="avatar avatar-sm rounded-circle">
                                                <img alt="Image placeholder" src="https://demo.webpixels.io/purpose-application-ui-kit-v1.0.0/assets/img/theme/light/team-4-800x800.jpg" />
                                            </span>
                                        </a>

                                    </li>
                                </ul>
                            </div>

                            <div class="collapse navbar-collapse navbar-collapse-fade" id="navbar-main-collapse">
                                <ul class="navbar-nav align-items-lg-center">

                                    <li class="nav-item ">
                                        <a class="nav-link pl-lg-0" href="../../application/home.html">
                                            Home
                                        </a>
                                    </li>
                                    <li class="nav-item ">
                                        <a class="nav-link pl-lg-0" href="../../application/home.html">
                                            Project
                                        </a>
                                    </li>
                                </ul>
                                <ul class="navbar-nav ml-lg-auto align-items-center d-none d-lg-flex">
                                    <li class="nav-item">
                                        <a href="#" class="nav-link nav-link-icon sidenav-toggler active" data-action="sidenav-pin" data-target="#sidenav-main"><i class="fas fa-bars"></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link nav-link-icon" data-action="omnisearch-open" data-target="#omnisearch"><i class="fas fa-search"></i></a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </nav >


                    <div class="page-content">
                        <div class="page-title">
                            <div class="row justify-content-between align-items-center">
                                <div class="col-md-6 mb-3 mb-md-0">
                                    <h5 class="h3 font-weight-400 mb-0 text-white">Moning, Heather!</h5>
                                    <span class="text-sm text-white opacity-8">Have a nice day!</span>
                                </div>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-12">
                                <div class="card card-fluid">
                                    <div class="card-header">
                                        <h6 class="mb-0">Engagement</h6>
                                    </div>
                                    <div class="card-body">
                                        <h1>hello world</h1>
                                        <h1>hello world</h1>
                                        <h1>hello world</h1>
                                        <h1>hello world</h1>
                                        <h1>hello world</h1>
                                        <h1>hello world</h1>
                                        <h1>hello world</h1>
                                        <h1>hello world</h1>
                                        <h1>hello world</h1>
                                        <h1>hello world</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div >

                    <div class="footer pt-5 pb-4 footer-light" id="footer-main">
                        <div class="row text-center text-sm-left align-items-sm-center">
                            <div class="col-sm-6">
                                <p class="text-sm mb-0">© 2019 <a href="https://webpixels.io" class="h6 text-sm" target="_blank">Webpixels</a>. All rights reserved.</p>
                            </div>
                            <div class="col-sm-6 mb-md-0">
                                <ul class="nav justify-content-center justify-content-md-end">

                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Support</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Terms</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link pr-0" href="#">Privacy</a>
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