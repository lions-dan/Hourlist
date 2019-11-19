webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ForceUpdate.js":
/*!***********************************!*\
  !*** ./components/ForceUpdate.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useForceUpdate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useForceUpdate() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      setTick = _useState[1];

  var update = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setTick(function (tick) {
      return tick + 1;
    });
  }, []);
  return update;
}

/***/ })

})
//# sourceMappingURL=index.js.14852492c3873e176f2a.hot-update.js.map