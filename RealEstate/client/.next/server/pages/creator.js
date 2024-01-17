"use strict";
(() => {
var exports = {};
exports.id = 881;
exports.ids = [881];
exports.modules = {

/***/ 3486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_creator)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./PageComponents/CreatorPage/CreatorOne.jsx

const CreatorOne = ({ creators  })=>{
    return null;
};
/* harmony default export */ const CreatorPage_CreatorOne = (CreatorOne); //Future implementation

;// CONCATENATED MODULE: ./PageComponents/CreatorPage/index.js



// EXTERNAL MODULE: ./context/index.js + 2 modules
var context = __webpack_require__(5501);
// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(9072);
// EXTERNAL MODULE: ./PageComponents/Components/index.js + 9 modules
var Components = __webpack_require__(1010);
;// CONCATENATED MODULE: ./pages/creator.js


//INTERNAL IMPORT




const creator = ()=>{
    const [isLoading, setIsLoading] = (0,external_react_.useState)(false);
    const [properties, setProperties] = (0,external_react_.useState)([]);
    const { getPropertiesData  } = (0,context/* useStateContext */.F)();
    //GET DATA
    const fetchProperty = async ()=>{
        setIsLoading(true);
        const data = await getPropertiesData();
        setProperties(data);
        setIsLoading(false);
    };
    (0,external_react_.useEffect)(()=>{
        fetchProperty();
    });
    const creators = (0,utils/* getTopCreators */.W_)(properties);
    console.log(creators);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        class: "template-color-1 nft-body-connect",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Components/* Header */.h4, {}),
            /*#__PURE__*/ jsx_runtime.jsx(CreatorPage_CreatorOne, {
                creators: creators
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Components/* Footer */.$_, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Components/* Copyright */.wZ, {})
        ]
    });
};
/* harmony default export */ const pages_creator = (creator);


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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,501,10,72], () => (__webpack_exec__(3486)));
module.exports = __webpack_exports__;

})();