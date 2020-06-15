import React from 'react';
import styles from './style.module.scss';

function Home() {

    return (
        <div class="application application-offset ready sidenav-pinned">
            <div className="container-fluid container-application">
                <div className="sidenav show" id="sidenav-main">
                    <div className="sidenav-header d-flex align-items-center">
                        <a className="navbar-brand" href="../../index.html">
                            <img src="https://demo.webpixels.io/purpose-application-ui-kit-v1.0.0/assets/img/brand/white.png" className="navbar-brand-img" alt="..." />
                        </a>
                        <div className="ml-auto">
                            <div className="sidenav-toggler sidenav-toggler-dark d-md-none active" data-action="sidenav-unpin" data-target="#sidenav-main">
                                <div className="sidenav-toggler-inner">
                                    <i className="sidenav-toggler-line bg-white"></i>
                                    <i className="sidenav-toggler-line bg-white"></i>
                                    <i className="sidenav-toggler-line bg-white"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidenav-user d-flex flex-column align-items-center justify-content-between text-center">
                        <div>
                            <a href="#" className="avatar rounded-circle avatar-xl">
                                <img alt="Image placeholder" src="https://demo.webpixels.io/purpose-application-ui-kit-v1.0.0/assets/img/theme/light/team-1-800x800.jpg" className="" />
                            </a>
                            <div className="mt-4">
                                <h5 className="mb-0 text-white">Heather Parker</h5>
                                <span className="d-block text-sm text-white opacity-8 mb-3">Web Architect</span>
                                <a href="#" className="btn btn-sm btn-white btn-icon rounded-pill shadow hover-translate-y-n3">
                                    <span className="btn-inner--icon"><i className="far fa-coins"></i></span>
                                    <span className="btn-inner--text">$2.300</span>
                                </a>
                            </div>
                        </div>
                        <div className="w-100 mt-4 actions d-flex justify-content-between">
                            <a href="../../application/user/profile.html" className="action-item action-item-lg text-white pl-0">
                                <i className="far fa-user"></i>
                            </a>
                            <a href="#modal-chat" className="action-item action-item-lg text-white" data-toggle="modal">
                                <i className="far fa-comment-alt"></i>
                            </a>
                            <a href="../../application/shop/invoices.html" className="action-item action-item-lg text-white pr-0">
                                <i className="far fa-receipt"></i>
                            </a>
                        </div>
                    </div>
                    <div className="nav-application clearfix">
                        <a href="../../application/home.html" className="btn btn-square text-sm">
                            <span className="btn-inner--icon d-block"><i className="far fa-home fa-2x"></i></span>
                            <span className="btn-inner--icon d-block pt-2">Home</span>
                        </a>
                        <a href="../../application/project/card-listing.html" className="btn btn-square text-sm active">
                            <span className="btn-inner--icon d-block"><i className="far fa-project-diagram fa-2x"></i></span>
                            <span className="btn-inner--icon d-block pt-2">Projects</span>
                        </a>
                        <a href="../../application/task/table-listing.html" className="btn btn-square text-sm">
                            <span className="btn-inner--icon d-block"><i className="far fa-tasks fa-2x"></i></span>
                            <span className="btn-inner--icon d-block pt-2">Tasks</span>
                        </a>
                        <a href="../../application/task/kanban-board.html" className="btn btn-square text-sm">
                            <span className="btn-inner--icon d-block"><i className="far fa-columns fa-2x"></i></span>
                            <span className="btn-inner--icon d-block pt-2">Kanban</span>
                        </a>
                        <a href="../../application/user/card-listing.html" className="btn btn-square text-sm">
                            <span className="btn-inner--icon d-block"><i className="far fa-users-cog fa-2x"></i></span>
                            <span className="btn-inner--icon d-block pt-2">Users</span>
                        </a>
                        <a href="../../application/user/profile.html" className="btn btn-square text-sm">
                            <span className="btn-inner--icon d-block"><i className="far fa-user-ninja fa-2x"></i></span>
                            <span className="btn-inner--icon d-block pt-2">Profile</span>
                        </a>
                        <a href="../../application/shop/invoices.html" className="btn btn-square text-sm">
                            <span className="btn-inner--icon d-block"><i className="far fa-receipt fa-2x"></i></span>
                            <span className="btn-inner--icon d-block pt-2">Invoices</span>
                        </a>
                        <a href="../../application/widgets.html" className="btn btn-square text-sm">
                            <span className="btn-inner--icon d-block"><i className="far fa-cogs fa-2x"></i></span>
                            <span className="btn-inner--icon d-block pt-2">Widgets</span>
                        </a>
                    </div>
                    <div className="card bg-gradient-warning">
                        <div className="card-body">
                            <h5 className="text-white">Hello, Friend!</h5>
                            <p className="text-white mb-4">
                                Why not start using Purpose Application UI Kit and create something amazing today?
                            </p>
                            <a href="https://themes.getbootstrap.com/product/purpose-application-ui-kit/" className="btn btn-sm btn-block btn-white rounded-pill" target="_blank">Get started</a>
                        </div>
                    </div>
                </div>
                <div class="main-content position-relative">
                    <nav class="navbar navbar-main navbar-expand-lg navbar-dark bg-primary navbar-border" id="navbar-main">
                        <div class="container-fluid">

                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="navbar-user d-lg-none ml-auto">
                                <ul class="navbar-nav flex-row align-items-center">
                                    <li class="nav-item">
                                        <a href="#" class="nav-link nav-link-icon sidenav-toggler active" data-action="sidenav-pin" data-target="#sidenav-main"><i class="far fa-bars"></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link nav-link-icon" data-action="omnisearch-open" data-target="#omnisearch"><i class="far fa-search"></i></a>
                                    </li>
                                    <li class="nav-item dropdown dropdown-animate">
                                        <a class="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="far fa-bell"></i></a>
                                        <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg dropdown-menu-arrow p-0">
                                            <div class="py-3 px-3">
                                                <h5 class="heading h6 mb-0">Notifications</h5>
                                            </div>
                                            <div class="list-group list-group-flush">
                                                <a href="#" class="list-group-item list-group-item-action">
                                                    <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="2 hrs ago" data-original-title="" title="">
                                                        <div>
                                                            <span class="avatar bg-primary text-white rounded-circle">AM</span>
                                                        </div>
                                                        <div class="flex-fill ml-3">
                                                            <div class="h6 text-sm mb-0">Alex Michael <small class="float-right text-muted">2 hrs ago</small></div>
                                                            <p class="text-sm lh-140 mb-0">
                                                                Some quick example text to build on the card title.
                          </p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action">
                                                    <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="3 hrs ago" data-original-title="" title="">
                                                        <div>
                                                            <span class="avatar bg-warning text-white rounded-circle">SW</span>
                                                        </div>
                                                        <div class="flex-fill ml-3">
                                                            <div class="h6 text-sm mb-0">Sandra Wayne <small class="float-right text-muted">3 hrs ago</small></div>
                                                            <p class="text-sm lh-140 mb-0">
                                                                Some quick example text to build on the card title.
                          </p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action">
                                                    <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="5 hrs ago" data-original-title="" title="">
                                                        <div>
                                                            <span class="avatar bg-info text-white rounded-circle">JM</span>
                                                        </div>
                                                        <div class="flex-fill ml-3">
                                                            <div class="h6 text-sm mb-0">Jason Miller <small class="float-right text-muted">5 hrs ago</small></div>
                                                            <p class="text-sm lh-140 mb-0">
                                                                Some quick example text to build on the card title.
                          </p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action">
                                                    <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="2 hrs ago" data-original-title="" title="">
                                                        <div>
                                                            <span class="avatar bg-dark text-white rounded-circle">MJ</span>
                                                        </div>
                                                        <div class="flex-fill ml-3">
                                                            <div class="h6 text-sm mb-0">Mike Thomson <small class="float-right text-muted">2 hrs ago</small></div>
                                                            <p class="text-sm lh-140 mb-0">
                                                                Some quick example text to build on the card title.
                          </p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action">
                                                    <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="3 hrs ago" data-original-title="" title="">
                                                        <div>
                                                            <span class="avatar bg-primary text-white rounded-circle">RN</span>
                                                        </div>
                                                        <div class="flex-fill ml-3">
                                                            <div class="h6 text-sm mb-0">Richard Nixon <small class="float-right text-muted">3 hrs ago</small></div>
                                                            <p class="text-sm lh-140 mb-0">
                                                                Some quick example text to build on the card title.
                          </p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="py-3 text-center">
                                                <a href="#" class="link link-sm link--style-3">View all notifications</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown dropdown-animate">
                                        <a class="nav-link pr-lg-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span class="avatar avatar-sm rounded-circle">
                                                <img alt="Image placeholder" src="../../assets/img/theme/light/team-4-800x800.jpg" />
                                            </span>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right dropdown-menu-arrow">
                                            <h6 class="dropdown-header px-0">Hi, Heather!</h6>
                                            <a href="../../application/user/profile.html" class="dropdown-item">
                                                <i class="far fa-user"></i>
                                                <span>My profile</span>
                                            </a>
                                            <a href="../../application/account/settings.html" class="dropdown-item">
                                                <i class="far fa-cog"></i>
                                                <span>Settings</span>
                                            </a>
                                            <a href="../../application/account/billing.html" class="dropdown-item">
                                                <i class="far fa-credit-card"></i>
                                                <span>Billing</span>
                                            </a>
                                            <a href="../../application/shop/orders.html" class="dropdown-item">
                                                <i class="far fa-shopping-basket"></i>
                                                <span>Orders</span>
                                            </a>
                                            <div class="dropdown-divider"></div>
                                            <a href="../../application/authentication/login.html" class="dropdown-item">
                                                <i class="far fa-sign-out-alt"></i>
                                                <span>Logout</span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div class="collapse navbar-collapse navbar-collapse-fade" id="navbar-main-collapse">
                                <ul class="navbar-nav align-items-lg-center">

                                    <li class="nav-item d-lg-none ">
                                        <a class="nav-link" href="../../index.html">
                                            Overview
                </a>
                                    </li>
                                    <li class="border-top opacity-2 my-2"></li>

                                    <li class="nav-item ">
                                        <a class="nav-link pl-lg-0" href="../../application/home.html">
                                            Home
                </a>
                                    </li>

                                    <li class="nav-item dropdown dropdown-animate" data-toggle="hover">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Application
                </a>
                                        <div class="dropdown-menu dropdown-menu-arrow p-lg-0">

                                            <div class="p-lg-4">
                                                <div class="dropdown dropdown-animate dropdown-submenu" data-toggle="hover">
                                                    <a href="#" class="dropdown-item dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Project
                      </a>
                                                    <div class="dropdown-menu"><a class="dropdown-item" href="../../application/project/card-listing.html">
                                                        Card listing
                        </a>
                                                        <a class="dropdown-item" href="../../application/project/table-listing.html">
                                                            Table listing
                        </a>
                                                        <a class="dropdown-item" href="../../application/project/overview.html">
                                                            Overview
                        </a>
                                                        <a class="dropdown-item" href="../../application/project/create-new.html">
                                                            Create new
                        </a>
                                                    </div>
                                                </div>
                                                <div class="dropdown dropdown-animate dropdown-submenu" data-toggle="hover">
                                                    <a href="#" class="dropdown-item dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Task
                      </a>
                                                    <div class="dropdown-menu"><a class="dropdown-item" href="../../application/task/table-listing.html">
                                                        Table listing
                        </a>
                                                        <a class="dropdown-item" href="../../application/task/kanban-board.html">
                                                            Kanban board
                        </a>
                                                        <a class="dropdown-item" href="../../application/task/create-new.html">
                                                            Create new
                        </a>
                                                    </div>
                                                </div>
                                                <div class="dropdown dropdown-animate dropdown-submenu" data-toggle="hover">
                                                    <a href="#" class="dropdown-item dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        User
                      </a>
                                                    <div class="dropdown-menu"><a class="dropdown-item" href="../../application/user/card-listing.html">
                                                        Card listing
                        </a>
                                                        <a class="dropdown-item" href="../../application/user/table-listing.html">
                                                            Table listing
                        </a>
                                                        <a class="dropdown-item" href="../../application/user/profile.html">
                                                            Profile
                        </a>
                                                    </div>
                                                </div>
                                                <div class="dropdown dropdown-animate dropdown-submenu" data-toggle="hover">
                                                    <a href="#" class="dropdown-item dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Authentication
                      </a>
                                                    <div class="dropdown-menu"><a class="dropdown-item" href="../../application/authentication/login.html">
                                                        Login
                        </a>
                                                        <a class="dropdown-item" href="../../application/authentication/register.html">
                                                            Register
                        </a>
                                                        <a class="dropdown-item" href="../../application/authentication/recover.html">
                                                            Recover
                        </a>
                                                    </div>
                                                </div>
                                                <div class="dropdown dropdown-animate dropdown-submenu" data-toggle="hover">
                                                    <a href="#" class="dropdown-item dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Account
                      </a>
                                                    <div class="dropdown-menu"><a class="dropdown-item" href="../../application/account/profile.html">
                                                        Profile
                        </a>
                                                        <a class="dropdown-item" href="../../application/account/settings.html">
                                                            Settings
                        </a>
                                                        <a class="dropdown-item" href="../../application/account/billing.html">
                                                            Billing
                        </a>
                                                        <a class="dropdown-item" href="../../application/account/notifications.html">
                                                            Notifications
                        </a>
                                                        <a class="dropdown-item" href="../../application/account/addresses.html">
                                                            Addresses
                        </a>
                                                    </div>
                                                </div>
                                                <div class="dropdown dropdown-animate dropdown-submenu" data-toggle="hover">
                                                    <a href="#" class="dropdown-item dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Shop
                      </a>
                                                    <div class="dropdown-menu"><a class="dropdown-item" href="../../application/shop/card-listing.html">
                                                        Card listing
                        </a>
                                                        <a class="dropdown-item" href="../../application/shop/table-listing.html">
                                                            Table listing
                        </a>
                                                        <a class="dropdown-item" href="../../application/shop/product.html">
                                                            Product
                        </a>
                                                        <a class="dropdown-item" href="../../application/shop/orders.html">
                                                            Orders
                        </a>
                                                        <a class="dropdown-item" href="../../application/shop/order-description.html">
                                                            Order description
                        </a>
                                                        <a class="dropdown-item" href="../../application/shop/cart.html">
                                                            Cart
                        </a>
                                                        <a class="dropdown-item" href="../../application/shop/sellers.html">
                                                            Sellers
                        </a>
                                                        <a class="dropdown-item" href="../../application/shop/invoices.html">
                                                            Invoices
                        </a>
                                                        <a class="dropdown-item" href="../../application/shop/invoice-description.html">
                                                            Invoice description
                        </a>
                                                    </div>
                                                </div>
                                                <div class="dropdown dropdown-animate dropdown-submenu" data-toggle="hover">
                                                    <a href="#" class="dropdown-item dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Utility
                      </a>
                                                    <div class="dropdown-menu"><a class="dropdown-item" href="../../application/utility/error-404.html">
                                                        Error 404
                        </a>
                                                        <a class="dropdown-item" href="../../application/utility/error-500.html">
                                                            Error 500
                        </a>
                                                        <a class="dropdown-item" href="../../application/utility/maintenance-mode.html">
                                                            Maintenance mode
                        </a>
                                                        <a class="dropdown-item" href="../../application/utility/faq.html">
                                                            Faq
                        </a>
                                                        <a class="dropdown-item" href="../../application/utility/topic.html">
                                                            Topic
                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="dropdown-menu-links rounded-bottom delimiter-top p-lg-4">
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <a href="../../application/calendar.html" class="dropdown-item">Calendar</a>
                                                        <a href="../../application/timeline.html" class="dropdown-item">Timeline</a>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <a href="../../application/task/kanban-board.html" class="dropdown-item">Kanban board</a>
                                                        <a href="../../application/google-map.html" class="dropdown-item">Google map</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="../../application/widgets.html">
                                            Widgets
                                    </a>
                                    </li>
                                    <li class="nav-item dropdown dropdown-animate" data-toggle="hover">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Docs</a>
                                        <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg dropdown-menu-arrow p-0">
                                            <ul class="list-group list-group-flush">
                                                <li>
                                                    <a href="../../docs/index.html" class="list-group-item list-group-item-action" role="button">
                                                        <div class="media d-flex align-items-center">

                                                            <div class="media-body ml-3">
                                                                <h6 class="mb-1">Documentation</h6>
                                                                <p class="mb-0">Awesome section examples for any scenario.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="../../docs/components/index.html" class="list-group-item list-group-item-action" role="button">
                                                        <div class="media d-flex align-items-center">


                                                            <div class="media-body ml-3">
                                                                <h6 class="mb-1">Components</h6>
                                                                <p class="mb-0">Awesome section examples for any scenario.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div class="dropdown-menu-links rounded-bottom delimiter-top p-4">
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <a href="../../docs/getting-started/installation.html" class="dropdown-item">Installation</a>
                                                        <a href="../../docs/getting-started/file-structure.html" class="dropdown-item">File structure</a>
                                                        <a href="../../docs/getting-started/build-tools.html" class="dropdown-item">Build tools</a>
                                                        <a href="../../docs/getting-started/customization.html" class="dropdown-item">Customization</a>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <a href="../../docs/getting-started/plugins.html" class="dropdown-item">Using plugins</a>
                                                        <a href="../../docs/components/index.html" class="dropdown-item">Components</a>
                                                        <a href="../../docs/plugins/animate.html" class="dropdown-item">Plugins</a>
                                                        <a href="../../docs/support.html" class="dropdown-item">Support</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="border-top opacity-2 my-2"></li>
                                    <li class="nav-item d-lg-none">
                                        <a class="nav-link" href="../../docs/index.html">
                                            Docs
                                    </a>
                                    </li>
                                    <li class="nav-item d-lg-none">
                                        <a class="nav-link" href="../../application/authentication/register.html">
                                            Register
                                    </a>
                                    </li>
                                    <li class="nav-item d-lg-none">
                                        <a class="nav-link" href="../../application/authentication/login.html">
                                            Sign in
                                    </a>
                                    </li>
                                </ul>
                                <ul class="navbar-nav ml-lg-auto align-items-center d-none d-lg-flex">
                                    <li class="nav-item">
                                        <a href="#" class="nav-link nav-link-icon sidenav-toggler active" data-action="sidenav-pin" data-target="#sidenav-main"><i class="far fa-bars"></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link nav-link-icon" data-action="omnisearch-open" data-target="#omnisearch"><i class="far fa-search"></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#modal-chat" class="nav-link nav-link-icon" data-toggle="modal"><i class="far fa-comment-alt"></i></a>
                                    </li>
                                    <li class="nav-item dropdown dropdown-animate">
                                        <a class="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="far fa-bell"></i></a>
                                        <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg dropdown-menu-arrow p-0">
                                            <div class="py-3 px-3">
                                                <h5 class="heading h6 mb-0">Notifications</h5>
                                            </div>
                                            <div class="list-group list-group-flush">
                                                <a href="#" class="list-group-item list-group-item-action">
                                                    <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="2 hrs ago" data-original-title="" title="">
                                                        <div>
                                                            <span class="avatar bg-primary text-white rounded-circle">AM</span>
                                                        </div>
                                                        <div class="flex-fill ml-3">
                                                            <div class="h6 text-sm mb-0">Alex Michael <small class="float-right text-muted">2 hrs ago</small></div>
                                                            <p class="text-sm lh-140 mb-0">
                                                                Some quick example text to build on the card title.
                                                        </p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action">
                                                    <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="3 hrs ago" data-original-title="" title="">
                                                        <div>
                                                            <span class="avatar bg-warning text-white rounded-circle">SW</span>
                                                        </div>
                                                        <div class="flex-fill ml-3">
                                                            <div class="h6 text-sm mb-0">Sandra Wayne <small class="float-right text-muted">3 hrs ago</small></div>
                                                            <p class="text-sm lh-140 mb-0">
                                                                Some quick example text to build on the card title.
                                                        </p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action">
                                                    <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="5 hrs ago" data-original-title="" title="">
                                                        <div>
                                                            <span class="avatar bg-info text-white rounded-circle">JM</span>
                                                        </div>
                                                        <div class="flex-fill ml-3">
                                                            <div class="h6 text-sm mb-0">Jason Miller <small class="float-right text-muted">5 hrs ago</small></div>
                                                            <p class="text-sm lh-140 mb-0">
                                                                Some quick example text to build on the card title.
                                                        </p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action">
                                                    <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="2 hrs ago" data-original-title="" title="">
                                                        <div>
                                                            <span class="avatar bg-dark text-white rounded-circle">MJ</span>
                                                        </div>
                                                        <div class="flex-fill ml-3">
                                                            <div class="h6 text-sm mb-0">Mike Thomson <small class="float-right text-muted">2 hrs ago</small></div>
                                                            <p class="text-sm lh-140 mb-0">
                                                                Some quick example text to build on the card title.
                                                        </p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action">
                                                    <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="3 hrs ago" data-original-title="" title="">
                                                        <div>
                                                            <span class="avatar bg-primary text-white rounded-circle">RN</span>
                                                        </div>
                                                        <div class="flex-fill ml-3">
                                                            <div class="h6 text-sm mb-0">Richard Nixon <small class="float-right text-muted">3 hrs ago</small></div>
                                                            <p class="text-sm lh-140 mb-0">
                                                                Some quick example text to build on the card title.
                                                        </p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="py-3 text-center">
                                                <a href="#" class="link link-sm link--style-3">View all notifications</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown dropdown-animate">
                                        <a class="nav-link pr-lg-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <div class="media media-pill align-items-center">
                                                <span class="avatar rounded-circle">
                                                    <img alt="Image placeholder" src="../../assets/img/theme/light/team-4-800x800.jpg" />
                                                </span>
                                                <div class="ml-2 d-none d-lg-block">
                                                    <span class="mb-0 text-sm  font-weight-bold">John Snow</span>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right dropdown-menu-arrow">
                                            <h6 class="dropdown-header px-0">Hi, John!</h6>
                                            <a href="#!" class="dropdown-item">
                                                <i class="far fa-user"></i>
                                                <span>My profile</span>
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                <i class="far fa-cog"></i>
                                                <span>Settings</span>
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                <i class="far fa-credit-card"></i>
                                                <span>Billing</span>
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                <i class="far fa-tasks"></i>
                                                <span>Activity</span>
                                            </a>
                                            <div class="dropdown-divider"></div>
                                            <a href="#!" class="dropdown-item">
                                                <i class="far fa-sign-out-alt"></i>
                                                <span>Logout</span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav >
                </div >
                <div class="page-content">
                    <div class="page-title">
                        <div class="row justify-content-between align-items-center">
                            <div class="col-md-6 d-flex align-items-center justify-content-between justify-content-md-start mb-3 mb-md-0">

                                <div class="d-inline-block">
                                    <h5 class="h4 d-inline-block font-weight-400 mb-0 text-white">Application UI Design</h5>
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
                                <li class="nav-item dropdown border-right">
                                    <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img alt="Image placeholder" src="../../assets/img/icons/flags/ro.svg" />
                                        <span class="h6 text-sm mb-0">RO</span>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                                        <a href="#" class="dropdown-item"><img alt="Image placeholder" src="../../assets/img/icons/flags/es.svg" class="mr-2" />Spanish</a>
                                        <a href="#" class="dropdown-item"><img alt="Image placeholder" src="../../assets/img/icons/flags/us.svg" class="mr-2" />English</a>
                                        <a href="#" class="dropdown-item"><img alt="Image placeholder" src="../../assets/img/icons/flags/gr.svg" class="mr-2" />Greek</a>
                                    </div>
                                </li>
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

        </div>
    );
}

export default Home;