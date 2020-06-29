import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import { useSelector , useDispatch} from 'react-redux';

function Nav() {
    const isShow = useSelector(state => state.navigation.isShow);

    const dispatch = useDispatch();

    const changeIsShow = () => {
        dispatch({
            type: 'TOGGLE_NAV'
        })
    }

    return (
        <div className={`sidenav ${isShow ? 'show' : ''}`} id="sidenav-main">
            <div className="sidenav-header d-flex align-items-center">
                <a className="navbar-brand" href="../../index.html">
                    <h3 className="text-white font-weight-bold">Resume</h3>
                </a>
                <div className="ml-auto">
                    <div className={`sidenav-toggler sidenav-toggler-dark d-md-none ${isShow ? 'active' : ''}`} onClick={ () => changeIsShow() }>
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
                        <img alt="Image placeholder"
                            src="/img/avatar.jpg"
                        />
                    </a>
                    <div className="mt-4">
                        <h5 className="mb-0 text-white">Dinh The Loc</h5>
                        <span className="d-block text-sm text-white opacity-8 mb-3">Frontend  Developer</span>
                        <a href="mailto:locdtptit@gmail.com" target="_blank"
                            className="btn btn-sm btn-white btn-icon rounded-pill shadow hover-translate-y-n3">
                            <span className="btn-inner--icon"><i className="far fa-envelope"></i></span>
                            <span className="btn-inner--text">locdtptit@gmail.com</span>
                        </a>
                    </div>
                </div>
                <div className="w-100 mt-4 actions d-flex justify-content-around">
                    <a href="https://www.linkedin.com/in/loc-dinh-the-117031184/" target="_blank" className="action-item action-item-lg text-white">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.facebook.com/kagebunshinnojusu" target="_blank" className="action-item action-item-lg text-white">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://github.com/dinhtheloc" target="_blank" className="action-item action-item-lg text-white">
                        <i className="fab fa-github-alt"></i>
                    </a>
                </div>
            </div>
            <div className="nav-application clearfix">
                <NavLink className="btn btn-square text-sm" exact activeClassName="active" to="/">
                    <span className="btn-inner--icon d-block"><i className="fas fa-home fa-2x"></i></span>
                    <span className="btn-inner--icon d-block pt-2">Home</span>
                </NavLink>

                <NavLink activeClassName="active" to="/project" className="btn btn-square text-sm">
                    <span className="btn-inner--icon d-block">
                        <i className="fas fa-project-diagram fa-2x"></i>
                    </span>
                    <span className="btn-inner--icon d-block pt-2">Projects</span>
                </NavLink>
            </div>
            <div className="card bg-gradient-info">
                <div className="card-header">
                    <h5 className="text-white mb-0">Objective</h5>
                </div>
                <div className="card-body">
                    <p className="text-white mb-4">Take advantages of soft & technical skills and become a professional developer.</p>
                </div>
            </div>
        </div>

    );
}

export default Nav;
