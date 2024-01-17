"use strict";
(() => {
var exports = {};
exports.id = 815;
exports.ids = [815];
exports.modules = {

/***/ 5842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_active)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./PageComponents/ActivityPage/Activity.jsx




const Activity = ({ properties , totalReviews , popular  })=>{
    // const creators = getTopCreators(properties);
    // console.log(creators);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        class: "rn-activity-area rn-section-gapTop",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            class: "container",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: "row mb--30",
                    children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                        class: "title",
                        children: "All following Acivity"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    class: "row g-6 activity-direction",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "col-lg-8 mb_dec--15",
                            children: properties?.map((activity, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                    class: "single-activity-wrapper",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        class: "inner",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            class: "read-content",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    class: "thumbnail",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        href: "product-details.html",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: `/activity/activity-0${i + 2}.jpg`,
                                                            alt: "Nft_Profile"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    class: "content",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "product-details.html",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                class: "title",
                                                                children: activity.title.slice(0, 25)
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                            children: [
                                                                activity.owner.slice(0, 25),
                                                                "..."
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            class: "time-maintane",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    class: "time data",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                        children: [
                                                                            i + 1,
                                                                            ":30 PM on ",
                                                                            i + 1,
                                                                            "9th June,",
                                                                            " "
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    class: "user-area data",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                        href: {
                                                                            pathname: `/category/${activity.category}`
                                                                        },
                                                                        children: activity.category
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }))
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "col-lg-4",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                class: "filter-wrapper",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    class: "widge-wrapper rbt-sticky-top-adjust",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            class: "inner",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    children: "Analytic Stats"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    class: "sing-filter",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                            children: [
                                                                "Total Property: ",
                                                                properties?.length
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                            children: [
                                                                "Reviews: ",
                                                                totalReviews
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            class: "inner",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    children: "Category"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    class: "sing-filter",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                            children: "Housing"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                            children: "Rental"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                            children: "Office"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                            children: "Commercial"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                            children: "Farmhouse"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                            children: "Country"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            class: "inner",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    children: "Popular Property"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    class: "sing-filter",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: {
                                                            pathname: `/detail`,
                                                            query: {
                                                                property: `${popular}`
                                                            }
                                                        },
                                                        children: "Check Now"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const ActivityPage_Activity = (Activity);

;// CONCATENATED MODULE: ./PageComponents/ActivityPage/index.js



// EXTERNAL MODULE: ./PageComponents/Components/index.js + 9 modules
var Components = __webpack_require__(1010);
// EXTERNAL MODULE: ./context/index.js + 2 modules
var context = __webpack_require__(5501);
;// CONCATENATED MODULE: ./pages/active.js


//INTERNAL IMPORT



const active = ()=>{
    const [isLoading, setIsLoading] = (0,external_react_.useState)(false);
    const [properties, setProperties] = (0,external_react_.useState)([]);
    const [totalReviews, setTotalReviews] = (0,external_react_.useState)();
    const { getPropertiesData , totalReviewsFunction , getHighestRatedProduct  } = (0,context/* useStateContext */.F)();
    //GET DATA
    const fetchProperty = async ()=>{
        setIsLoading(true);
        const data = await getPropertiesData();
        const reviewsLength = await totalReviewsFunction();
        setTotalReviews(reviewsLength);
        setProperties(data);
        setIsLoading(false);
    };
    (0,external_react_.useEffect)(()=>{
        fetchProperty();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        class: "template-color-1 nft-body-connect",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Components/* Header */.h4, {}),
            /*#__PURE__*/ jsx_runtime.jsx(ActivityPage_Activity, {
                properties: properties,
                totalReviews: totalReviews,
                popular: getHighestRatedProduct
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Components/* Footer */.$_, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Components/* Copyright */.wZ, {})
        ]
    });
};
/* harmony default export */ const pages_active = (active);


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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,501,10], () => (__webpack_exec__(5842)));
module.exports = __webpack_exports__;

})();