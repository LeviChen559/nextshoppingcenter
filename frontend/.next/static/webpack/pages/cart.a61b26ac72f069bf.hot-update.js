"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cart",{

/***/ "./UI/FeeCalculator/index.js":
/*!***********************************!*\
  !*** ./UI/FeeCalculator/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FeeCalculator; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/.pnpm/@mui+material@5.8.5_qsuhhlyfbpdicstla2jcf7xfmy/node_modules/@mui/material/index.js\");\n\n\n\nfunction FeeCalculator(param) {\n    var priceAll1 = param.priceAll;\n    var boxStyle = {\n        borderRadius: \"10px\",\n        border: \"1px solid lightgrey\",\n        padding: \"10px\",\n        width: \"100%\"\n    };\n    var lineStyle = {\n        display: \"flex\",\n        justifyContent: \"space-between\",\n        width: \"100%\"\n    };\n    var lineStyle2 = {\n        display: \"flex\",\n        justifyContent: \"space-between\",\n        width: \"100%\",\n        borderTop: \"1px solid lightgrey\",\n        marginTop: \"5%\",\n        paddingTop: \"5%\"\n    };\n    var shippingFee1 = 20;\n    var tax1 = function(priceAll) {\n        var fee = priceAll / 100 * 1.2;\n        return fee.toFixed(2);\n    };\n    var Summary1 = function(priceAll, tax, shippingFee) {\n        var Summary = priceAll + tax(priceAll) + shippingFee;\n        return Summary;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        sx: boxStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                variant: \"h6\",\n                children: \"Order Summary\"\n            }, void 0, false, {\n                fileName: \"/Users/levichen/Desktop/NextSampleApp/nextshoppingcenter/frontend/UI/FeeCalculator/index.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                sx: lineStyle,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                        children: \"Items:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/levichen/Desktop/NextSampleApp/nextshoppingcenter/frontend/UI/FeeCalculator/index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                        children: priceAll1\n                    }, void 0, false, {\n                        fileName: \"/Users/levichen/Desktop/NextSampleApp/nextshoppingcenter/frontend/UI/FeeCalculator/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/levichen/Desktop/NextSampleApp/nextshoppingcenter/frontend/UI/FeeCalculator/index.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                sx: lineStyle,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                        children: \"Shipping & Handling:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/levichen/Desktop/NextSampleApp/nextshoppingcenter/frontend/UI/FeeCalculator/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                        children: shippingFee1\n                    }, void 0, false, {\n                        fileName: \"/Users/levichen/Desktop/NextSampleApp/nextshoppingcenter/frontend/UI/FeeCalculator/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/levichen/Desktop/NextSampleApp/nextshoppingcenter/frontend/UI/FeeCalculator/index.js\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                sx: lineStyle,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                        children: \"Total before tax:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/levichen/Desktop/NextSampleApp/nextshoppingcenter/frontend/UI/FeeCalculator/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                        children: priceAll1 + shippingFee1\n                    }, void 0, false, {\n                        fileName: \"/Users/levichen/Desktop/NextSampleApp/nextshoppingcenter/frontend/UI/FeeCalculator/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/levichen/Desktop/NextSampleApp/nextshoppingcenter/frontend/UI/FeeCalculator/index.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                sx: lineStyle,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                        children: \"Estimated GST/HST:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/levichen/Desktop/NextSampleApp/nextshoppingcenter/frontend/UI/FeeCalculator/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                        children: tax1(priceAll1)\n                    }, void 0, false, {\n                        fileName: \"/Users/levichen/Desktop/NextSampleApp/nextshoppingcenter/frontend/UI/FeeCalculator/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/levichen/Desktop/NextSampleApp/nextshoppingcenter/frontend/UI/FeeCalculator/index.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                sx: lineStyle,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                        children: \"Estimated PST/RST/QST:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/levichen/Desktop/NextSampleApp/nextshoppingcenter/frontend/UI/FeeCalculator/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                        children: \"0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/levichen/Desktop/NextSampleApp/nextshoppingcenter/frontend/UI/FeeCalculator/index.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/levichen/Desktop/NextSampleApp/nextshoppingcenter/frontend/UI/FeeCalculator/index.js\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                sx: lineStyle2,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                        variant: \"h5\",\n                        children: \"Order Total:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/levichen/Desktop/NextSampleApp/nextshoppingcenter/frontend/UI/FeeCalculator/index.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                        children: Summary1()\n                    }, void 0, false, {\n                        fileName: \"/Users/levichen/Desktop/NextSampleApp/nextshoppingcenter/frontend/UI/FeeCalculator/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/levichen/Desktop/NextSampleApp/nextshoppingcenter/frontend/UI/FeeCalculator/index.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/levichen/Desktop/NextSampleApp/nextshoppingcenter/frontend/UI/FeeCalculator/index.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n};\n_c = FeeCalculator;\nvar _c;\n$RefreshReg$(_c, \"FeeCalculator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0NBQUVtQixRQUFPLEVBQUU7Ozs7OzRCQUFjOzs7Ozs7b0JBQzlCOzs7Ozs7WUFDSixDQUNQO0NBQ0Y7QUFuRHVCbEIsS0FBQUEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9VSS9GZWVDYWxjdWxhdG9yL2luZGV4LmpzP2U0YWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVlQ2FsY3VsYXRvcih7cHJpY2VBbGx9KSB7XG4gICAgY29uc3QgYm94U3R5bGU9e1xuICAgICAgICBib3JkZXJSYWRpdXM6XCIxMHB4XCIsYm9yZGVyOlwiMXB4IHNvbGlkIGxpZ2h0Z3JleVwiLCBwYWRkaW5nOlwiMTBweFwiLHdpZHRoOlwiMTAwJVwiXG4gICAgfVxuICAgIGNvbnN0IGxpbmVTdHlsZT17XG4gICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1iZXR3ZWVuXCIsd2lkdGg6XCIxMDAlXCJcbiAgICB9XG4gICAgY29uc3QgbGluZVN0eWxlMj17XG4gICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1iZXR3ZWVuXCIsd2lkdGg6XCIxMDAlXCIsYm9yZGVyVG9wOlwiMXB4IHNvbGlkIGxpZ2h0Z3JleVwiLFxuICAgICAgICBtYXJnaW5Ub3A6XCI1JVwiLHBhZGRpbmdUb3A6XCI1JVwiXG4gICAgfVxuY29uc3Qgc2hpcHBpbmdGZWU9MjBcblxuY29uc3QgdGF4PShwcmljZUFsbCk9PntcbiAgIGxldCBmZWU9IHByaWNlQWxsLzEwMCoxLjJcbiAgICByZXR1cm4gZmVlLnRvRml4ZWQoMilcbn1cblxuY29uc3QgU3VtbWFyeT0ocHJpY2VBbGwsdGF4LHNoaXBwaW5nRmVlKT0+e1xuIGxldCBTdW1tYXJ5ID1wcmljZUFsbCt0YXgocHJpY2VBbGwpK3NoaXBwaW5nRmVlXG4gcmV0dXJuIFN1bW1hcnlcbn1cbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXtib3hTdHlsZX0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2Jz5PcmRlciBTdW1tYXJ5PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8Qm94IHN4PXtsaW5lU3R5bGV9PlxuICAgICAgICA8VHlwb2dyYXBoeT5JdGVtczo8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5PntwcmljZUFsbH08L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IHN4PXtsaW5lU3R5bGV9PlxuICAgICAgICA8VHlwb2dyYXBoeT5TaGlwcGluZyAmIEhhbmRsaW5nOjwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHk+e3NoaXBwaW5nRmVlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggc3g9e2xpbmVTdHlsZX0+XG4gICAgICAgIDxUeXBvZ3JhcGh5PlRvdGFsIGJlZm9yZSB0YXg6PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeT57cHJpY2VBbGwrc2hpcHBpbmdGZWV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBzeD17bGluZVN0eWxlfT5cbiAgICAgICAgPFR5cG9ncmFwaHk+RXN0aW1hdGVkIEdTVC9IU1Q6PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeT57IHRheChwcmljZUFsbCl9PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBzeD17bGluZVN0eWxlfT5cbiAgICAgICAgPFR5cG9ncmFwaHk+RXN0aW1hdGVkIFBTVC9SU1QvUVNUOjwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHk+MDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggc3g9e2xpbmVTdHlsZTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSAgdmFyaWFudD0naDUnPk9yZGVyIFRvdGFsOjwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHk+e1N1bW1hcnkoKX08L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJUeXBvZ3JhcGh5IiwiRmVlQ2FsY3VsYXRvciIsInByaWNlQWxsIiwiYm94U3R5bGUiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJwYWRkaW5nIiwid2lkdGgiLCJsaW5lU3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJsaW5lU3R5bGUyIiwiYm9yZGVyVG9wIiwibWFyZ2luVG9wIiwicGFkZGluZ1RvcCIsInNoaXBwaW5nRmVlIiwidGF4IiwiZmVlIiwidG9GaXhlZCIsIlN1bW1hcnkiLCJzeCIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./UI/FeeCalculator/index.js\n");

/***/ })

});