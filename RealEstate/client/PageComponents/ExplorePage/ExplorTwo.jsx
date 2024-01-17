import React from "react";

const ExplorTwo = () => {
  return (
    <div className="rn-product-area rn-section-gapTop masonary-wrapper-activation">
      <div className="container">
        <div className="row mb--30 align-items-center">
          <div className="col-lg-4">
            <div className="section-title">
              <h3 className="title mb--0">Explore Product</h3>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="button-group isotop-filter filters-button-group d-flex justify-content-start justify-content-lg-end mt_md--30 mt_sm--30">
              <button data-filter="*" className="is-checked">
                <span className="filter-text">All Items</span>
              </button>
              <button data-filter=".cat--1">
                <span className="filter-text">Art</span>
              </button>
              <button data-filter=".cat--2">
                <span className="filter-text">Music</span>
              </button>
              <button data-filter=".cat--3">
                <span className="filter-text">Video</span>
              </button>
              <button data-filter=".cat--4">
                <span className="filter-text">Collectable</span>
              </button>
              <button data-filter=".cat--5">
                <span className="filter-text">Highest</span>
              </button>
              <button data-filter=".cat--6">
                <span className="filter-text">Lowest</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorTwo;
