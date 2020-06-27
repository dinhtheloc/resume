import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Footer() {
    return (

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
    );
}

export default Footer;
