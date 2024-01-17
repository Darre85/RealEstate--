"use strict";
(() => {
var exports = {};
exports.id = 702;
exports.ids = [702];
exports.modules = {

/***/ 9315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_detail)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./PageComponents/Components/index.js + 9 modules
var Components = __webpack_require__(1010);
;// CONCATENATED MODULE: ./PageComponents/DetailPage/DetailOne.jsx


const DetailOne = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        class: "rn-breadcrumb-inner ptb--30",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            class: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                class: "row align-items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        class: "col-lg-6 col-md-6 col-12",
                        children: /*#__PURE__*/ jsx_runtime.jsx("h5", {
                            class: "title text-center text-md-start",
                            children: "Product Details"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        class: "col-lg-6 col-md-6 col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            class: "breadcrumb-list",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    class: "item",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "index.html",
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    class: "separator",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        class: "feather-chevron-right"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    class: "item current",
                                    children: "Product Details"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const DetailPage_DetailOne = (DetailOne);

;// CONCATENATED MODULE: external "react-countdown"
const external_react_countdown_namespaceObject = require("react-countdown");
var external_react_countdown_default = /*#__PURE__*/__webpack_require__.n(external_react_countdown_namespaceObject);
;// CONCATENATED MODULE: ./PageComponents/DetailPage/DetailTwo.jsx




const DetailTwo = ({ property , parsedReviews , setLikeReviews , likeReviews , likeReviewCall , buyingProperty , address , isLoading , buyLoading  })=>{
    const timeComment = new Date(new Date() - Math.random() * 1e12);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        class: "product-details-area rn-section-gapTop",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            class: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                class: "row g-5",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        class: "col-lg-7 col-md-12 col-sm-12",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "product-tab-wrapper rbt-sticky-top-adjust",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                class: "pd-tab-inner",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        class: "nav rn-pd-nav rn-pd-rt-content nav-pills",
                                        id: "v-pills-tab",
                                        role: "tablist",
                                        "aria-orientation": "vertical",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                class: "nav-link active",
                                                id: "v-pills-home-tab",
                                                "data-bs-toggle": "pill",
                                                "data-bs-target": "#v-pills-home",
                                                type: "button",
                                                role: "tab",
                                                "aria-controls": "v-pills-home",
                                                "aria-selected": "true",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "rn-pd-sm-thumbnail",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "/portfolio/portfolio-01.jpg",
                                                        alt: "Nft_Profile"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                class: "nav-link",
                                                id: "v-pills-profile-tab",
                                                "data-bs-toggle": "pill",
                                                "data-bs-target": "#v-pills-profile",
                                                type: "button",
                                                role: "tab",
                                                "aria-controls": "v-pills-profile",
                                                "aria-selected": "false",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "rn-pd-sm-thumbnail",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "/portfolio/portfolio-02.jpg",
                                                        alt: "Nft_Profile"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                class: "nav-link",
                                                id: "v-pills-messages-tab",
                                                "data-bs-toggle": "pill",
                                                "data-bs-target": "#v-pills-messages",
                                                type: "button",
                                                role: "tab",
                                                "aria-controls": "v-pills-messages",
                                                "aria-selected": "false",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "rn-pd-sm-thumbnail",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "/portfolio/portfolio-03.jpg",
                                                        alt: "Nft_Profile"
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        class: "tab-content rn-pd-content",
                                        id: "v-pills-tabContent",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                class: "tab-pane fade show active",
                                                id: "v-pills-home",
                                                role: "tabpanel",
                                                "aria-labelledby": "v-pills-home-tab",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    class: "rn-pd-thumbnail",
                                                    children: isLoading ? /*#__PURE__*/ jsx_runtime.jsx(Components/* Loader */.aN, {}) : /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: property?.image,
                                                        alt: "Nft_Profile"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                class: "tab-pane fade",
                                                id: "v-pills-profile",
                                                role: "tabpanel",
                                                "aria-labelledby": "v-pills-profile-tab",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    class: "rn-pd-thumbnail",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "/portfolio/portfolio-02.jpg",
                                                        alt: "Nft_Profile"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                class: "tab-pane fade",
                                                id: "v-pills-messages",
                                                role: "tabpanel",
                                                "aria-labelledby": "v-pills-messages-tab",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    class: "rn-pd-thumbnail",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "/portfolio/portfolio-03.jpg",
                                                        alt: "Nft_Profile"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        class: "col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            class: "rn-pd-content-area",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    class: "pd-title-area",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                                            class: "title",
                                            children: [
                                                property?.title?.slice(0, 25),
                                                ".."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            class: "pd-react-area",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    class: "heart-count",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: parsedReviews?.length
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    class: "count",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        class: "share-btn share-btn-activation dropdown",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                class: "icon",
                                                                type: "button",
                                                                "data-bs-toggle": "dropdown",
                                                                "aria-expanded": "false",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                    viewBox: "0 0 14 4",
                                                                    fill: "none",
                                                                    width: "16",
                                                                    height: "16",
                                                                    class: "sc-bdnxRM sc-hKFxyN hOiKLt",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                        "fill-rule": "evenodd",
                                                                        "clip-rule": "evenodd",
                                                                        d: "M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z",
                                                                        fill: "currentColor"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                class: "share-btn-setting dropdown-menu dropdown-menu-end",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                        type: "button",
                                                                        class: "btn-setting-text share-text",
                                                                        "data-bs-toggle": "modal",
                                                                        "data-bs-target": "#shareModal",
                                                                        children: "Share"
                                                                    }),
                                                                    property?.owner == address && /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                        type: "button",
                                                                        class: "btn-setting-text report-text",
                                                                        "data-bs-toggle": "modal",
                                                                        "data-bs-target": "#reportModal",
                                                                        children: "Update Price"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h6", {
                                    class: "title-name",
                                    children: [
                                        "#",
                                        property?.productID,
                                        " Portal , Info bellow"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    class: "catagory-collection",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            class: "catagory",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    children: [
                                                        "Catagory ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            class: "color-body",
                                                            children: "10% royalties"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    class: "top-seller-inner-one",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        class: "top-seller-wrapper",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                class: "thumbnail",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                        src: "/client/client-1.png",
                                                                        alt: "Nft_Profile"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                class: "top-seller-content",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                        class: "name",
                                                                        children: "Only 10% Own"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            class: "collection",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "Collections"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    class: "top-seller-inner-one",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        class: "top-seller-wrapper",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                class: "thumbnail",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                        src: "/client/client-2.png",
                                                                        alt: "Nft_Profile"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                class: "top-seller-content",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                        class: "name",
                                                                        children: property?.category
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    class: "rn-bid-details",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            class: "tab-wrapper-one",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("nav", {
                                                    class: "tab-button-one",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        class: "nav nav-tabs",
                                                        id: "nav-tab",
                                                        role: "tablist",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                class: "nav-link",
                                                                id: "nav-home-tab",
                                                                "data-bs-toggle": "tab",
                                                                "data-bs-target": "#nav-home",
                                                                type: "button",
                                                                role: "tab",
                                                                "aria-controls": "nav-home",
                                                                "aria-selected": "false",
                                                                children: "Comments"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                class: "nav-link active",
                                                                id: "nav-profile-tab",
                                                                "data-bs-toggle": "tab",
                                                                "data-bs-target": "#nav-profile",
                                                                type: "button",
                                                                role: "tab",
                                                                "aria-controls": "nav-profile",
                                                                "aria-selected": "true",
                                                                children: "Details"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                class: "nav-link",
                                                                id: "nav-contact-tab",
                                                                "data-bs-toggle": "tab",
                                                                "data-bs-target": "#nav-contact",
                                                                type: "button",
                                                                role: "tab",
                                                                "aria-controls": "nav-contact",
                                                                "aria-selected": "false",
                                                                children: "Users interest"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    class: "tab-content rn-bid-content",
                                                    id: "nav-tabContent",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            class: "tab-pane fade",
                                                            id: "nav-home",
                                                            role: "tabpanel",
                                                            "aria-labelledby": "nav-home-tab",
                                                            children: parsedReviews?.map((review, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    onClick: (e)=>setLikeReviews({
                                                                            ...likeReviews,
                                                                            reviewIndex: review.reviewIndex
                                                                        }),
                                                                    class: "top-seller-inner-one",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        class: "top-seller-wrapper",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                class: "thumbnail",
                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                    href: "#",
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                        src: `/client/client-${i + 1}.png`,
                                                                                        alt: "Nft_Profile"
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                class: "top-seller-content",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                        children: [
                                                                                            review?.reviewer.slice(0, 35),
                                                                                            "... "
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        class: "react-area",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                                                onClick: ()=>likeReviewCall(),
                                                                                                viewBox: "0 0 17 16",
                                                                                                fill: "none",
                                                                                                width: "16",
                                                                                                height: "16",
                                                                                                class: "sc-bdnxRM sc-hKFxyN kBvkOu",
                                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                    d: "M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z",
                                                                                                    stroke: "currentColor",
                                                                                                    "stroke-width": "2"
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                                class: "number",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("strong", {
                                                                                                        children: [
                                                                                                            review?.likes,
                                                                                                            " "
                                                                                                        ]
                                                                                                    }),
                                                                                                    " (",
                                                                                                    i + 1 + 0.5,
                                                                                                    " hours ago)"
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                        class: "count-number",
                                                                                        children: [
                                                                                            review?.comment.slice(0, 70),
                                                                                            review?.comment.length >= 93 ? "..." : ""
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                }, i + 1))
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            class: "tab-pane fade show active",
                                                            id: "nav-profile",
                                                            role: "tabpanel",
                                                            "aria-labelledby": "nav-profile-tab",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                class: "rn-pd-bd-wrapper",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        class: "top-seller-inner-one",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                                class: "name-title",
                                                                                children: "Owner"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                class: "top-seller-wrapper",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                        class: "thumbnail",
                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                            href: "#",
                                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                                src: "/client/client-1.png",
                                                                                                alt: "Nft_Profile"
                                                                                            })
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                        class: "top-seller-content",
                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                            href: "#",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h6", {
                                                                                                class: "name",
                                                                                                children: [
                                                                                                    property?.owner?.slice(0, 20),
                                                                                                    ".."
                                                                                                ]
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        class: "rn-pd-sm-property-wrapper",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                class: "pd-property-inner",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                                        class: "pd-property-title",
                                                                                        children: " Title"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                        class: "color-white value",
                                                                                        children: property?.title
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                class: "pd-property-inner",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                                        class: "pd-property-title",
                                                                                        children: " Description"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                        class: "color-white value",
                                                                                        children: property?.description
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                class: "pd-property-inner",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                                        class: "pd-property-title",
                                                                                        children: " Address"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                        class: "color-white value",
                                                                                        children: property?.address
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                class: "pd-property-inner",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h6", {
                                                                                    class: "pd-property-title",
                                                                                    children: [
                                                                                        " ",
                                                                                        "Price 18 Decimal Points: ",
                                                                                        property?.price,
                                                                                        " Matic"
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                class: "pd-property-inner",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h6", {
                                                                                    class: "pd-property-title",
                                                                                    children: [
                                                                                        " ",
                                                                                        "Property ID: ",
                                                                                        property?.productID
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        class: "rn-pd-sm-property-wrapper",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                                class: "pd-property-title",
                                                                                children: "Catagory"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                class: "catagory-wrapper",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                    class: "pd-property-inner",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                            class: "color-body type",
                                                                                            children: "TYPE"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                            class: "color-white value ",
                                                                                            children: property?.category
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            class: "tab-pane fade",
                                                            id: "nav-contact",
                                                            role: "tabpanel",
                                                            "aria-labelledby": "nav-contact-tab",
                                                            children: parsedReviews?.map((interest, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    class: "top-seller-inner-one",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        class: "top-seller-wrapper",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                class: "thumbnail",
                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                    href: "#",
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                        src: `/client/client-${i + 1}.png`,
                                                                                        alt: "Nft_Profile"
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                class: "top-seller-content",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                        class: "count-number",
                                                                                        children: [
                                                                                            interest?.reviewer.slice(0, 40),
                                                                                            "..."
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                        children: [
                                                                                            i + 1,
                                                                                            " hours ago"
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                }, i + 1))
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            class: "place-bet-area",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    class: "rn-bet-create",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            class: "bid-list winning-bid",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                    class: "title",
                                                                    children: "Recent Comment"
                                                                }),
                                                                parsedReviews?.reverse().map((recentReview, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        class: "top-seller-inner-one",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            class: "top-seller-wrapper",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    class: "thumbnail",
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                        href: "#",
                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                            src: "/client/client-7.png",
                                                                                            alt: "Nft_Profile"
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                    class: "top-seller-content",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                            class: "heighest-bid",
                                                                                            children: [
                                                                                                recentReview?.reviewer.slice(0, 20),
                                                                                                "..."
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                            class: "count-number",
                                                                                            children: [
                                                                                                " ",
                                                                                                recentReview?.comment.length >= 50 ? `${recentReview?.comment.slice(0, 60)}...` : recentReview?.comment
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    })).slice(0, 1)
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            class: "bid-list left-bid",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                    class: "title",
                                                                    children: "Property Stats"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    class: " mt--15",
                                                                    "data-date": "2025-12-09",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            class: "countdown-container days",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                    class: "countdown-value",
                                                                                    children: "Price: "
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                    class: "countdown-heading",
                                                                                    children: [
                                                                                        property?.price,
                                                                                        " MATIC"
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            class: "countdown-container hours",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                    class: "countdown-value",
                                                                                    children: "Comments: "
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                    class: "countdown-heading",
                                                                                    children: parsedReviews?.length
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            class: "countdown-container minutes",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                    class: "countdown-value",
                                                                                    children: " Interest: "
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                    class: "countdown-heading",
                                                                                    children: parsedReviews?.length
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            class: "countdown-container seconds",
                                                                            children: [
                                                                                "Time Left: ",
                                                                                /*#__PURE__*/ jsx_runtime.jsx((external_react_countdown_default()), {
                                                                                    date: Date.now() + 23455000
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                    onClick: ()=>buyingProperty(),
                                                    type: "button",
                                                    class: "btn btn-primary-alta mt--30",
                                                    children: buyLoading ? /*#__PURE__*/ jsx_runtime.jsx(Components/* Loader */.aN, {}) : /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                                        children: address?.toLowerCase() == property?.owner.toLowerCase() ? "You can't buy your owned Property" : `${property?.price} MATIC Buy Property`
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                    type: "button",
                                                    class: "btn btn-primary-alta mt--30",
                                                    "data-bs-toggle": "modal",
                                                    "data-bs-target": "#placebidModal",
                                                    children: "Add Comment"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const DetailPage_DetailTwo = (DetailTwo);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./PageComponents/DetailPage/DetailThree.jsx



const DetailThree = ({ properties  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        class: "rn-new-items rn-section-gapTop",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            class: "container",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: "row mb--30 align-items-center",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        class: "col-12",
                        children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                            class: "title mb--0",
                            "data-sal-delay": "150",
                            "data-sal": "slide-up",
                            "data-sal-duration": "800",
                            children: "Recent View"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: "row g-5",
                    children: properties.map((property, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            "data-sal": "",
                            "data-sal-delay": "150",
                            "data-sal-duration": "800",
                            class: "col-5 col-lg-4 col-md-6 col-sm-6 col-12",
                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: `/detail?property=${property.productID}`,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    class: "product-style-one no-overlay",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            class: "card-thumbnail",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: property.image,
                                                    alt: "NFT_portfolio"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            class: "product-share-wrapper",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                class: "profile-share",
                                                children: [
                                                    property.reviewers.map((el, i)=>/*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            class: "avatar",
                                                            "data-tooltip": `${el.slice(0, 15)}..`,
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                src: `/client/client-${i + 1}.png`,
                                                                alt: "Nft_Profile"
                                                            })
                                                        })),
                                                    property.reviewers.length !== 0 && /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        class: "more-author-text",
                                                        href: "#",
                                                        children: "Interested Users"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                class: "product-name",
                                                children: property.title.length >= 25 ? `${property.title.slice(0, 22)}...` : property.title
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            class: "latest-bid",
                                            children: [
                                                "Category: ",
                                                property.category
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            class: "bid-react-area",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    class: "last-bid",
                                                    children: [
                                                        property.price,
                                                        " MATIC"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    class: "react-area",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                            viewBox: "0 0 17 16",
                                                            fill: "none",
                                                            width: "16",
                                                            height: "16",
                                                            class: "sc-bdnxRM sc-hKFxyN kBvkOu",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                d: "M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z",
                                                                stroke: "currentColor",
                                                                "stroke-width": "2"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            class: "number",
                                                            children: property.reviewers.length
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }, i + 1))
                })
            ]
        })
    });
};
/* harmony default export */ const DetailPage_DetailThree = (DetailThree);

;// CONCATENATED MODULE: ./PageComponents/DetailPage/DetailFour.jsx


const DetailFour = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        class: "rn-new-items rn-section-gapTop",
        children: /*#__PURE__*/ _jsxs("div", {
            class: "container",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    class: "row mb--30 align-items-center",
                    children: /*#__PURE__*/ _jsx("div", {
                        class: "col-12",
                        children: /*#__PURE__*/ _jsx("h3", {
                            class: "title mb--0",
                            "data-sal-delay": "150",
                            "data-sal": "slide-up",
                            "data-sal-duration": "800",
                            children: "Related Item"
                        })
                    })
                }),
                /*#__PURE__*/ _jsxs("div", {
                    class: "row g-5",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            "data-sal": "slide-up",
                            "data-sal-delay": "150",
                            "data-sal-duration": "800",
                            class: "col-5 col-lg-4 col-md-6 col-sm-6 col-12",
                            children: /*#__PURE__*/ _jsxs("div", {
                                class: "product-style-one no-overlay",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        class: "card-thumbnail",
                                        children: /*#__PURE__*/ _jsx("a", {
                                            href: "product-details.html",
                                            children: /*#__PURE__*/ _jsx("img", {
                                                src: "/portfolio/portfolio-01.jpg",
                                                alt: "NFT_portfolio"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        class: "product-share-wrapper",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                class: "profile-share",
                                                children: [
                                                    /*#__PURE__*/ _jsx("a", {
                                                        href: "author.html",
                                                        class: "avatar",
                                                        "data-tooltip": "Jone lee",
                                                        children: /*#__PURE__*/ _jsx("img", {
                                                            src: "/client/client-1.png",
                                                            alt: "Nft_Profile"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("a", {
                                                        href: "author.html",
                                                        class: "avatar",
                                                        "data-tooltip": "Jone Due",
                                                        children: /*#__PURE__*/ _jsx("img", {
                                                            src: "/client/client-2.png",
                                                            alt: "Nft_Profile"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("a", {
                                                        href: "author.html",
                                                        class: "avatar",
                                                        "data-tooltip": "Nisat Tara",
                                                        children: /*#__PURE__*/ _jsx("img", {
                                                            src: "/client/client-3.png",
                                                            alt: "Nft_Profile"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("a", {
                                                        class: "more-author-text",
                                                        href: "#",
                                                        children: "9+ Place Bit."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                class: "share-btn share-btn-activation dropdown",
                                                children: [
                                                    /*#__PURE__*/ _jsx("button", {
                                                        class: "icon",
                                                        "data-bs-toggle": "dropdown",
                                                        "aria-expanded": "false",
                                                        children: /*#__PURE__*/ _jsx("svg", {
                                                            viewBox: "0 0 14 4",
                                                            fill: "none",
                                                            width: "16",
                                                            height: "16",
                                                            class: "sc-bdnxRM sc-hKFxyN hOiKLt",
                                                            children: /*#__PURE__*/ _jsx("path", {
                                                                "fill-rule": "evenodd",
                                                                "clip-rule": "evenodd",
                                                                d: "M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z",
                                                                fill: "currentColor"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        class: "share-btn-setting dropdown-menu dropdown-menu-end",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("button", {
                                                                type: "button",
                                                                class: "btn-setting-text share-text",
                                                                "data-bs-toggle": "modal",
                                                                "data-bs-target": "#shareModal",
                                                                children: "Share"
                                                            }),
                                                            /*#__PURE__*/ _jsx("button", {
                                                                type: "button",
                                                                class: "btn-setting-text report-text",
                                                                "data-bs-toggle": "modal",
                                                                "data-bs-target": "#reportModal",
                                                                children: "Report"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("a", {
                                        href: "product-details.html",
                                        children: /*#__PURE__*/ _jsx("span", {
                                            class: "product-name",
                                            children: "Preatent"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        class: "latest-bid",
                                        children: "Highest bid 1/20"
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        class: "bid-react-area",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                class: "last-bid",
                                                children: "0.244wETH"
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                class: "react-area",
                                                children: [
                                                    /*#__PURE__*/ _jsx("svg", {
                                                        viewBox: "0 0 17 16",
                                                        fill: "none",
                                                        width: "16",
                                                        height: "16",
                                                        class: "sc-bdnxRM sc-hKFxyN kBvkOu",
                                                        children: /*#__PURE__*/ _jsx("path", {
                                                            d: "M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z",
                                                            stroke: "currentColor",
                                                            "stroke-width": "2"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("span", {
                                                        class: "number",
                                                        children: "322"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            "data-sal": "slide-up",
                            "data-sal-delay": "200",
                            "data-sal-duration": "800",
                            class: "col-5 col-lg-4 col-md-6 col-sm-6 col-12",
                            children: /*#__PURE__*/ _jsxs("div", {
                                class: "product-style-one no-overlay",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        class: "card-thumbnail",
                                        children: /*#__PURE__*/ _jsx("a", {
                                            href: "product-details.html",
                                            children: /*#__PURE__*/ _jsx("img", {
                                                src: "/portfolio/portfolio-02.jpg",
                                                alt: "NFT_portfolio"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        class: "product-share-wrapper",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                class: "profile-share",
                                                children: [
                                                    /*#__PURE__*/ _jsx("a", {
                                                        href: "author.html",
                                                        class: "avatar",
                                                        "data-tooltip": "Jone lee",
                                                        children: /*#__PURE__*/ _jsx("img", {
                                                            src: "/client/client-4.png",
                                                            alt: "Nft_Profile"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("a", {
                                                        href: "author.html",
                                                        class: "avatar",
                                                        "data-tooltip": "Nira Ara",
                                                        children: /*#__PURE__*/ _jsx("img", {
                                                            src: "/client/client-5.png",
                                                            alt: "Nft_Profile"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("a", {
                                                        href: "author.html",
                                                        class: "avatar",
                                                        "data-tooltip": "Fatima Afrafy",
                                                        children: /*#__PURE__*/ _jsx("img", {
                                                            src: "/client/client-6.png",
                                                            alt: "Nft_Profile"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("a", {
                                                        class: "more-author-text",
                                                        href: "#",
                                                        children: "10+ Place Bit."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                class: "share-btn share-btn-activation dropdown",
                                                children: [
                                                    /*#__PURE__*/ _jsx("button", {
                                                        class: "icon",
                                                        "data-bs-toggle": "dropdown",
                                                        "aria-expanded": "false",
                                                        children: /*#__PURE__*/ _jsx("svg", {
                                                            viewBox: "0 0 14 4",
                                                            fill: "none",
                                                            width: "16",
                                                            height: "16",
                                                            class: "sc-bdnxRM sc-hKFxyN hOiKLt",
                                                            children: /*#__PURE__*/ _jsx("path", {
                                                                "fill-rule": "evenodd",
                                                                "clip-rule": "evenodd",
                                                                d: "M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z",
                                                                fill: "currentColor"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        class: "share-btn-setting dropdown-menu dropdown-menu-end",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("button", {
                                                                type: "button",
                                                                class: "btn-setting-text share-text",
                                                                "data-bs-toggle": "modal",
                                                                "data-bs-target": "#shareModal",
                                                                children: "Share"
                                                            }),
                                                            /*#__PURE__*/ _jsx("button", {
                                                                type: "button",
                                                                class: "btn-setting-text report-text",
                                                                "data-bs-toggle": "modal",
                                                                "data-bs-target": "#reportModal",
                                                                children: "Report"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("a", {
                                        href: "product-details.html",
                                        children: /*#__PURE__*/ _jsx("span", {
                                            class: "product-name",
                                            children: "Diamond Dog"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        class: "latest-bid",
                                        children: "Highest bid 5/11"
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        class: "bid-react-area",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                class: "last-bid",
                                                children: "0.892wETH"
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                class: "react-area",
                                                children: [
                                                    /*#__PURE__*/ _jsx("svg", {
                                                        viewBox: "0 0 17 16",
                                                        fill: "none",
                                                        width: "16",
                                                        height: "16",
                                                        class: "sc-bdnxRM sc-hKFxyN kBvkOu",
                                                        children: /*#__PURE__*/ _jsx("path", {
                                                            d: "M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z",
                                                            stroke: "currentColor",
                                                            "stroke-width": "2"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("span", {
                                                        class: "number",
                                                        children: "420"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            "data-sal": "slide-up",
                            "data-sal-delay": "250",
                            "data-sal-duration": "800",
                            class: "col-5 col-lg-4 col-md-6 col-sm-6 col-12",
                            children: /*#__PURE__*/ _jsxs("div", {
                                class: "product-style-one no-overlay",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        class: "card-thumbnail",
                                        children: /*#__PURE__*/ _jsx("a", {
                                            href: "product-details.html",
                                            children: /*#__PURE__*/ _jsx("img", {
                                                src: "/portfolio/portfolio-03.jpg",
                                                alt: "NFT_portfolio"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        class: "product-share-wrapper",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                class: "profile-share",
                                                children: [
                                                    /*#__PURE__*/ _jsx("a", {
                                                        href: "author.html",
                                                        class: "avatar",
                                                        "data-tooltip": "Jone lee",
                                                        children: /*#__PURE__*/ _jsx("img", {
                                                            src: "/client/client-1.png",
                                                            alt: "Nft_Profile"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("a", {
                                                        href: "author.html",
                                                        class: "avatar",
                                                        "data-tooltip": "Janin Ara",
                                                        children: /*#__PURE__*/ _jsx("img", {
                                                            src: "/client/client-8.png",
                                                            alt: "Nft_Profile"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("a", {
                                                        href: "author.html",
                                                        class: "avatar",
                                                        "data-tooltip": "Atif Islam",
                                                        children: /*#__PURE__*/ _jsx("img", {
                                                            src: "/client/client-9.png",
                                                            alt: "Nft_Profile"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("a", {
                                                        class: "more-author-text",
                                                        href: "#",
                                                        children: "10+ Place Bit."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                class: "share-btn share-btn-activation dropdown",
                                                children: [
                                                    /*#__PURE__*/ _jsx("button", {
                                                        class: "icon",
                                                        "data-bs-toggle": "dropdown",
                                                        "aria-expanded": "false",
                                                        children: /*#__PURE__*/ _jsx("svg", {
                                                            viewBox: "0 0 14 4",
                                                            fill: "none",
                                                            width: "16",
                                                            height: "16",
                                                            class: "sc-bdnxRM sc-hKFxyN hOiKLt",
                                                            children: /*#__PURE__*/ _jsx("path", {
                                                                "fill-rule": "evenodd",
                                                                "clip-rule": "evenodd",
                                                                d: "M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z",
                                                                fill: "currentColor"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        class: "share-btn-setting dropdown-menu dropdown-menu-end",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("button", {
                                                                type: "button",
                                                                class: "btn-setting-text share-text",
                                                                "data-bs-toggle": "modal",
                                                                "data-bs-target": "#shareModal",
                                                                children: "Share"
                                                            }),
                                                            /*#__PURE__*/ _jsx("button", {
                                                                type: "button",
                                                                class: "btn-setting-text report-text",
                                                                "data-bs-toggle": "modal",
                                                                "data-bs-target": "#reportModal",
                                                                children: "Report"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("a", {
                                        href: "product-details.html",
                                        children: /*#__PURE__*/ _jsx("span", {
                                            class: "product-name",
                                            children: "OrBid6"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        class: "latest-bid",
                                        children: "Highest bid 2/31"
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        class: "bid-react-area",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                class: "last-bid",
                                                children: "0.2128wETH"
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                class: "react-area",
                                                children: [
                                                    /*#__PURE__*/ _jsx("svg", {
                                                        viewBox: "0 0 17 16",
                                                        fill: "none",
                                                        width: "16",
                                                        height: "16",
                                                        class: "sc-bdnxRM sc-hKFxyN kBvkOu",
                                                        children: /*#__PURE__*/ _jsx("path", {
                                                            d: "M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z",
                                                            stroke: "currentColor",
                                                            "stroke-width": "2"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("span", {
                                                        class: "number",
                                                        children: "12"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            "data-sal": "slide-up",
                            "data-sal-delay": "300",
                            "data-sal-duration": "800",
                            class: "col-5 col-lg-4 col-md-6 col-sm-6 col-12",
                            children: /*#__PURE__*/ _jsxs("div", {
                                class: "product-style-one no-overlay",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        class: "card-thumbnail",
                                        children: /*#__PURE__*/ _jsx("a", {
                                            href: "product-details.html",
                                            children: /*#__PURE__*/ _jsx("img", {
                                                src: "/portfolio/portfolio-04.jpg",
                                                alt: "NFT_portfolio"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        class: "product-share-wrapper",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                class: "profile-share",
                                                children: [
                                                    /*#__PURE__*/ _jsx("a", {
                                                        href: "author.html",
                                                        class: "avatar",
                                                        "data-tooltip": "Jone lee",
                                                        children: /*#__PURE__*/ _jsx("img", {
                                                            src: "/client/client-1.png",
                                                            alt: "Nft_Profile"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("a", {
                                                        href: "author.html",
                                                        class: "avatar",
                                                        "data-tooltip": "Jone lee",
                                                        children: /*#__PURE__*/ _jsx("img", {
                                                            src: "/client/client-3.png",
                                                            alt: "Nft_Profile"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("a", {
                                                        href: "author.html",
                                                        class: "avatar",
                                                        "data-tooltip": "Jone lee",
                                                        children: /*#__PURE__*/ _jsx("img", {
                                                            src: "/client/client-5.png",
                                                            alt: "Nft_Profile"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("a", {
                                                        class: "more-author-text",
                                                        href: "#",
                                                        children: "8+ Place Bit."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                class: "share-btn share-btn-activation dropdown",
                                                children: [
                                                    /*#__PURE__*/ _jsx("button", {
                                                        class: "icon",
                                                        "data-bs-toggle": "dropdown",
                                                        "aria-expanded": "false",
                                                        children: /*#__PURE__*/ _jsx("svg", {
                                                            viewBox: "0 0 14 4",
                                                            fill: "none",
                                                            width: "16",
                                                            height: "16",
                                                            class: "sc-bdnxRM sc-hKFxyN hOiKLt",
                                                            children: /*#__PURE__*/ _jsx("path", {
                                                                "fill-rule": "evenodd",
                                                                "clip-rule": "evenodd",
                                                                d: "M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z",
                                                                fill: "currentColor"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        class: "share-btn-setting dropdown-menu dropdown-menu-end",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("button", {
                                                                type: "button",
                                                                class: "btn-setting-text share-text",
                                                                "data-bs-toggle": "modal",
                                                                "data-bs-target": "#shareModal",
                                                                children: "Share"
                                                            }),
                                                            /*#__PURE__*/ _jsx("button", {
                                                                type: "button",
                                                                class: "btn-setting-text report-text",
                                                                "data-bs-toggle": "modal",
                                                                "data-bs-target": "#reportModal",
                                                                children: "Report"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("a", {
                                        href: "product-details.html",
                                        children: /*#__PURE__*/ _jsx("span", {
                                            class: "product-name",
                                            children: "Morgan11"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        class: "latest-bid",
                                        children: "Highest bid 3/16"
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        class: "bid-react-area",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                class: "last-bid",
                                                children: "0.265wETH"
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                class: "react-area",
                                                children: [
                                                    /*#__PURE__*/ _jsx("svg", {
                                                        viewBox: "0 0 17 16",
                                                        fill: "none",
                                                        width: "16",
                                                        height: "16",
                                                        class: "sc-bdnxRM sc-hKFxyN kBvkOu",
                                                        children: /*#__PURE__*/ _jsx("path", {
                                                            d: "M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z",
                                                            stroke: "currentColor",
                                                            "stroke-width": "2"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("span", {
                                                        class: "number",
                                                        children: "20"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            "data-sal": "slide-up",
                            "data-sal-delay": "350",
                            "data-sal-duration": "800",
                            class: "col-5 col-lg-4 col-md-6 col-sm-6 col-12",
                            children: /*#__PURE__*/ _jsxs("div", {
                                class: "product-style-one no-overlay",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        class: "card-thumbnail",
                                        children: /*#__PURE__*/ _jsx("a", {
                                            href: "product-details.html",
                                            children: /*#__PURE__*/ _jsx("img", {
                                                src: "/portfolio/portfolio-05.jpg",
                                                alt: "NFT_portfolio"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        class: "product-share-wrapper",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                class: "profile-share",
                                                children: [
                                                    /*#__PURE__*/ _jsx("a", {
                                                        href: "author.html",
                                                        class: "avatar",
                                                        "data-tooltip": "Jone lee",
                                                        children: /*#__PURE__*/ _jsx("img", {
                                                            src: "/client/client-2.png",
                                                            alt: "Nft_Profile"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("a", {
                                                        href: "author.html",
                                                        class: "avatar",
                                                        "data-tooltip": "Jone lee",
                                                        children: /*#__PURE__*/ _jsx("img", {
                                                            src: "/client/client-7.png",
                                                            alt: "Nft_Profile"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("a", {
                                                        href: "author.html",
                                                        class: "avatar",
                                                        "data-tooltip": "Jone lee",
                                                        children: /*#__PURE__*/ _jsx("img", {
                                                            src: "/client/client-9.png",
                                                            alt: "Nft_Profile"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("a", {
                                                        class: "more-author-text",
                                                        href: "#",
                                                        children: "15+ Place Bit."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                class: "share-btn share-btn-activation dropdown",
                                                children: [
                                                    /*#__PURE__*/ _jsx("button", {
                                                        class: "icon",
                                                        "data-bs-toggle": "dropdown",
                                                        "aria-expanded": "false",
                                                        children: /*#__PURE__*/ _jsx("svg", {
                                                            viewBox: "0 0 14 4",
                                                            fill: "none",
                                                            width: "16",
                                                            height: "16",
                                                            class: "sc-bdnxRM sc-hKFxyN hOiKLt",
                                                            children: /*#__PURE__*/ _jsx("path", {
                                                                "fill-rule": "evenodd",
                                                                "clip-rule": "evenodd",
                                                                d: "M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z",
                                                                fill: "currentColor"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        class: "share-btn-setting dropdown-menu dropdown-menu-end",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("button", {
                                                                type: "button",
                                                                class: "btn-setting-text share-text",
                                                                "data-bs-toggle": "modal",
                                                                "data-bs-target": "#shareModal",
                                                                children: "Share"
                                                            }),
                                                            /*#__PURE__*/ _jsx("button", {
                                                                type: "button",
                                                                class: "btn-setting-text report-text",
                                                                "data-bs-toggle": "modal",
                                                                "data-bs-target": "#reportModal",
                                                                children: "Report"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("a", {
                                        href: "product-details.html",
                                        children: /*#__PURE__*/ _jsx("span", {
                                            class: "product-name",
                                            children: "mAtal8"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        class: "latest-bid",
                                        children: "Highest bid 6/50"
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        class: "bid-react-area",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                class: "last-bid",
                                                children: "0.244wETH"
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                class: "react-area",
                                                children: [
                                                    /*#__PURE__*/ _jsx("svg", {
                                                        viewBox: "0 0 17 16",
                                                        fill: "none",
                                                        width: "16",
                                                        height: "16",
                                                        class: "sc-bdnxRM sc-hKFxyN kBvkOu",
                                                        children: /*#__PURE__*/ _jsx("path", {
                                                            d: "M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z",
                                                            stroke: "currentColor",
                                                            "stroke-width": "2"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("span", {
                                                        class: "number",
                                                        children: "205"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const DetailPage_DetailFour = ((/* unused pure expression or super */ null && (DetailFour)));

;// CONCATENATED MODULE: ./PageComponents/DetailPage/DetailFive.jsx


const DetailFive = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        class: "rn-popup-modal share-modal-wrapper modal fade",
        id: "shareModal",
        tabindex: "-1",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                type: "button",
                class: "btn-close",
                "data-bs-dismiss": "modal",
                "aria-label": "Close"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                class: "modal-dialog modal-dialog-centered modal-dialog-scrollable",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    class: "modal-content share-wrapper",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "modal-header share-area",
                            children: /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                class: "modal-title",
                                children: "Share this NFT"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "modal-body",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                class: "social-share-default",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "icon"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "text",
                                                    children: "facebook"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "icon"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "text",
                                                    children: "twitter"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "icon"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "text",
                                                    children: "linkedin"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "icon"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "text",
                                                    children: "instagram"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "icon"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "text",
                                                    children: "youtube"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const DetailPage_DetailFive = (DetailFive);

;// CONCATENATED MODULE: ./PageComponents/DetailPage/DetailSix.jsx


const DetailSix = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        class: "rn-popup-modal share-modal-wrapper modal fade",
        id: "shareModal",
        tabindex: "-1",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                type: "button",
                class: "btn-close",
                "data-bs-dismiss": "modal",
                "aria-label": "Close"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                class: "modal-dialog modal-dialog-centered modal-dialog-scrollable",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    class: "modal-content share-wrapper",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "modal-header share-area",
                            children: /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                class: "modal-title",
                                children: "Share this NFT"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "modal-body",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                class: "social-share-default",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "icon"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "text",
                                                    children: "facebook"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "icon"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "text",
                                                    children: "twitter"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "icon"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "text",
                                                    children: "linkedin"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "icon"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "text",
                                                    children: "instagram"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "icon"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "text",
                                                    children: "youtube"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const DetailPage_DetailSix = (DetailSix);

;// CONCATENATED MODULE: ./PageComponents/DetailPage/DetailSeven.jsx



const DetailSeven = ({ property , setUpdatePropertyPrice , updatePropertyPrice , updatepropertyPrice , updatePriceLoading  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        class: "rn-popup-modal report-modal-wrapper modal fade",
        id: "reportModal",
        tabindex: "-1",
        "aria-hidden": "true",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            class: "modal-dialog modal-dialog-centered modal-dialog-scrollable",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                class: "modal-content report-content-wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        class: "modal-header report-modal-header",
                        children: /*#__PURE__*/ jsx_runtime.jsx("h5", {
                            class: "modal-title",
                            children: "Update Property Price"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        class: "modal-body",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                children: [
                                    "Hey ",
                                    property?.owner.slice(0, 15),
                                    "... , Kindly update your property price"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                class: "report-form-box",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                        class: "title",
                                        children: "Price"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                        name: "message",
                                        placeholder: `Old Price: ${property?.price} MATIC`,
                                        onChange: (e)=>setUpdatePropertyPrice({
                                                ...updatePropertyPrice,
                                                price: e.target.value
                                            })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        class: "report-button",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                onClick: ()=>updatepropertyPrice(),
                                                type: "button",
                                                class: "btn btn-primary mr--10 w-auto",
                                                children: updatePriceLoading ? /*#__PURE__*/ jsx_runtime.jsx(Components/* Loader */.aN, {}) : "Update Price"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                type: "button",
                                                class: "btn btn-primary-alta w-auto",
                                                "data-bs-dismiss": "modal",
                                                children: "Cancel"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const DetailPage_DetailSeven = (DetailSeven);

;// CONCATENATED MODULE: ./PageComponents/DetailPage/DetailEight.jsx



const DetailEight = ({ createReview , handleFormFieldChange , commentLoading  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        class: "rn-popup-modal placebid-modal-wrapper modal fade",
        id: "placebidModal",
        tabindex: "-1",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                type: "button",
                class: "btn-close",
                "data-bs-dismiss": "modal",
                "aria-label": "Close"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                class: "modal-dialog modal-dialog-centered modal-dialog-scrollable",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    class: "modal-content",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "modal-header",
                            children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                class: "modal-title",
                                children: "Give Review"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            class: "modal-body",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: "Kindly Provide your review for a better user Experience"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    class: "placebid-form-box",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                            class: "title",
                                            children: "Your Comment"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            class: "bid-content",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    class: "bid-content-top",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        class: "bid-content-left",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                                            name: "",
                                                            id: "",
                                                            cols: "30",
                                                            rows: "5",
                                                            onChange: (e)=>handleFormFieldChange("comment", e)
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    class: "bid-content-mid",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: "Your feed back will help user of the property to provide better service"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            class: "bit-continue-button",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                    onClick: ()=>createReview(),
                                                    class: "btn btn-primary w-100",
                                                    children: commentLoading ? /*#__PURE__*/ jsx_runtime.jsx(Components/* Loader */.aN, {}) : "Add Review"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                    type: "button",
                                                    class: "btn btn-primary-alta mt--10",
                                                    "data-bs-dismiss": "modal",
                                                    children: "Cancel"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const DetailPage_DetailEight = (DetailEight);

;// CONCATENATED MODULE: ./PageComponents/DetailPage/index.js










// EXTERNAL MODULE: ./context/index.js + 2 modules
var context = __webpack_require__(5501);
;// CONCATENATED MODULE: ./pages/detail.js




//INTERNAL IMPORT




const detail = ()=>{
    const [property, setProperty] = (0,external_react_.useState)();
    const [parsedReviews, setParsedReviews] = (0,external_react_.useState)();
    const [properties, setProperties] = (0,external_react_.useState)([]);
    const [isLoading, setIsLoading] = (0,external_react_.useState)(true);
    const [updatePriceLoading, setUpdatePriceLoading] = (0,external_react_.useState)(false);
    const [commentLoading, setCommentLoading] = (0,external_react_.useState)(false);
    const [buyLoading, setBuyLoading] = (0,external_react_.useState)(false);
    const { currentAccount , addReviewFunction , getProductReviewsFunction , likeReviewFunction , buyPropertyFunction , getPropertyFunction , getPropertiesData , updatePriceFunction  } = (0,context/* useStateContext */.F)();
    const router = (0,router_.useRouter)();
    const { query  } = router;
    //GET PROPERTY DATA
    const fetchProperty = async ()=>{
        const data = await getPropertyFunction(query.property);
        const dataReviews = await getProductReviewsFunction(query.property);
        const dataProperties = await getPropertiesData();
        setProperties(dataProperties);
        setProperty(data);
        setParsedReviews(dataReviews);
        setIsLoading(false);
    };
    (0,external_react_.useEffect)(()=>{
        if (query) fetchProperty();
    }, [
        query
    ]);
    //ADD REVIEW
    const [review, setReview] = (0,external_react_.useState)({
        productID: "",
        rating: 4,
        comment: ""
    });
    const handleFormFieldChange = (fieldName, e)=>{
        setReview({
            ...review,
            [fieldName]: e.target.value
        });
    };
    const createReview = async ()=>{
        setCommentLoading(true);
        const data = await addReviewFunction({
            ...review,
            productID: property.productID
        });
        setCommentLoading(false);
    };
    //LIKE REVIEW
    const [likeReviews, setLikeReviews] = (0,external_react_.useState)({
        productID: "",
        reviewIndex: ""
    });
    const likeReviewCall = async ()=>{
        const data = await likeReviewFunction({
            ...likeReviews,
            productID: property.productID
        });
    };
    //BUY PROPERTY
    const buying = {
        productID: property?.productID,
        amount: property?.price
    };
    const buyingProperty = async ()=>{
        setBuyLoading(true);
        const data = await buyPropertyFunction(buying);
        setBuyLoading(false);
    };
    //UPDATE PRICE
    const [updatePropertyPrice, setUpdatePropertyPrice] = (0,external_react_.useState)({
        productID: property?.productID,
        price: ""
    });
    const updatepropertyPrice = async ()=>{
        setUpdatePriceLoading(true);
        const data = await updatePriceFunction({
            ...updatePropertyPrice,
            productID: property?.productID
        });
        setUpdatePriceLoading(false);
        window.location.reload();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        class: "template-color-1 nft-body-connect",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Components/* Header */.h4, {}),
            /*#__PURE__*/ jsx_runtime.jsx(DetailPage_DetailOne, {}),
            /*#__PURE__*/ jsx_runtime.jsx(DetailPage_DetailTwo, {
                property: property,
                parsedReviews: parsedReviews,
                setLikeReviews: setLikeReviews,
                likeReviewCall: likeReviewCall,
                buyingProperty: buyingProperty,
                address: currentAccount,
                isLoading: isLoading,
                buyLoading: buyLoading
            }),
            /*#__PURE__*/ jsx_runtime.jsx(DetailPage_DetailThree, {
                properties: properties
            }),
            /*#__PURE__*/ jsx_runtime.jsx(DetailPage_DetailFive, {}),
            /*#__PURE__*/ jsx_runtime.jsx(DetailPage_DetailSix, {}),
            /*#__PURE__*/ jsx_runtime.jsx(DetailPage_DetailSeven, {
                property: property,
                setUpdatePropertyPrice: setUpdatePropertyPrice,
                updatepropertyPrice: updatepropertyPrice,
                updatePriceLoading: updatePriceLoading
            }),
            /*#__PURE__*/ jsx_runtime.jsx(DetailPage_DetailEight, {
                createReview: createReview,
                handleFormFieldChange: handleFormFieldChange,
                commentLoading: commentLoading
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Components/* Footer */.$_, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Components/* Copyright */.wZ, {})
        ]
    });
};
/* harmony default export */ const pages_detail = (detail);


/***/ }),

/***/ 1982:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2840:
/***/ ((module) => {

module.exports = require("web3modal");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,501,10], () => (__webpack_exec__(9315)));
module.exports = __webpack_exports__;

})();