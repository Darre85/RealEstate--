import React from "react";

const DetailSix = () => {
  return (
    <div
      class="rn-popup-modal share-modal-wrapper modal fade"
      id="shareModal"
      tabindex="-1"
      aria-hidden="true"
    >
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      >
      
      </button>
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content share-wrapper">
          <div class="modal-header share-area">
            <h5 class="modal-title">Share this NFT</h5>
          </div>
          <div class="modal-body">
            <ul class="social-share-default">
              <li>
                <a href="#">
                  <span class="icon">
                  
                  </span>
                  <span class="text">facebook</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="icon">
                
                  </span>
                  <span class="text">twitter</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="icon">
                   
                  </span>
                  <span class="text">linkedin</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="icon">
                 
                  </span>
                  <span class="text">instagram</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="icon">
                 
                  </span>
                  <span class="text">youtube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSix;
