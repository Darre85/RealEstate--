"use strict";
(() => {
var exports = {};
exports.id = 46;
exports.ids = [46];
exports.modules = {

/***/ 1123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit_profile)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./PageComponents/Components/index.js + 9 modules
var Components = __webpack_require__(1010);
;// CONCATENATED MODULE: ./PageComponents/EditProfilepage/EditProfileOne.jsx


const EditProfileOne = ()=>{
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
                            children: "Edit Profile"
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
                                    children: "Edit Profile"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const EditProfilepage_EditProfileOne = (EditProfileOne);

;// CONCATENATED MODULE: ./PageComponents/EditProfilepage/EditProfileTwo.jsx


const EditProfileTwo = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        class: "edit-profile-area rn-section-gapTop",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            class: "container",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: "row plr--70 padding-control-edit-wrapper pl_md--0 pr_md--0 pl_sm--0 pr_sm--0",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        class: "col-12 d-flex justify-content-between mb--30 align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                class: "title-left",
                                children: "Edit Your Profile"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "author.html",
                                class: "btn btn-primary ml--10",
                                children: "Preview"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    class: "row plr--70 padding-control-edit-wrapper pl_md--0 pr_md--0 pl_sm--0 pr_sm--0",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "col-lg-3 col-md-3 col-sm-12",
                            children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
                                class: "left-nav rbt-sticky-top-adjust-five",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    class: "nav nav-tabs",
                                    id: "nav-tab",
                                    role: "tablist",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            class: "nav-link active",
                                            id: "nav-home-tab",
                                            "data-bs-toggle": "tab",
                                            "data-bs-target": "#nav-home",
                                            type: "button",
                                            role: "tab",
                                            "aria-controls": "nav-home",
                                            "aria-selected": "true",
                                            children: "Edit Profile Image"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            class: "nav-link",
                                            id: "nav-home-tabs",
                                            "data-bs-toggle": "tab",
                                            "data-bs-target": "#nav-homes",
                                            type: "button",
                                            role: "tab",
                                            "aria-controls": "nav-homes",
                                            "aria-selected": "false",
                                            children: "Personal Information"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                            class: "nav-link",
                                            id: "nav-profile-tab",
                                            "data-bs-toggle": "tab",
                                            "data-bs-target": "#nav-profile",
                                            type: "button",
                                            role: "tab",
                                            "aria-controls": "nav-profile",
                                            "aria-selected": "false",
                                            children: [
                                                " ",
                                                "Change Password"
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "col-lg-9 col-md-9 col-sm-12 mt_sm--30",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                class: "tab-content tab-content-edit-wrapepr",
                                id: "nav-tabContent",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        class: "tab-pane fade show active",
                                        id: "nav-home",
                                        role: "tabpanel",
                                        "aria-labelledby": "nav-home-tab",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            class: "nuron-information",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                class: "profile-change row g-5",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        class: "profile-left col-lg-4",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                class: "profile-image mb--30",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                        class: "title",
                                                                        children: "Change Your Profile Picture"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                        id: "rbtinput1",
                                                                        src: "/profile/profile-01.jpg",
                                                                        alt: "Profile-NFT"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                class: "button-area",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    class: "brows-file-wrapper",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                            name: "fatima",
                                                                            id: "fatima",
                                                                            type: "file"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                            for: "fatima",
                                                                            title: "No File Choosen",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                class: "text-center color-white",
                                                                                children: "Upload Profile"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        class: "profile-left right col-lg-8",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                class: "profile-image mb--30",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                        class: "title",
                                                                        children: "Change Your Cover Photo"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                        id: "rbtinput2",
                                                                        src: "/profile/cover-04.png",
                                                                        alt: "Profile-NFT"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                class: "button-area",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    class: "brows-file-wrapper",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                            name: "nipa",
                                                                            id: "nipa",
                                                                            type: "file"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                            for: "nipa",
                                                                            title: "No File Choosen",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                class: "text-center color-white",
                                                                                children: "Upload Cover"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        class: "tab-pane fade",
                                        id: "nav-homes",
                                        role: "tabpanel",
                                        "aria-labelledby": "nav-home-tab",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            class: "nuron-information",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    class: "profile-form-wrapper",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            class: "input-two-wrapper mb--15",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    class: "first-name half-wid",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                            for: "contact-name",
                                                                            class: "form-label",
                                                                            children: "First Name"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                            name: "contact-name",
                                                                            id: "contact-name",
                                                                            type: "text",
                                                                            value: "Mr."
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    class: "last-name half-wid",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                            for: "contact-name-last",
                                                                            class: "form-label",
                                                                            children: "Last Name"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                            name: "contact-name",
                                                                            id: "contact-name-last",
                                                                            type: "text",
                                                                            value: "Abdirahman"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            class: "email-area",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                    for: "Email",
                                                                    class: "form-label",
                                                                    children: "Edit Your Email"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                    name: "email",
                                                                    id: "Email",
                                                                    type: "email",
                                                                    value: "example@gmail.com"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    class: "edit-bio-area mt--20",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                            for: "Discription",
                                                            class: "form-label",
                                                            children: "Edit Your Bio"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                                            id: "Discription",
                                                            children: "Hello, I am Dahir, A Front-end Developer..."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    class: "input-two-wrapepr-prifile",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        class: "role-area mt--15",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                for: "Role",
                                                                class: "form-label mb--10",
                                                                children: "Your Role"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                name: "Role",
                                                                id: "Role",
                                                                type: "text",
                                                                value: "Front-end Developer"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    class: "input-two-wrapper mt--15",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            class: "half-wid currency"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            class: "half-wid phone-number",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                    for: "PhoneNumber",
                                                                    class: "form-label",
                                                                    children: "Phone Number"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                    name: "contact-name",
                                                                    id: "PhoneNumber",
                                                                    type: "text",
                                                                    value: "+880100000000"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    class: "input-two-wrapper mt--15",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            class: "half-wid currency"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            class: "half-wid phone-number",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                    for: "PhoneNumbers",
                                                                    class: "form-label",
                                                                    children: "Address"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                    name: "contact-name",
                                                                    id: "PhoneNumbers",
                                                                    type: "text",
                                                                    value: "USA Cidni"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    class: "button-area save-btn-edit",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "#",
                                                            class: "btn btn-primary-alta mr--15",
                                                            onclick: "customAlert.alert('Cancel Edit Profile?')",
                                                            children: "Cancel"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "#",
                                                            class: "btn btn-primary",
                                                            onclick: "customAlert.alert('Successfully Saved Your Profile?')",
                                                            children: "Save"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        class: "tab-pane fade",
                                        id: "nav-profile",
                                        role: "tabpanel",
                                        "aria-labelledby": "nav-profile-tab",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            class: "nuron-information",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    class: "condition",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                            class: "title",
                                                            children: "Create Your Password"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            class: "condition",
                                                            children: "Passwords are a critical part of information and network security. Passwords serve to protect user accounts but a poorly chosen password, if compromised, could put the entire network at risk."
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            class: "email-area",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                    for: "Email2",
                                                                    class: "form-label",
                                                                    children: "Enter Email"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                    name: "email",
                                                                    id: "Email2",
                                                                    type: "email",
                                                                    value: ""
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    class: "input-two-wrapper mt--15",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            class: "old-password half-wid",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                    for: "oldPass",
                                                                    class: "form-label",
                                                                    children: "Enter Old Password"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                    name: "pass",
                                                                    id: "oldPass",
                                                                    type: "password"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            class: "new-password half-wid",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                    for: "NewPass",
                                                                    class: "form-label",
                                                                    children: "Create New Password"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                    name: "password",
                                                                    id: "NewPass",
                                                                    type: "password"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    class: "email-area mt--15",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                            for: "rePass",
                                                            class: "form-label",
                                                            children: "Confirm Password"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            name: "Password",
                                                            id: "rePass",
                                                            type: "password",
                                                            value: ""
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "#",
                                                    class: "btn btn-primary save-btn-edit",
                                                    onclick: "customAlert.alert('Successfully Changed Password?')",
                                                    children: "Save"
                                                })
                                            ]
                                        })
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
/* harmony default export */ const EditProfilepage_EditProfileTwo = (EditProfileTwo);

;// CONCATENATED MODULE: ./PageComponents/EditProfilepage/index.js




;// CONCATENATED MODULE: ./pages/edit-profile.js


//INTERNAL IMPORT


const editProfile = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        class: "template-color-1 nft-body-connect",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Components/* Header */.h4, {}),
            /*#__PURE__*/ jsx_runtime.jsx(EditProfilepage_EditProfileOne, {}),
            /*#__PURE__*/ jsx_runtime.jsx(EditProfilepage_EditProfileTwo, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Components/* Footer */.$_, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Components/* Copyright */.wZ, {})
        ]
    });
};
/* harmony default export */ const edit_profile = (editProfile);


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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,501,10], () => (__webpack_exec__(1123)));
module.exports = __webpack_exports__;

})();