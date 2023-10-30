"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Nav.tsx":
/*!****************************!*\
  !*** ./components/Nav.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! globals.css */ \"./globals.css\");\n/* harmony import */ var globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Nav = ()=>{\n    _s();\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const toggleMenu = ()=>{\n        setIsMenuOpen(!isMenuOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-black fixed w-full border top-0 z-50 \".concat(isMenuOpen ? \"\" : \"border-b\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto flex justify-between items-center p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    className: \"transform transition-transform duration-300 text-white ease-in-out hover:scale-110\",\n                    children: \"Raft\"\n                }, void 0, false, {\n                    fileName: \"/home/amos/waap-frontend/components/Nav.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"md:hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: toggleMenu,\n                        children: isMenuOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaTimes, {\n                            size: 24,\n                            color: \"white\"\n                        }, void 0, false, {\n                            fileName: \"/home/amos/waap-frontend/components/Nav.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 15\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaBars, {\n                            size: 24,\n                            color: \"white\"\n                        }, void 0, false, {\n                            fileName: \"/home/amos/waap-frontend/components/Nav.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/amos/waap-frontend/components/Nav.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/amos/waap-frontend/components/Nav.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined),\n                isMenuOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"md:hidden absolute top-0 right-0 left-0 bg-army\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: toggleMenu,\n                            className: \"absolute top-4 right-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaTimes, {\n                                size: 24,\n                                color: \"white\"\n                            }, void 0, false, {\n                                fileName: \"/home/amos/waap-frontend/components/Nav.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/amos/waap-frontend/components/Nav.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"mt-10 text-center mt-20\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\",\n                                className: \"text-ghostwhite text-lg hover:text-gray-300 p-3\",\n                                onClick: toggleMenu,\n                                children: \"Solutions\"\n                            }, void 0, false, {\n                                fileName: \"/home/amos/waap-frontend/components/Nav.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/amos/waap-frontend/components/Nav.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"mt-10 text-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/learn\",\n                                className: \"text-ghostwhite text-lg hover:text-gray-300 p-3\",\n                                onClick: toggleMenu,\n                                children: \"learn\"\n                            }, void 0, false, {\n                                fileName: \"/home/amos/waap-frontend/components/Nav.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/amos/waap-frontend/components/Nav.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"mt-10 text-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/about\",\n                                className: \"text-ghostwhite text-lg hover:text-gray-300\",\n                                onClick: toggleMenu,\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/home/amos/waap-frontend/components/Nav.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/amos/waap-frontend/components/Nav.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/amos/waap-frontend/components/Nav.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border w-4/5 flex justify-around\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"hidden md:flex flex border md:w-3/5  md:space-x-12\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/\",\n                                        className: \"text-ghostwhite text-lg hover:text-gray-300\",\n                                        children: \"Solutions\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/amos/waap-frontend/components/Nav.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/amos/waap-frontend/components/Nav.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/learn\",\n                                        className: \"text-ghostwhite text-lg hover:text-gray-300\",\n                                        children: \"Learn\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/amos/waap-frontend/components/Nav.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/amos/waap-frontend/components/Nav.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/about\",\n                                        className: \"text-ghostwhite text-lg hover:text-gray-300\",\n                                        children: \"About\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/amos/waap-frontend/components/Nav.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/amos/waap-frontend/components/Nav.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/amos/waap-frontend/components/Nav.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-white\",\n                            children: \"Hello\"\n                        }, void 0, false, {\n                            fileName: \"/home/amos/waap-frontend/components/Nav.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/amos/waap-frontend/components/Nav.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/amos/waap-frontend/components/Nav.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/amos/waap-frontend/components/Nav.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Nav, \"vK10R+uCyHfZ4DZVnxbYkMWJB8g=\");\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNkI7QUFDUjtBQUVtQjtBQUVTO0FBRWpELE1BQU1LLE1BQWdCOztJQUNwQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBLENBQUM7SUFFN0MsTUFBTU0sYUFBYTtRQUNqQkQsY0FBYyxDQUFDRDtJQUNqQjtJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFXLDJDQUF3RSxPQUE3QkosYUFBYSxLQUFLO2tCQUMzRSw0RUFBQ0s7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNWLGtEQUFJQTtvQkFBQ1ksTUFBSztvQkFBSUYsV0FBVTs4QkFBcUY7Ozs7Ozs4QkFHOUcsOERBQUNDO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDRzt3QkFBT0MsU0FBU047a0NBQ2RGLDJCQUNDLDhEQUFDRixtREFBT0E7NEJBQUNXLE1BQU07NEJBQUlDLE9BQU07Ozs7O3NEQUV6Qiw4REFBQ2Isa0RBQU1BOzRCQUFDWSxNQUFNOzRCQUFJQyxPQUFNOzs7Ozs7Ozs7Ozs7Ozs7O2dCQUk3QlYsMkJBQ0MsOERBQUNXO29CQUFHUCxXQUFVOztzQ0FDWiw4REFBQ0c7NEJBQU9DLFNBQVNOOzRCQUFZRSxXQUFVO3NDQUNyQyw0RUFBQ04sbURBQU9BO2dDQUFDVyxNQUFNO2dDQUFJQyxPQUFNOzs7Ozs7Ozs7OztzQ0FFM0IsOERBQUNFOzRCQUFHUixXQUFVO3NDQUNaLDRFQUFDVixrREFBSUE7Z0NBQUNZLE1BQUs7Z0NBQUlGLFdBQVU7Z0NBQWtESSxTQUFTTjswQ0FBWTs7Ozs7Ozs7Ozs7c0NBSWxHLDhEQUFDVTs0QkFBR1IsV0FBVTtzQ0FDWiw0RUFBQ1Ysa0RBQUlBO2dDQUFDWSxNQUFLO2dDQUFTRixXQUFVO2dDQUFrREksU0FBU047MENBQVk7Ozs7Ozs7Ozs7O3NDQUl2Ryw4REFBQ1U7NEJBQUdSLFdBQVU7c0NBQ1osNEVBQUNWLGtEQUFJQTtnQ0FBQ1ksTUFBSztnQ0FBU0YsV0FBVTtnQ0FBOENJLFNBQVNOOzBDQUFZOzs7Ozs7Ozs7Ozs7Ozs7OzhDQU1yRyw4REFBQ0c7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDTzs0QkFBR1AsV0FBVTs7OENBQ2QsOERBQUNROzhDQUNDLDRFQUFDbEIsa0RBQUlBO3dDQUFDWSxNQUFLO3dDQUFJRixXQUFVO2tEQUE4Qzs7Ozs7Ozs7Ozs7OENBSXpFLDhEQUFDUTs4Q0FDQyw0RUFBQ2xCLGtEQUFJQTt3Q0FBQ1ksTUFBSzt3Q0FBU0YsV0FBVTtrREFBOEM7Ozs7Ozs7Ozs7OzhDQUk5RSw4REFBQ1E7OENBQ0MsNEVBQUNsQixrREFBSUE7d0NBQUNZLE1BQUs7d0NBQVNGLFdBQVU7a0RBQThDOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FLaEYsOERBQUNHOzRCQUFPSCxXQUFVO3NDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU96QztHQXJFTUw7S0FBQUE7QUF1RU4sK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYudHN4P2U2MzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCAnZ2xvYmFscy5jc3MnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBGYUJhcnMsIEZhVGltZXMgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5cbmNvbnN0IE5hdjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc01lbnVPcGVuLCBzZXRJc01lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xuICAgIHNldElzTWVudU9wZW4oIWlzTWVudU9wZW4pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9e2BiZy1ibGFjayBmaXhlZCB3LWZ1bGwgYm9yZGVyIHRvcC0wIHotNTAgJHtpc01lbnVPcGVuID8gJycgOiAnYm9yZGVyLWInfWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcC00XCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwidHJhbnNmb3JtIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCB0ZXh0LXdoaXRlIGVhc2UtaW4tb3V0IGhvdmVyOnNjYWxlLTExMFwiPlxuICAgICAgICAgIFJhZnRcbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmhpZGRlblwiPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlTWVudX0+XG4gICAgICAgICAgICB7aXNNZW51T3BlbiA/IChcbiAgICAgICAgICAgICAgPEZhVGltZXMgc2l6ZT17MjR9IGNvbG9yPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEZhQmFycyBzaXplPXsyNH0gY29sb3I9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2lzTWVudU9wZW4gPyAoXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1kOmhpZGRlbiBhYnNvbHV0ZSB0b3AtMCByaWdodC0wIGxlZnQtMCBiZy1hcm15XCI+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IHJpZ2h0LTRcIj5cbiAgICAgICAgICAgICAgPEZhVGltZXMgc2l6ZT17MjR9IGNvbG9yPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtdC0xMCB0ZXh0LWNlbnRlciBtdC0yMCc+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwidGV4dC1naG9zdHdoaXRlIHRleHQtbGcgaG92ZXI6dGV4dC1ncmF5LTMwMCBwLTNcIiBvbkNsaWNrPXt0b2dnbGVNZW51fT5cbiAgICAgICAgICAgICAgICBTb2x1dGlvbnNcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J210LTEwIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sZWFyblwiIGNsYXNzTmFtZT1cInRleHQtZ2hvc3R3aGl0ZSB0ZXh0LWxnIGhvdmVyOnRleHQtZ3JheS0zMDAgcC0zXCIgb25DbGljaz17dG9nZ2xlTWVudX0+XG4gICAgICAgICAgICAgICAgbGVhcm5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J210LTEwIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiIGNsYXNzTmFtZT1cInRleHQtZ2hvc3R3aGl0ZSB0ZXh0LWxnIGhvdmVyOnRleHQtZ3JheS0zMDBcIiBvbkNsaWNrPXt0b2dnbGVNZW51fT5cbiAgICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JvcmRlciB3LTQvNSBmbGV4IGp1c3RpZnktYXJvdW5kJz5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBmbGV4IGJvcmRlciBtZDp3LTMvNSAgbWQ6c3BhY2UteC0xMlwiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInRleHQtZ2hvc3R3aGl0ZSB0ZXh0LWxnIGhvdmVyOnRleHQtZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICBTb2x1dGlvbnNcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sZWFyblwiIGNsYXNzTmFtZT1cInRleHQtZ2hvc3R3aGl0ZSB0ZXh0LWxnIGhvdmVyOnRleHQtZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICBMZWFyblxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCIgY2xhc3NOYW1lPVwidGV4dC1naG9zdHdoaXRlIHRleHQtbGcgaG92ZXI6dGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+SGVsbG88L2J1dHRvbj5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlU3RhdGUiLCJGYUJhcnMiLCJGYVRpbWVzIiwiTmF2IiwiaXNNZW51T3BlbiIsInNldElzTWVudU9wZW4iLCJ0b2dnbGVNZW51IiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiaHJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzaXplIiwiY29sb3IiLCJ1bCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav.tsx\n"));

/***/ })

});