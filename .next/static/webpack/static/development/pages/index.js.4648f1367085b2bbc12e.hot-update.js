webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MainFrame.js":
/*!*********************************!*\
  !*** ./components/MainFrame.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _Tracks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Tracks */ "./components/Tracks.js");
/* harmony import */ var _Playlist__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Playlist */ "./components/Playlist.js");
/* harmony import */ var _PlaylistSelector__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./PlaylistSelector */ "./components/PlaylistSelector.js");










var _jsxFileName = "/Users/Daniel/Websites/Hourlist/components/MainFrame.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__["makeStyles"])(function (theme) {
  return {
    typography: {
      padding: theme.spacing(2)
    }
  };
});

function getSpotifyProfile(_x) {
  return _getSpotifyProfile.apply(this, arguments);
}

function _getSpotifyProfile() {
  _getSpotifyProfile = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(token) {
    var apiUrlOne, response, profileObject;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            apiUrlOne = 'https://api.spotify.com/v1/me';
            _context.next = 3;
            return fetch(apiUrlOne, {
              method: 'GET',
              mode: 'cors',
              cache: 'no-cache',
              credentials: 'same-origin',
              headers: {
                'Authorization': 'Bearer ' + token
              }
            });

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            profileObject = _context.sent;
            return _context.abrupt("return", profileObject);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getSpotifyProfile.apply(this, arguments);
}

function addUserLibrary(_x2, _x3) {
  return _addUserLibrary.apply(this, arguments);
}

function _addUserLibrary() {
  _addUserLibrary = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(token, limit) {
    var apiURL, response, libraryObject;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            apiURL = "https://api.spotify.com/v1/me/tracks?limit=" + limit;
            _context2.next = 3;
            return fetch(apiURL, {
              method: 'GET',
              mode: 'cors',
              cache: 'no-cache',
              credentials: 'same-origin',
              headers: {
                'Authorization': 'Bearer ' + token
              }
            });

          case 3:
            response = _context2.sent;
            _context2.next = 6;
            return response.json();

          case 6:
            libraryObject = _context2.sent;
            return _context2.abrupt("return", libraryObject);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _addUserLibrary.apply(this, arguments);
}

function addUserTopTracks(_x4, _x5) {
  return _addUserTopTracks.apply(this, arguments);
}

function _addUserTopTracks() {
  _addUserTopTracks = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(token, limit) {
    var apiURL, response, libraryObject;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            apiURL = "https://api.spotify.com/v1/me/top/tracks?limit=" + limit;
            _context3.next = 3;
            return fetch(apiURL, {
              method: 'GET',
              mode: 'cors',
              cache: 'no-cache',
              credentials: 'same-origin',
              headers: {
                'Authorization': 'Bearer ' + token
              }
            });

          case 3:
            response = _context3.sent;
            _context3.next = 6;
            return response.json();

          case 6:
            libraryObject = _context3.sent;
            return _context3.abrupt("return", libraryObject);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _addUserTopTracks.apply(this, arguments);
}

function addLibraryFeatures(_x6, _x7) {
  return _addLibraryFeatures.apply(this, arguments);
}

function _addLibraryFeatures() {
  _addLibraryFeatures = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(token, tracks) {
    var arrayOfTracks, apiURL, response, libraryObject;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            arrayOfTracks = [];
            tracks.forEach(function (element) {
              arrayOfTracks.push(element.id);
            });
            tracks = arrayOfTracks.toString();
            apiURL = "https://api.spotify.com/v1/audio-features/?ids=" + tracks;
            _context4.next = 6;
            return fetch(apiURL, {
              method: 'GET',
              mode: 'cors',
              cache: 'no-cache',
              credentials: 'same-origin',
              headers: {
                'Authorization': 'Bearer ' + token
              }
            });

          case 6:
            response = _context4.sent;
            _context4.next = 9;
            return response.json();

          case 9:
            libraryObject = _context4.sent;
            return _context4.abrupt("return", libraryObject);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _addLibraryFeatures.apply(this, arguments);
}

var generateReady = false;
var totalTime = 0;

var MainFrame =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MainFrame, _React$Component);

  function MainFrame(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MainFrame);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(MainFrame).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "checkTrackSize", function (dataFromChild) {
      if (dataFromChild >= 60 && _this.state.generateReady == false) {
        console.log("Generate ready!" + dataFromChild);

        _this.setState({
          generateReady: true
        });

        totalTime = dataFromChild;
      }
    });

    _this.state = {
      importedLibrary: false,
      importedTop: false,
      imported: [],
      features: [],
      generateReady: false,
      totalTime: 0,
      renderTable: true,
      pickPlaylist: false,
      open: false,
      setOpen: false,
      featuresGenerated: false,
      user_id: "null"
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MainFrame, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      getSpotifyProfile(this.props.token).then(function (value) {
        _this2.setState({
          user_id: value.id
        });
      });
    }
  }, {
    key: "handleOpen",
    value: function handleOpen() {
      this.setState({
        open: true
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "handleLibraryImport",
    value: function handleLibraryImport() {
      var _this3 = this;

      addUserLibrary(this.props.token, 10).then(function (librarySongs) {
        var trackArray = librarySongs.items.map(function (obj) {
          return obj.track;
        });

        _this3.setState(function (prevState) {
          return {
            imported: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevState.imported), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(trackArray))
          };
        });
      });
      this.setState({
        importedLibrary: true
      });
    }
  }, {
    key: "handleTopImport",
    value: function handleTopImport() {
      var _this4 = this;

      addUserTopTracks(this.props.token, 10).then(function (topTracks) {
        _this4.setState(function (prevState) {
          return {
            imported: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevState.imported), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(topTracks.items))
          };
        });
      });
      this.setState({
        importedTop: true
      });
    }
  }, {
    key: "handleGenerate",
    value: function handleGenerate() {
      var _this5 = this;

      addLibraryFeatures(this.props.token, this.state.imported).then(function (features) {
        var importedSong = _this5.state.imported;
        var count = 0;
        importedSong.forEach(function (element) {
          element.feature = features.audio_features[count];
          count = count + 1;
        });

        _this5.setState({
          imported: importedSong,
          renderTable: false,
          pickPlaylist: true,
          generateReady: false,
          featuresGenerated: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11__["default"], {
        maxWidth: "lg",
        style: {
          padding: "5%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__["default"], {
        style: {
          margin: "5%",
          padding: "5%",
          height: '100%',
          backgroundImage: 'linear-gradient(60deg, #29323c 0%, #485563 100%)',
          display: 'grid'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__["default"], {
        container: true,
        spacing: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__["default"], {
        item: true,
        xs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
        disabled: this.state.importedLibrary,
        variant: "contained",
        size: "large",
        onClick: function onClick() {
          return _this6.handleLibraryImport();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, " Import Saved Tracks ")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__["default"], {
        item: true,
        xs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
        disabled: this.state.importedTop,
        variant: "contained",
        size: "large",
        onClick: function onClick() {
          return _this6.handleTopImport();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, " Import Library Tracks ")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__["default"], {
        item: true,
        xs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
        disabled: !this.state.generateReady,
        variant: "contained",
        size: "large",
        onClick: function onClick() {
          return _this6.handleGenerate();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, " Generate Features ")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__["default"], {
        item: true,
        xs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, __jsx(_PlaylistSelector__WEBPACK_IMPORTED_MODULE_19__["default"], {
        token: this.props.token,
        user_id: this.state.user_id,
        featuresGenerated: !this.state.featuresGenerated,
        importedSong: this.state.imported,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__["default"], {
        item: true,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, this.state.renderTable ? __jsx(_Tracks__WEBPACK_IMPORTED_MODULE_17__["default"], {
        generateReady: this.checkTrackSize,
        tracksImported: this.state.importedLibrary || this.state.importedTop,
        allTracks: this.state.imported,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }) : __jsx(_Playlist__WEBPACK_IMPORTED_MODULE_18__["default"], {
        allTracks: this.state.imported,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      })))));
    }
  }]);

  return MainFrame;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MainFrame);

/***/ })

})
//# sourceMappingURL=index.js.4648f1367085b2bbc12e.hot-update.js.map