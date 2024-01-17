import React from "react";
import Link from "next/link";

const Collection = ({ housing, rental, farmhouse, office }) => {
  const topCollection = [
    {
      name: "Housing",
      link: "/housing",
      item: housing,
    },
    {
      name: "Office",
      link: "/office",
      item: office,
    },
    {
      name: "Farmhouse",
      link: "/farmhouse",
      item: farmhouse,
    },
    {
      name: "Rental",
      link: "/rental",
      item: rental,
    },
  ];

  return (
    <div className="rn-collection-area rn-section-gapTop">
      <div className="container">
        <div className="row mb--50 align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <h3
              className="title mb--0"
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              Top Collection
            </h3>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
            <div
              className="view-more-btn text-start text-sm-end"
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              <a className="btn-transparent" href="#">
                VIEW ALL
              </a>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default Collection;
