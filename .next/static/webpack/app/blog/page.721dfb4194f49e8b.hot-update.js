"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/blog/page",{

/***/ "(app-pages-browser)/./src/app/blog/_components/tech.tsx":
/*!*******************************************!*\
  !*** ./src/app/blog/_components/tech.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_moduleCss_tech_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_components/moduleCss/tech.module.css */ \"(app-pages-browser)/./src/app/blog/_components/moduleCss/tech.module.css\");\n/* harmony import */ var _components_moduleCss_tech_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_moduleCss_tech_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Tech = ()=>{\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [postsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"\".concat(process.env.BASEAPI, \"/blog/posts/tech\"));\n                setPosts(response.data.posts);\n            } catch (error) {\n                console.error(\"Erro ao buscar dados:\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    // Calcula os índices dos posts a serem exibidos com base na página atual\n    const indexOfLastPost = currentPage * postsPerPage;\n    const indexOfFirstPost = indexOfLastPost - postsPerPage;\n    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);\n    // Muda de página\n    const paginate = (pageNumber)=>setCurrentPage(pageNumber);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_components_moduleCss_tech_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_components_moduleCss_tech_module_css__WEBPACK_IMPORTED_MODULE_4___default().tech),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto flex max-w-[58rem] flex-col  items-center space-y-4 text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl\",\n                            children: \"Technology\"\n                        }, void 0, false, {\n                            fileName: \"A:\\\\NETX14VERCELZOD\\\\land2\\\\src\\\\app\\\\blog\\\\_components\\\\tech.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"max-w-[85%] leading-normal text-muted-foreground  sm:text-lg sm:leading-7\",\n                            children: \"News about Technology\"\n                        }, void 0, false, {\n                            fileName: \"A:\\\\NETX14VERCELZOD\\\\land2\\\\src\\\\app\\\\blog\\\\_components\\\\tech.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"A:\\\\NETX14VERCELZOD\\\\land2\\\\src\\\\app\\\\blog\\\\_components\\\\tech.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"A:\\\\NETX14VERCELZOD\\\\land2\\\\src\\\\app\\\\blog\\\\_components\\\\tech.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_components_moduleCss_tech_module_css__WEBPACK_IMPORTED_MODULE_4___default().session),\n                children: [\n                    currentPosts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_components_moduleCss_tech_module_css__WEBPACK_IMPORTED_MODULE_4___default().mainTech),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            className: (_components_moduleCss_tech_module_css__WEBPACK_IMPORTED_MODULE_4___default().img),\n                                            src: post.url,\n                                            alt: post.title,\n                                            width: 500,\n                                            height: 300\n                                        }, void 0, false, {\n                                            fileName: \"A:\\\\NETX14VERCELZOD\\\\land2\\\\src\\\\app\\\\blog\\\\_components\\\\tech.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"A:\\\\NETX14VERCELZOD\\\\land2\\\\src\\\\app\\\\blog\\\\_components\\\\tech.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_components_moduleCss_tech_module_css__WEBPACK_IMPORTED_MODULE_4___default().containerContent),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_components_moduleCss_tech_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                                                children: post.title\n                                            }, void 0, false, {\n                                                fileName: \"A:\\\\NETX14VERCELZOD\\\\land2\\\\src\\\\app\\\\blog\\\\_components\\\\tech.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_components_moduleCss_tech_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),\n                                                children: post.content\n                                            }, void 0, false, {\n                                                fileName: \"A:\\\\NETX14VERCELZOD\\\\land2\\\\src\\\\app\\\\blog\\\\_components\\\\tech.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"A:\\\\NETX14VERCELZOD\\\\land2\\\\src\\\\app\\\\blog\\\\_components\\\\tech.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"A:\\\\NETX14VERCELZOD\\\\land2\\\\src\\\\app\\\\blog\\\\_components\\\\tech.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, undefined)\n                        }, post.id, false, {\n                            fileName: \"A:\\\\NETX14VERCELZOD\\\\land2\\\\src\\\\app\\\\blog\\\\_components\\\\tech.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_components_moduleCss_tech_module_css__WEBPACK_IMPORTED_MODULE_4___default().containerPagination),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_components_moduleCss_tech_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                                onClick: ()=>paginate(currentPage - 1),\n                                disabled: currentPage === 1,\n                                children: \"Anterior\"\n                            }, void 0, false, {\n                                fileName: \"A:\\\\NETX14VERCELZOD\\\\land2\\\\src\\\\app\\\\blog\\\\_components\\\\tech.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_components_moduleCss_tech_module_css__WEBPACK_IMPORTED_MODULE_4___default().pagination),\n                                children: Array.from({\n                                    length: Math.ceil(posts.length / postsPerPage)\n                                }, (_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>paginate(i + 1),\n                                        disabled: currentPage === i + 1,\n                                        className: currentPage === i + 1 ? (_components_moduleCss_tech_module_css__WEBPACK_IMPORTED_MODULE_4___default().currentPage) : \"\",\n                                        children: i + 1\n                                    }, i + 1, false, {\n                                        fileName: \"A:\\\\NETX14VERCELZOD\\\\land2\\\\src\\\\app\\\\blog\\\\_components\\\\tech.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"A:\\\\NETX14VERCELZOD\\\\land2\\\\src\\\\app\\\\blog\\\\_components\\\\tech.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_components_moduleCss_tech_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                                onClick: ()=>paginate(currentPage + 1),\n                                disabled: currentPage === Math.ceil(posts.length / postsPerPage),\n                                children: \"Pr\\xf3ximo\"\n                            }, void 0, false, {\n                                fileName: \"A:\\\\NETX14VERCELZOD\\\\land2\\\\src\\\\app\\\\blog\\\\_components\\\\tech.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"A:\\\\NETX14VERCELZOD\\\\land2\\\\src\\\\app\\\\blog\\\\_components\\\\tech.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"A:\\\\NETX14VERCELZOD\\\\land2\\\\src\\\\app\\\\blog\\\\_components\\\\tech.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"A:\\\\NETX14VERCELZOD\\\\land2\\\\src\\\\app\\\\blog\\\\_components\\\\tech.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Tech, \"xxRavAGu1YtB3+S8Yy8r3TLnhGk=\");\n_c = Tech;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tech);\nvar _c;\n$RefreshReg$(_c, \"Tech\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYmxvZy9fY29tcG9uZW50cy90ZWNoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDa0Q7QUFDVztBQUNwQztBQUNNO0FBYS9CLE1BQU1NLE9BQWlCOztJQUNyQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQVMsRUFBRTtJQUM3QyxNQUFNLENBQUNPLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDUyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDO0lBRWhDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1XLFlBQVk7WUFDaEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1ULDZDQUFLQSxDQUFDVSxHQUFHLENBQUMsR0FBdUIsT0FBcEJDLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxFQUFDO2dCQUN4RFQsU0FBU0ssU0FBU0ssSUFBSSxDQUFDWCxLQUFLO1lBQzlCLEVBQUUsT0FBT1ksT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLHlCQUF5QkE7WUFDekM7UUFDRjtRQUVBUDtJQUNGLEdBQUcsRUFBRTtJQUVMLHlFQUF5RTtJQUN6RSxNQUFNUyxrQkFBa0JaLGNBQWNFO0lBQ3RDLE1BQU1XLG1CQUFtQkQsa0JBQWtCVjtJQUMzQyxNQUFNWSxlQUFlaEIsTUFBTWlCLEtBQUssQ0FBQ0Ysa0JBQWtCRDtJQUVuRCxpQkFBaUI7SUFDakIsTUFBTUksV0FBVyxDQUFDQyxhQUF1QmhCLGVBQWVnQjtJQUV4RCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV3pCLHdGQUFnQjs7MEJBQzlCLDhEQUFDd0I7Z0JBQUlDLFdBQVd6QixtRkFBVzswQkFDekIsNEVBQUN3QjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNHOzRCQUFHSCxXQUFVO3NDQUE4RDs7Ozs7O3NDQUc1RSw4REFBQ0k7NEJBQUVKLFdBQVU7c0NBQTRFOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFNN0YsOERBQUNEO2dCQUFJQyxXQUFXekIsc0ZBQWM7O29CQUUzQm9CLGFBQWFXLEdBQUcsQ0FBQyxDQUFDQyxxQkFDakIsOERBQUNSO3NDQUVDLDRFQUFDQTtnQ0FBSUMsV0FBV3pCLHVGQUFlOztrREFDN0IsOERBQUN3QjtrREFDQyw0RUFBQ3RCLG1EQUFLQTs0Q0FBQ3VCLFdBQVd6QixrRkFBVTs0Q0FBRW1DLEtBQUtILEtBQUtJLEdBQUc7NENBQUVDLEtBQUtMLEtBQUtNLEtBQUs7NENBQUVDLE9BQU87NENBQUtDLFFBQVE7Ozs7Ozs7Ozs7O2tEQUVwRiw4REFBQ2hCO3dDQUFJQyxXQUFXekIsK0ZBQXVCOzswREFDckMsOERBQUN3QjtnREFBSUMsV0FBV3pCLG9GQUFZOzBEQUFHZ0MsS0FBS00sS0FBSzs7Ozs7OzBEQUN6Qyw4REFBQ2Q7Z0RBQUlDLFdBQVd6QixzRkFBYzswREFBR2dDLEtBQUtVLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFSekNWLEtBQUtXLEVBQUU7Ozs7O2tDQWVuQiw4REFBQ25CO3dCQUFJQyxXQUFXekIsa0dBQTBCOzswQ0FDeEMsOERBQUM2QztnQ0FBT3BCLFdBQVd6QixxRkFBYTtnQ0FBRThDLFNBQVMsSUFBTXhCLFNBQVNoQixjQUFjO2dDQUFJeUMsVUFBVXpDLGdCQUFnQjswQ0FBRzs7Ozs7OzBDQUd6Ryw4REFBQ2tCO2dDQUFJQyxXQUFXekIseUZBQWlCOzBDQUNoQ2lELE1BQU1DLElBQUksQ0FBQztvQ0FBRUMsUUFBUUMsS0FBS0MsSUFBSSxDQUFDakQsTUFBTStDLE1BQU0sR0FBRzNDO2dDQUFjLEdBQUcsQ0FBQzhDLEdBQUdDLGtCQUNsRSw4REFBQ1Y7d0NBRUNDLFNBQVMsSUFBTXhCLFNBQVNpQyxJQUFJO3dDQUM1QlIsVUFBVXpDLGdCQUFnQmlELElBQUk7d0NBQzlCOUIsV0FBV25CLGdCQUFnQmlELElBQUksSUFBSXZELDBGQUFrQixHQUFHO2tEQUV2RHVELElBQUk7dUNBTEFBLElBQUk7Ozs7Ozs7Ozs7MENBU2IsOERBQUNWO2dDQUFPcEIsV0FBV3pCLHFGQUFhO2dDQUFFOEMsU0FBUyxJQUFNeEIsU0FBU2hCLGNBQWM7Z0NBQUl5QyxVQUFVekMsZ0JBQWdCOEMsS0FBS0MsSUFBSSxDQUFDakQsTUFBTStDLE1BQU0sR0FBRzNDOzBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPeEo7R0FoRk1MO0tBQUFBO0FBa0ZOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYmxvZy9fY29tcG9uZW50cy90ZWNoLnRzeD8xZTA4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL19jb21wb25lbnRzL21vZHVsZUNzcy90ZWNoLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuXHJcbnR5cGUgUG9zdCA9IHtcclxuICBpZDogbnVtYmVyO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgc2x1Zzogc3RyaW5nO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICB1cmw6IHN0cmluZztcclxuICBkYXRlOiBEYXRlO1xyXG4gIGF1dGhvcjogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgVGVjaDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZTxQb3N0W10+KFtdKTtcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtwb3N0c1BlclBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRUFQSX0vYmxvZy9wb3N0cy90ZWNoYCk7XHJcbiAgICAgICAgc2V0UG9zdHMocmVzcG9uc2UuZGF0YS5wb3N0cyk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBidXNjYXIgZGFkb3M6JywgZXJyb3IpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmZXRjaERhdGEoKVxyXG4gIH0sIFtdKVxyXG5cclxuICAvLyBDYWxjdWxhIG9zIMOtbmRpY2VzIGRvcyBwb3N0cyBhIHNlcmVtIGV4aWJpZG9zIGNvbSBiYXNlIG5hIHDDoWdpbmEgYXR1YWxcclxuICBjb25zdCBpbmRleE9mTGFzdFBvc3QgPSBjdXJyZW50UGFnZSAqIHBvc3RzUGVyUGFnZTtcclxuICBjb25zdCBpbmRleE9mRmlyc3RQb3N0ID0gaW5kZXhPZkxhc3RQb3N0IC0gcG9zdHNQZXJQYWdlO1xyXG4gIGNvbnN0IGN1cnJlbnRQb3N0cyA9IHBvc3RzLnNsaWNlKGluZGV4T2ZGaXJzdFBvc3QsIGluZGV4T2ZMYXN0UG9zdCk7XHJcblxyXG4gIC8vIE11ZGEgZGUgcMOhZ2luYVxyXG4gIGNvbnN0IHBhZ2luYXRlID0gKHBhZ2VOdW1iZXI6IG51bWJlcikgPT4gc2V0Q3VycmVudFBhZ2UocGFnZU51bWJlcik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVjaH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGZsZXggbWF4LXctWzU4cmVtXSBmbGV4LWNvbCAgaXRlbXMtY2VudGVyIHNwYWNlLXktNCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyB0ZXh0LTN4bCBsZWFkaW5nLVsxLjFdIHNtOnRleHQtM3hsIG1kOnRleHQtNnhsXCI+XHJcbiAgICAgICAgICAgIFRlY2hub2xvZ3lcclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYXgtdy1bODUlXSBsZWFkaW5nLW5vcm1hbCB0ZXh0LW11dGVkLWZvcmVncm91bmQgIHNtOnRleHQtbGcgc206bGVhZGluZy03XCI+XHJcbiAgICAgICAgICAgIE5ld3MgYWJvdXQgVGVjaG5vbG9neVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2Vzc2lvbn0+XHJcbiAgICAgICAgey8qIFJlbmRlcml6YSBjYWRhIHBvc3QgaW5kaXZpZHVhbG1lbnRlICovfVxyXG4gICAgICAgIHtjdXJyZW50UG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17cG9zdC5pZH0+XHJcbiAgICAgICAgICAgIHsvKiDDgXJlYSBkbyBwb3N0ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5UZWNofT5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVzLmltZ30gc3JjPXtwb3N0LnVybH0gYWx0PXtwb3N0LnRpdGxlfSB3aWR0aD17NTAwfSBoZWlnaHQ9ezMwMH0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lckNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3Bvc3QudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9Pntwb3N0LmNvbnRlbnR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9IFxyXG5cclxuICAgICAgICB7LyogQ29udHJvbGVzIGRlIHDDoWdpbmEgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJQYWdpbmF0aW9ufT5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiBwYWdpbmF0ZShjdXJyZW50UGFnZSAtIDEpfSBkaXNhYmxlZD17Y3VycmVudFBhZ2UgPT09IDF9PlxyXG4gICAgICAgICAgICBBbnRlcmlvclxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2luYXRpb259PlxyXG4gICAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IE1hdGguY2VpbChwb3N0cy5sZW5ndGggLyBwb3N0c1BlclBhZ2UpIH0sIChfLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBrZXk9e2kgKyAxfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKGkgKyAxKX1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17Y3VycmVudFBhZ2UgPT09IGkgKyAxIH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N1cnJlbnRQYWdlID09PSBpICsgMSA/IHN0eWxlcy5jdXJyZW50UGFnZSA6ICcnfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2kgKyAxfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4gcGFnaW5hdGUoY3VycmVudFBhZ2UgKyAxKX0gZGlzYWJsZWQ9e2N1cnJlbnRQYWdlID09PSBNYXRoLmNlaWwocG9zdHMubGVuZ3RoIC8gcG9zdHNQZXJQYWdlKX0+XHJcbiAgICAgICAgICAgIFByw7N4aW1vXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVjaCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiYXhpb3MiLCJJbWFnZSIsIlRlY2giLCJwb3N0cyIsInNldFBvc3RzIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInBvc3RzUGVyUGFnZSIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwicHJvY2VzcyIsImVudiIsIkJBU0VBUEkiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwiaW5kZXhPZkxhc3RQb3N0IiwiaW5kZXhPZkZpcnN0UG9zdCIsImN1cnJlbnRQb3N0cyIsInNsaWNlIiwicGFnaW5hdGUiLCJwYWdlTnVtYmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGVjaCIsImgyIiwicCIsInNlc3Npb24iLCJtYXAiLCJwb3N0IiwibWFpblRlY2giLCJpbWciLCJzcmMiLCJ1cmwiLCJhbHQiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwiY29udGFpbmVyQ29udGVudCIsImNvbnRlbnQiLCJpZCIsImNvbnRhaW5lclBhZ2luYXRpb24iLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJwYWdpbmF0aW9uIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiTWF0aCIsImNlaWwiLCJfIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/blog/_components/tech.tsx\n"));

/***/ })

});