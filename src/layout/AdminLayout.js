import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import Home from '../views/home/Home';
import Project from '../views/project/Project';


function AdminLayout() {
    const isShow = useSelector(state => state.navigation.isShow);
    const dispatch = useDispatch();

    const changeIsShow = () => {
        dispatch({
            type: 'TOGGLE_NAV'
        })
    }

    return (

        <Router>
            <div className="application application-offset ready sidenav-pinned">
                <div className="container-fluid container-application">
                    <Nav></Nav>
                    <div className="main-content position-relative">
                        <nav className="navbar navbar-main navbar-expand-lg navbar-dark bg-primary navbar-border show" id="navbar-main">
                            <div className="container-fluid">

                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="navbar-user d-lg-none ml-auto">
                                    <ul className="navbar-nav flex-row align-items-center">
                                        <li className="nav-item">
                                            <a href="#" className={`nav-link nav-link-icon sidenav-toggler ${isShow ? 'active' : ''}`} onClick={() => changeIsShow()}>
                                                <i className="fas fa-bars"></i></a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link nav-link-icon">
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
                                            <Link className="nav-link pl-lg-0" to="/">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link pl-lg-0" to="/project">
                                                Projects
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className="navbar-nav ml-lg-auto align-items-center d-none d-lg-flex">
                                        <li className="nav-item">
                                            <a href="#" className={`nav-link nav-link-icon sidenav-toggler ${isShow ? 'active' : ''}`}
                                                onClick={() => changeIsShow()}
                                            ><i className="fas fa-bars"></i></a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link nav-link-icon" data-action="omnisearch-open" data-target="#omnisearch"><i className="fas fa-search"></i></a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </nav >

                        <Switch>
                            <Route path="/project">
                                <Project />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>

                        <Footer></Footer>

                    </div >

                </div >

            </div >
        </Router>
    );

}

export default AdminLayout;
