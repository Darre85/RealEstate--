"use strict";
(() => {
var exports = {};
exports.id = 66;
exports.ids = [66];
exports.modules = {

/***/ 8562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_author)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./PageComponents/AuthorPage/AuthorOne.jsx


const AuthorOne = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        class: "rn-author-bg-area bg_image--9 bg_image ptb--150",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            class: "container",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                class: "row"
            })
        })
    });
};
/* harmony default export */ const AuthorPage_AuthorOne = (AuthorOne);

;// CONCATENATED MODULE: ./PageComponents/AuthorPage/AuthorTwo.jsx


const AuthorTwo = ({ address , author  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        class: "rn-author-area mb--30 mt_dec--120",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            class: "container",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                class: "row padding-tb-50 align-items-center d-flex",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: "col-lg-12",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        class: "author-wrapper",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            class: "author-inner",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    class: "user-thumbnail",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "/profile/profile-01.jpg",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    class: "rn-author-info-content",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                                            class: "title",
                                            children: [
                                                address?.slice(0, 20),
                                                "..."
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: "#",
                                            class: "social-follw"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            class: "follow-area",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    class: "follow followers",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                        children: [
                                                            "186k",
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                href: "#",
                                                                class: "color-body",
                                                                children: "followers"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    class: "follow following",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                        children: [
                                                            author?.length,
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                href: "#",
                                                                class: "color-body",
                                                                children: "Owned Property"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            class: "author-button-area",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "btn at-follw follow-button",
                                                    children: "Follow"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "btn at-follw share-button",
                                                    "data-bs-toggle": "modal",
                                                    "data-bs-target": "#shareModal"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    class: "count at-follw",
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
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                class: "share-btn-setting dropdown-menu dropdown-menu-end",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                    type: "button",
                                                                    class: "btn-setting-text report-text",
                                                                    "data-bs-toggle": "modal",
                                                                    "data-bs-target": "#reportModal",
                                                                    children: "Report"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "edit-profile.html",
                                                    class: "btn at-follw follow-button edit-btn"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const AuthorPage_AuthorTwo = (AuthorTwo);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./PageComponents/Components/index.js + 9 modules
var Components = __webpack_require__(1010);
;// CONCATENATED MODULE: ./PageComponents/AuthorPage/AuthorThree.jsx




const AuthorThree = ({ properties , author  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        class: "rn-authore-profile-area",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            class: "container",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: "row",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        class: "col-12",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "tab-wrapper-one",
                            children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
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
                                            children: "All Properties"
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
                                            children: "Owned"
                                        })
                                    ]
                                })
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    class: "tab-content rn-bid-content",
                    id: "nav-tabContent",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "tab-pane row g-5 d-flex fade",
                            id: "nav-home",
                            role: "tabpanel",
                            "aria-labelledby": "nav-home-tab",
                            children: properties?.length == 0 ? /*#__PURE__*/ jsx_runtime.jsx(Components/* Loader */.aN, {}) : /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                children: properties?.map((property, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                        class: "col-5 col-lg-4 col-md-6 col-sm-6 col-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            class: "product-style-one no-overlay with-placeBid",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    class: "card-thumbnail",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: `/detail?property=${property.productID}`,
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
                                    }))
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "tab-pane row g-5 d-flex fade show active",
                            id: "nav-profile",
                            role: "tabpanel",
                            "aria-labelledby": "nav-profile-tab",
                            children: author?.length == 0 ? /*#__PURE__*/ jsx_runtime.jsx(Components/* Loader */.aN, {}) : /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                children: author?.map((property, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                        class: "col-5 col-lg-4 col-md-6 col-sm-6 col-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            class: "product-style-one no-overlay with-placeBid",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    class: "card-thumbnail",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: `/detail?property=${property.productID}`,
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                src: property.image,
                                                                alt: "NFT_portfolio"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: `/update?property=${property.productID}`,
                                                            class: "btn btn-primary",
                                                            children: "Update"
                                                        })
                                                    ]
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
                                    }))
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const AuthorPage_AuthorThree = (AuthorThree);

;// CONCATENATED MODULE: ./PageComponents/AuthorPage/AuthorFour.jsx


const AuthorFour = ()=>{
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
/* harmony default export */ const AuthorPage_AuthorFour = (AuthorFour);

;// CONCATENATED MODULE: ./PageComponents/AuthorPage/AuthorFive.jsx


const AuthorFive = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        class: "rn-popup-modal report-modal-wrapper modal fade",
        id: "reportModal",
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
                    class: "modal-content report-content-wrapper",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "modal-header report-modal-header",
                            children: /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                class: "modal-title",
                                children: "Why are you reporting?"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            class: "modal-body",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: "Describe why you think this item should be removed from marketplace"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    class: "report-form-box",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                            class: "title",
                                            children: "Message"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                            name: "message",
                                            placeholder: "Write issues"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            class: "report-button",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                    type: "button",
                                                    class: "btn btn-primary mr--10 w-auto",
                                                    children: "Report"
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
        ]
    });
};
/* harmony default export */ const AuthorPage_AuthorFive = (AuthorFive);

;// CONCATENATED MODULE: ./PageComponents/AuthorPage/index.js







// EXTERNAL MODULE: ./context/index.js + 2 modules
var context = __webpack_require__(5501);
;// CONCATENATED MODULE: ./pages/author.js


//INTERNAL IMPORT



const author = ()=>{
    const [isLoading, setIsLoading] = (0,external_react_.useState)(false);
    const [properties, setProperties] = (0,external_react_.useState)([]);
    const [author, setAuthor] = (0,external_react_.useState)([]);
    const { currentAccount , getUserPropertiesFunction , getPropertiesData  } = (0,context/* useStateContext */.F)();
    //GET DATA
    const fetchProperty = async ()=>{
        setIsLoading(true);
        const data = await getPropertiesData();
        const dataAuthor = await getUserPropertiesFunction();
        setAuthor(dataAuthor);
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
            /*#__PURE__*/ jsx_runtime.jsx(AuthorPage_AuthorOne, {}),
            /*#__PURE__*/ jsx_runtime.jsx(AuthorPage_AuthorTwo, {
                address: currentAccount,
                author: author
            }),
            /*#__PURE__*/ jsx_runtime.jsx(AuthorPage_AuthorThree, {
                properties: properties,
                author: author
            }),
            /*#__PURE__*/ jsx_runtime.jsx(AuthorPage_AuthorFour, {}),
            /*#__PURE__*/ jsx_runtime.jsx(AuthorPage_AuthorFive, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Components/* Footer */.$_, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Components/* Copyright */.wZ, {})
        ]
    });
};
/* harmony default export */ const pages_author = (author);


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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,501,10], () => (__webpack_exec__(8562)));
module.exports = __webpack_exports__;

})();