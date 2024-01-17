"use strict";
(() => {
var exports = {};
exports.id = 612;
exports.ids = [612];
exports.modules = {

/***/ 4201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5501);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9072);





const index = ()=>{
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [properties, setProperties] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { address , contract , connect , createPropertyFunction , getPropertiesData , updatePropertyFunction  } = (0,_context__WEBPACK_IMPORTED_MODULE_3__/* .useStateContext */ .F)();
    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        propertyTitle: "",
        description: "",
        category: "",
        price: "",
        images: "",
        propertyAddress: ""
    });
    const handleFormFieldChange = (fieldName, e)=>{
        setForm({
            ...form,
            [fieldName]: e.target.value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .checkIfImage */ .xg)(form.images, async (exists)=>{
            if (exists) {
                setIsLoading(true);
                await createPropertyFunction({
                    ...form,
                    price: ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.utils.parseUnits(form.price, 18)
                });
                setIsLoading(false);
            } else {
                alert("Provide valid image URL");
                setForm({
                    ...form,
                    images: ""
                });
            }
        });
    };
    //GET DATA
    const fetchProperty = async ()=>{
        setIsLoading(true);
        const data = await getPropertiesData();
        setProperties(data);
        setIsLoading(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (contract) fetchProperty();
    }, [
        address,
        contract
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>connect(),
                children: "Connect"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Create"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        placeholder: "propertyTitle",
                        onChange: (e)=>handleFormFieldChange("propertyTitle", e)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        placeholder: "description",
                        onChange: (e)=>handleFormFieldChange("description", e)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        placeholder: "category",
                        onChange: (e)=>handleFormFieldChange("category", e)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "number",
                        placeholder: "price",
                        onChange: (e)=>handleFormFieldChange("price", e)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "url",
                        placeholder: "images",
                        onChange: (e)=>handleFormFieldChange("images", e)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        placeholder: "propertyAddress",
                        onChange: (e)=>handleFormFieldChange("propertyAddress", e)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        children: "Submit"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>updatePropertyFunction(),
                children: "Update"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ 1982:
/***/ ((module) => {

module.exports = require("ethers");

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
var __webpack_exports__ = __webpack_require__.X(0, [893,501,72], () => (__webpack_exec__(4201)));
module.exports = __webpack_exports__;

})();