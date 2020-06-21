import React from 'react';


function Nav() {
    return (
        <div className="sidenav show" id="sidenav-main">
            <div className="sidenav-header d-flex align-items-center">
                <a className="navbar-brand" href="../../index.html">
                    <h3 className="text-white font-weight-bold">Resume</h3>
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
                        <img alt="Image placeholder"
                            src="https://instagram.fhan2-3.fna.fbcdn.net/v/t51.2885-19/s320x320/96292822_244805370090236_7062501899211112448_n.jpg?_nc_ht=instagram.fhan2-3.fna.fbcdn.net&_nc_ohc=kAlED3kvz-4AX9aKVge&oh=2ecd67c84b4bb2ff9e5b8ec6c9526a56&oe=5EF797E4"
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
                <a href="../../application/home.html" className="btn btn-square text-sm active">
                    <span className="btn-inner--icon d-block"><i className="fas fa-home fa-2x"></i></span>
                    <span className="btn-inner--icon d-block pt-2">Home</span>
                </a>
                <a href="../../application/project/card-listing.html" className="btn btn-square text-sm">
                    <span className="btn-inner--icon d-block">
                        <i className="fas fa-project-diagram fa-2x"></i>
                    </span>
                    <span className="btn-inner--icon d-block pt-2">Projects</span>
                </a>
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
