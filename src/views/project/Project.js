import React, { useEffect } from 'react';

import styles from './style.module.scss';


function Project() {

  return (
    <div className="page-content">
      <div className="page-title">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-12 mb-3 mb-md-0">
            <h5 className="h3 font-weight-400 mb-0 text-white">Projects</h5>
            <span className="text-sm text-white opacity-8">
              Below are some bullshit that I do in my free time.</span>
          </div>
        </div>
      </div>


      <div className="row">

        <div class="col-md-4">
          <div class="card card-sm rounded-top-left rounded-bottom-right lift lift-lg">
            <img class="card-img-top rounded-top-left" src="/img/instagram-profile.png" alt="..." />
            <div class="card-body">
              <h2 class="mb-2">
                Instagram profile
                </h2>
              <p class="font-size-sm mb-4">
                based on instagram web application. Written by the reactjs framework.
                </p>
              <a class="stretched-link" target="_blank" href="https://cayghe-621b3.web.app/"></a>
            </div>
          </div>
        </div>
        {/* 
        <div class="col-md-4">
          <div class="card card-sm rounded-top-left rounded-bottom-right lift lift-lg">
            <img class="card-img-top rounded-top-left" src="https://goodkit.goodthemes.co/assets/img/blog/post-header-10.png" alt="..." />
            <div class="card-body">
              <h2 class="mb-2">
                Design component systems, not pages.
                </h2>
              <p class="font-size-sm mb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
                </p>
              <a class="stretched-link" href="blog-post.html"></a>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card card-sm rounded-top-left rounded-bottom-right lift lift-lg">
            <img class="card-img-top rounded-top-left" src="https://goodkit.goodthemes.co/assets/img/blog/post-header-10.png" alt="..." />
            <div class="card-body">
              <h2 class="mb-2">
                Design component systems, not pages.
                </h2>
              <p class="font-size-sm mb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
                </p>
              <a class="stretched-link" href="blog-post.html"></a>
            </div>
          </div>
        </div> */}

      </div>

    </div >
  );
}

export default Project;