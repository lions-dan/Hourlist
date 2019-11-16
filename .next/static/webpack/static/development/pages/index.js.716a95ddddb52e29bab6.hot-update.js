webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/GlobalStyles */ "./styles/GlobalStyles.js");
/* harmony import */ var _styles_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/button */ "./styles/button.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _MainFrame__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MainFrame */ "./components/MainFrame.js");





var _jsxFileName = "/Users/Daniel/Websites/Hourlist/components/Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;






var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout, _React$Component);

  function Layout(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).call(this, props));
    _this.state = {
      authenticated: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var accessToken = document.location.hash;

      if (accessToken !== "") {
        accessToken = accessToken.split('&').filter(function (el) {
          if (el.match('access_token') !== null) return true;
        })[0].split('=')[1];
        this.setState({
          authenticated: true,
          accessToken: accessToken
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      function authenticateSpotify() {
        var clientID = "05254a545218406db543397b27a55c17";
        var endPoint = "authorize";
        var responseType = "token";
        var scope = "playlist-modify-public%20playlist-modify-private%20user-top-read%20user-library-read%20playlist-read-private";
        var redirectURI = "http://localhost:3000";
        var accessToken;
        console.log("Authenticating");
        var url = "https://accounts.spotify.com/authorize?client_id=" + clientID + "&redirect_uri=" + redirectURI + "&scope=" + scope + "&response_type=token";
        window.location.replace(url);
      }

      if (!this.state.authenticated) {
        return __jsx("div", {
          id: "root",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, __jsx(_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }), __jsx(_styles_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
          onClick: authenticateSpotify,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, " Authenticate Spotify "));
      } else {
        return __jsx("div", {
          id: "root",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, __jsx(_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }), __jsx(_MainFrame__WEBPACK_IMPORTED_MODULE_9__["default"], {
          token: this.state.accessToken,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }));
      }
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.716a95ddddb52e29bab6.hot-update.js.map