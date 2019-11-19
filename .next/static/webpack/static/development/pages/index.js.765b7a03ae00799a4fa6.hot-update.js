webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PreviewList.js":
/*!***********************************!*\
  !*** ./components/PreviewList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PreviewList; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "./node_modules/@material-ui/core/esm/ListSubheader/index.js");

var _jsxFileName = "/Users/Daniel/Websites/Hourlist/components/PreviewList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      color: 'black',
      height: '200px',
      maxHeight: 200
    },
    listSection: {
      backgroundColor: 'inherit'
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0
    }
  };
});
function PreviewList(props) {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      list = _React$useState2[0],
      setList = _React$useState2[1];

  var updateTimer = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);

  function setUpdate() {
    setList([]);
    updateTimer.current = setTimeout(function () {
      setList(props.sortedList);
      updateTimer.current = null;
    }, 1000);
  }

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    return function () {
      if (updateTimer.current) {
        clearTimeout(updateTimer.current);
      }
    };
  }, []);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (!updateTimer.current) setUpdate();
  }, [props.sortedList]);
  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.root,
    subheader: __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("li", {
    key: "".concat(props.sectionId),
    className: classes.listSection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("ul", {
    className: classes.ul,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Build Up Generated Playlist"), list.map(function (item, index) {
    return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        color: 'black'
      },
      key: item.id + index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__["default"], {
      primary: "".concat(item.name, " by ").concat(item.artists[0].name),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }));
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.765b7a03ae00799a4fa6.hot-update.js.map