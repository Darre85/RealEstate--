exports.id = 10;
exports.ids = [10];
exports.modules = {

/***/ 4169:
/***/ ((module) => {

// Exports
module.exports = {
	"loaderBox": "Loader_loaderBox__YgSqF",
	"loader": "Loader_loader__w_NxX",
	"fade458": "Loader_fade458__zhW1z",
	"bar1": "Loader_bar1__aTEx8",
	"bar2": "Loader_bar2__jNgSK",
	"bar3": "Loader_bar3__8cI2W",
	"bar4": "Loader_bar4__aENhV",
	"bar5": "Loader_bar5__VWSc8",
	"bar6": "Loader_bar6__AkRpG",
	"bar7": "Loader_bar7__hZ3_G",
	"bar8": "Loader_bar8__ZFJ3D",
	"bar9": "Loader_bar9__pI1L7",
	"bar10": "Loader_bar10__PWctv",
	"bar11": "Loader_bar11__bZA9i",
	"bar12": "Loader_bar12__qIey6"
};


/***/ }),

/***/ 1010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "jL": () => (/* reexport */ Components_Banner),
  "FE": () => (/* reexport */ Components_Collection),
  "wZ": () => (/* reexport */ Components_Copyright),
  "$_": () => (/* reexport */ Components_Footer),
  "h4": () => (/* reexport */ Components_Header),
  "vk": () => (/* reexport */ Components_Live),
  "aN": () => (/* reexport */ Loader_Loader),
  "xs": () => (/* reexport */ Components_Product),
  "t6": () => (/* reexport */ Components_Service)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./context/index.js + 2 modules
var context = __webpack_require__(5501);
;// CONCATENATED MODULE: ./PageComponents/Components/Header.jsx




const Header = ()=>{
    const { currentAccount , connectWallet , userBlance  } = (0,context/* useStateContext */.F)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("header", {
                class: "rn-header haeder-default header--sticky",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        class: "header-inner",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                class: "header-left",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        class: "logo-thumbnail logo-custom-css",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                class: "logo-light",
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: "/logo/logo-white.png",
                                                    alt: "nft-logo"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                class: "logo-dark",
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: "/logo/logo-dark.png",
                                                    alt: "nft-logo"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        class: "mainmenu-wrapper",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
                                            id: "sideNav",
                                            class: "mainmenu-nav d-none d-xl-block",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                class: "mainmenu",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "/",
                                                            children: "Home"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "/about",
                                                            children: "About"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                href: "/explore",
                                                                children: "Explore"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                                class: "submenu",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                            href: "/active",
                                                                            children: [
                                                                                "Activity",
                                                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                    class: "feather-fast-forward"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                            href: "/author",
                                                                            children: [
                                                                                "Author",
                                                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                    class: "feather-fast-forward"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                            href: "/create",
                                                                            children: [
                                                                                "Create",
                                                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                    class: "feather-fast-forward"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                            href: "/creator",
                                                                            children: [
                                                                                "Creator",
                                                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                    class: "feather-fast-forward"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                            class: "live-expo",
                                                                            href: "/explor",
                                                                            children: "Explore"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "/contact",
                                                            children: "Contact"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                class: "header-right",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        class: "setting-option d-none d-lg-block",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                            class: "search-form-wrapper",
                                            action: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "search",
                                                    placeholder: "Search Here",
                                                    "aria-label": "Search"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    class: "search-icon",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            class: "feather-search"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        class: "setting-option rn-icon-list d-block d-lg-none",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            class: "icon-box search-mobile-icon",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    class: "feather-search"
                                                })
                                            })
                                        })
                                    }),
                                    currentAccount ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            class: "setting-option rn-icon-list user-account",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                class: "icon-box",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        href: "/author",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/icons/boy-avater.png",
                                                            alt: "Images"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        class: "rn-dropdown",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                            class: "list-inner",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        href: "/author",
                                                                        children: "My Profile"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        href: "/edit-profile",
                                                                        children: "Edit Profile"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }) : "",
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        class: "setting-option mobile-menu-bar d-block d-xl-none",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            class: "hamberger",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                class: "hamberger-button",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    class: "feather-menu"
                                                })
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
                class: "popup-mobile-menu",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    class: "inner",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            class: "header-top",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    class: "logo logo-custom-css",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            class: "logo-light",
                                            href: "index.html",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: "/logo/logo-white.png",
                                                alt: "nft-logo"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            class: "logo-dark",
                                            href: "index.html",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: "/logo/logo-dark.png",
                                                alt: "nft-logo"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    class: "close-menu",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        class: "close-button",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            class: "feather-x"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("nav", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                class: "mainmenu",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            class: "nav-link its_new",
                                            href: "/",
                                            children: "Home"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: "/about",
                                            children: "About"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            class: "nav-link its_new",
                                            href: "/explor",
                                            children: "Explore"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            class: "nav-link its_new",
                                            href: "/",
                                            children: "Pages"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: "/contact",
                                            children: "Contact"
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
/* harmony default export */ const Components_Header = (Header);

;// CONCATENATED MODULE: ./PageComponents/Components/Banner.jsx



const Banner = ()=>{
    const category = [
        {
            name: "Housing",
            link: "/housing",
            worth: 535.566
        },
        {
            name: "Office",
            link: "/office",
            worth: 6435.66
        },
        {
            name: "Farmhouse",
            link: "/farmhouse",
            worth: 12445.566
        },
        {
            name: "Rental",
            link: "/rental",
            worth: 34535.566
        },
        {
            name: "Commercial",
            link: "/commercial",
            worth: 553435.566
        },
        {
            name: "Country",
            link: "/country",
            worth: 1234535
        }
    ];
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        class: "banner-three slider-style-3 pt--70",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            class: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                class: "row g-4",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        class: "col-lg-5",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "wrapper",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                class: "slider ",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    class: "slider-thumbnail thumbnail-overlay",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                class: "w-100",
                                                src: "/portfolio/portfolio-11.jpg",
                                                alt: "NFT_portfolio"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            class: "read-wrapper",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    children: "Future RealEstate"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        class: "col-lg-7",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "row g-4",
                            children: category.map((el, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                    class: "col-lg-4 col-md-6 col-sm-6 col-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        class: "slide-small-wrapper",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                class: "thumbnail thumbnail-overlay",
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: {
                                                        pathname: `/category${el.link}`,
                                                        query: {
                                                            name: `${el.name}`
                                                        }
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        class: "w-100",
                                                        src: `/portfolio/portfolio-${i + 12}.jpg`,
                                                        alt: "Nft_Profile"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                class: "read-wrapper",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                        class: "title",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "#",
                                                            children: el.name
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                        children: [
                                                            el.worth,
                                                            " MATIC"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, i + 1))
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Components_Banner = (Banner);

;// CONCATENATED MODULE: ./PageComponents/Components/Live.jsx



const Live = ({ properties  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        class: "rn-live-bidding-area rn-section-gapTop",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            class: "container",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: "row mb--30",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        class: "col-lg-12",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "section-title",
                            children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                class: "title mb--0 live-bidding-title",
                                "data-sal-delay": "150",
                                "data-sal": "slide-up",
                                "data-sal-duration": "800",
                                children: "New Properties"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: "row g-5",
                    children: properties?.map((property, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "col-5 col-lg-4 col-md-6 col-sm-6 col-12",
                            "data-sal-delay": "150",
                            "data-sal": "",
                            "data-sal-duration": "800",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                class: "product-style-one",
                                "data-sal": "",
                                "data-sal-duration": "800",
                                "data-sal-delay": "150",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        class: "card-thumbnail",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
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
                        })).slice(0, 5)
                })
            ]
        })
    });
};
/* harmony default export */ const Components_Live = (Live);

;// CONCATENATED MODULE: ./PageComponents/Components/Service.jsx


const Service = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        class: "rn-service-area rn-section-gapTop",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            class: "container",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: "row",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        class: "col-12 mb--50",
                        children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                            class: "title",
                            "data-sal-delay": "150",
                            "data-sal": "",
                            "data-sal-duration": "800",
                            children: "Create and sell your NFTs"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    class: "row g-5",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                "data-sal": "",
                                "data-sal-delay": "150",
                                "data-sal-duration": "800",
                                class: "rn-service-one color-shape-7",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        class: "inner",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                class: "icon",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: "/icons/shape-7.png",
                                                    alt: "Shape"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                class: "subtitle",
                                                children: "Step-01"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                class: "content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                        class: "title",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "#",
                                                            children: "Set up your wallet"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        class: "description",
                                                        children: "Powerful features and inclusions, which makes Future RealEstate standout, easily customizable and scalable."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        class: "read-more-button",
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            class: "feather-arrow-right"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        class: "over-link",
                                        href: "#"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                "data-sal": "slide-up",
                                "data-sal-delay": "200",
                                "data-sal-duration": "800",
                                class: "rn-service-one color-shape-1",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        class: "inner",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                class: "icon",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: "/icons/shape-1.png",
                                                    alt: "Shape"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                class: "subtitle",
                                                children: "Step-02"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                class: "content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                        class: "title",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "#",
                                                            children: "Create your collection"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        class: "description",
                                                        children: "A great collection of beautiful website templates for your need. Choose the best suitable template."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        class: "read-more-button",
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            class: "feather-arrow-right"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        class: "over-link",
                                        href: "#"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                "data-sal": "slide-up",
                                "data-sal-delay": "250",
                                "data-sal-duration": "800",
                                class: "rn-service-one color-shape-5",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        class: "inner",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                class: "icon",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: "/icons/shape-5.png",
                                                    alt: "Shape"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                class: "subtitle",
                                                children: "Step-03"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                class: "content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                        class: "title",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "#",
                                                            children: "Add your NFT's"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        class: "description",
                                                        children: "We've made the template fully responsive, so it looks great on all devices: desktop, tablets and."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        class: "read-more-button",
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            class: "feather-arrow-right"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        class: "over-link",
                                        href: "#"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                "data-sal": "slide-up",
                                "data-sal-delay": "300",
                                "data-sal-duration": "800",
                                class: "rn-service-one color-shape-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        class: "inner",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                class: "icon",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: "/icons/shape-6.png",
                                                    alt: "Shape"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                class: "subtitle",
                                                children: "Step-04"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                class: "content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                        class: "title",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "#",
                                                            children: "Sell Your NFT's"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        class: "description",
                                                        children: "I throw myself down among the tall grass by the stream as I lie close to the earth NFT's."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        class: "read-more-button",
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            class: "feather-arrow-right"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        class: "over-link",
                                        href: "#"
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
/* harmony default export */ const Components_Service = (Service);

;// CONCATENATED MODULE: ./PageComponents/Components/Product.jsx


const Product = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "rn-product-area rn-section-gapTop masonary-wrapper-activation",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row align-items-center mb--30",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-4",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "section-title",
                            children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "title mb--0",
                                children: "Explore Product"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-8",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "button-group isotop-filter filters-button-group d-flex justify-content-start justify-content-lg-end mt_md--30 mt_sm--30",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    "data-filter": "*",
                                    className: "is-checked",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "filter-text",
                                        children: "All"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    "data-filter": ".cat--1",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "filter-text",
                                        children: "Housing"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    "data-filter": ".cat--2",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "filter-text",
                                        children: "Office"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    "data-filter": ".cat--3",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "filter-text",
                                        children: "Rental"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    "data-filter": ".cat--4",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "filter-text",
                                        children: "Farmhouse"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    "data-filter": ".cat--5",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "filter-text",
                                        children: "Country"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    "data-filter": ".cat--6",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "filter-text",
                                        children: "Commercial"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Components_Product = (Product);

;// CONCATENATED MODULE: ./PageComponents/Components/Collection.jsx



const Collection = ({ housing , rental , farmhouse , office  })=>{
    const topCollection = [
        {
            name: "Housing",
            link: "/housing",
            item: housing
        },
        {
            name: "Office",
            link: "/office",
            item: office
        },
        {
            name: "Farmhouse",
            link: "/farmhouse",
            item: farmhouse
        },
        {
            name: "Rental",
            link: "/rental",
            item: rental
        }
    ];
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "rn-collection-area rn-section-gapTop",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row mb--50 align-items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-6 col-md-6 col-sm-6 col-12",
                        children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                            className: "title mb--0",
                            "data-sal-delay": "150",
                            "data-sal": "slide-up",
                            "data-sal-duration": "800",
                            children: "Top Collection"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "view-more-btn text-start text-sm-end",
                            "data-sal-delay": "150",
                            "data-sal": "slide-up",
                            "data-sal-duration": "800",
                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                className: "btn-transparent",
                                href: "#",
                                children: "VIEW ALL"
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Components_Collection = (Collection);

;// CONCATENATED MODULE: ./PageComponents/Components/Footer.jsx


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        class: "rn-footer-one rn-section-gap bg-color--1 mt--100 mt_md--80 mt_sm--80",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            class: "container",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                class: "row gx-5",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: "col-lg-3 col-md-6 col-sm-6 col-12",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        class: "widget-content-wrapper",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            class: "footer-left",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    class: "logo-thumbnail logo-custom-css",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            class: "logo-light",
                                            href: "index.html",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: "/logo/logo-white.png",
                                                alt: "nft-logo"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            class: "logo-dark",
                                            href: "index.html",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: "/logo/logo-dark.png",
                                                alt: "nft-logo"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    class: "rn-footer-describe",
                                    children: "Created with the collaboration of over 60 of the world's best Future RealEstate Artists."
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const Components_Footer = (Footer);

;// CONCATENATED MODULE: ./PageComponents/Components/Copyright.jsx


const Copyright = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                class: "copy-right-one ptb--20 bg-color--1",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        class: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                class: "col-lg-6 col-md-12 col-sm-12",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    class: "copyright-left",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: "\xa92022 Future RealEstate, Inc. All rights reserved."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            class: "privacy",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        href: "terms-condition.html",
                                                        children: "Terms"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        href: "privacy-policy.html",
                                                        children: "Privacy Policy"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                class: "col-lg-6 col-md-12 col-sm-12",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    class: "copyright-right"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                class: "mouse-cursor cursor-outer"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                class: "mouse-cursor cursor-inner"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                class: "rn-progress-parent",
                children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                    class: "rn-back-circle svg-inner",
                    width: "100%",
                    height: "100%",
                    viewBox: "-1 -1 102 102",
                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Components_Copyright = (Copyright);

// EXTERNAL MODULE: ./PageComponents/Components/Loader/Loader.module.css
var Loader_module = __webpack_require__(4169);
var Loader_module_default = /*#__PURE__*/__webpack_require__.n(Loader_module);
;// CONCATENATED MODULE: ./PageComponents/Components/Loader/Loader.jsx


//INTERNAL IMPORT

const Loader = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: (Loader_module_default()).loaderBox,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            class: (Loader_module_default()).loader,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: (Loader_module_default()).bar1
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: (Loader_module_default()).bar2
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: (Loader_module_default()).bar3
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: (Loader_module_default()).bar4
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: (Loader_module_default()).bar5
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: (Loader_module_default()).bar6
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: (Loader_module_default()).bar7
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: (Loader_module_default()).bar8
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: (Loader_module_default()).bar9
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: (Loader_module_default()).bar10
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: (Loader_module_default()).bar11
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: (Loader_module_default()).bar12
                })
            ]
        })
    });
};
/* harmony default export */ const Loader_Loader = (Loader);

;// CONCATENATED MODULE: ./PageComponents/Components/index.js












/***/ })

};
;