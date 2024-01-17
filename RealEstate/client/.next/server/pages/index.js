"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PageComponents_Components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1010);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5501);


///INTERNAL IMPORT

///INTERNAL IMPORT


const index = ()=>{
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [properties, setProperties] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { currentAccount , getPropertiesData  } = (0,_context__WEBPACK_IMPORTED_MODULE_3__/* .useStateContext */ .F)();
    //GET DATA
    const fetchProperty = async ()=>{
        setIsLoading(true);
        const data = await getPropertiesData();
        setProperties(data);
        setIsLoading(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchProperty();
    }, []);
    //CATEGORIES
    const housing = [];
    const rental = [];
    const farmhouse = [];
    const office = [];
    const commercial = [];
    const country = [];
    if (!isLoading) {
        properties?.map((el)=>{
            if (el.category === "country") {
                country.push(el);
            } else if (el.category === "Commercial") {
                commercial.push(el);
            } else if (el.category === "Office") {
                office.push(el);
            } else if (el.category === "Farmhouse") {
                farmhouse.push(el);
            } else if (el.category === "Rental") {
                rental.push(el);
            } else if (el.category === "Housing") {
                housing.push(el);
            }
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        class: "template-color-1 nft-body-connect",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PageComponents_Components__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .h4, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PageComponents_Components__WEBPACK_IMPORTED_MODULE_2__/* .Banner */ .jL, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PageComponents_Components__WEBPACK_IMPORTED_MODULE_2__/* .Live */ .vk, {
                properties: properties
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PageComponents_Components__WEBPACK_IMPORTED_MODULE_2__/* .Service */ .t6, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PageComponents_Components__WEBPACK_IMPORTED_MODULE_2__/* .Product */ .xs, {
                properties: properties
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PageComponents_Components__WEBPACK_IMPORTED_MODULE_2__/* .Collection */ .FE, {
                housing: housing?.length,
                rental: rental?.length,
                farmhouse: farmhouse?.length,
                office: office?.length
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PageComponents_Components__WEBPACK_IMPORTED_MODULE_2__/* .Footer */ .$_, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PageComponents_Components__WEBPACK_IMPORTED_MODULE_2__/* .Copyright */ .wZ, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,501,10], () => (__webpack_exec__(6616)));
module.exports = __webpack_exports__;

})();