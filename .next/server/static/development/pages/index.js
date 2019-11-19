module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/GlobalStyles */ "./styles/GlobalStyles.js");
/* harmony import */ var _styles_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/button */ "./styles/button.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MainFrame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MainFrame */ "./components/MainFrame.js");
var _jsxFileName = "/Users/Daniel/Websites/Hourlist/components/Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class Layout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    };
  }

  componentDidMount() {
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

  render() {
    function authenticateSpotify() {
      const clientID = "05254a545218406db543397b27a55c17";
      const endPoint = "authorize";
      const responseType = "token";
      const scope = "playlist-modify-public%20playlist-modify-private%20user-top-read%20user-library-read%20playlist-read-private";
      const redirectURI = "http://localhost:3000";
      var accessToken;
      console.log("Authenticating");
      const url = "https://accounts.spotify.com/authorize?client_id=" + clientID + "&redirect_uri=" + redirectURI + "&scope=" + scope + "&response_type=token";
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
      }, __jsx(_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), __jsx(_styles_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      }, __jsx(_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), __jsx(_MainFrame__WEBPACK_IMPORTED_MODULE_4__["default"], {
        token: this.state.accessToken,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }));
    }
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/MainFrame.js":
/*!*********************************!*\
  !*** ./components/MainFrame.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Tracks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Tracks */ "./components/Tracks.js");
/* harmony import */ var _Playlist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Playlist */ "./components/Playlist.js");
/* harmony import */ var _PlaylistSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PlaylistSelector */ "./components/PlaylistSelector.js");

var _jsxFileName = "/Users/Daniel/Websites/Hourlist/components/MainFrame.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  typography: {
    padding: theme.spacing(2)
  }
}));

async function getSpotifyProfile(token) {
  const apiUrlOne = 'https://api.spotify.com/v1/me';
  const response = await fetch(apiUrlOne, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
  const profileObject = await response.json();
  return profileObject;
}

async function addUserLibrary(token, limit) {
  const apiURL = "https://api.spotify.com/v1/me/tracks?limit=" + limit;
  const response = await fetch(apiURL, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
  const libraryObject = await response.json();
  return libraryObject;
}

async function addUserTopTracks(token, limit) {
  const apiURL = "https://api.spotify.com/v1/me/top/tracks?limit=" + limit;
  const response = await fetch(apiURL, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
  const libraryObject = await response.json();
  return libraryObject;
}

async function addLibraryFeatures(token, tracks) {
  var arrayOfTracks = [];
  tracks.forEach(element => {
    arrayOfTracks.push(element.id);
  });
  tracks = arrayOfTracks.toString();
  const apiURL = "https://api.spotify.com/v1/audio-features/?ids=" + tracks;
  const response = await fetch(apiURL, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
  const libraryObject = await response.json();
  return libraryObject;
}

var generateReady = false;
var totalTime = 0;

class MainFrame extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "checkTrackSize", dataFromChild => {
      if (dataFromChild >= 60 && this.state.generateReady == false) {
        this.setState({
          generateReady: true
        });
        totalTime = dataFromChild;
      }
    });

    this.state = {
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
  }

  componentDidMount() {
    getSpotifyProfile(this.props.token).then(value => {
      console.log(value);
      this.setState({
        user_id: value.id
      });
    });
  }

  handleOpen() {
    this.setState({
      open: true
    });
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  handleLibraryImport() {
    addUserLibrary(this.props.token, 50).then(librarySongs => {
      const trackArray = librarySongs.items.map(function (obj) {
        return obj.track;
      });
      this.setState(prevState => ({
        imported: [...prevState.imported, ...trackArray]
      }));
    });
    this.setState({
      importedLibrary: true
    });
  }

  handleTopImport() {
    addUserTopTracks(this.props.token, 50).then(topTracks => {
      this.setState(prevState => ({
        imported: [...prevState.imported, ...topTracks.items]
      }));
    });
    this.setState({
      importedTop: true
    });
  }

  handleGenerate() {
    addLibraryFeatures(this.props.token, this.state.imported).then(features => {
      let importedSong = this.state.imported;
      var count = 0;
      importedSong.forEach(element => {
        element.feature = features.audio_features[count];
        count = count + 1;
      });
      this.setState({
        imported: importedSong,
        renderTable: false,
        pickPlaylist: true,
        generateReady: false,
        featuresGenerated: true
      });
    });
  }

  render() {
    return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default.a, {
      maxWidth: "lg",
      style: {
        padding: "5%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: {
        margin: "5%",
        padding: "5%",
        height: '100%',
        backgroundImage: 'linear-gradient(60deg, #29323c 0%, #485563 100%)',
        display: 'grid'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
      container: true,
      spacing: 5,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
      item: true,
      xs: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
      disabled: this.state.importedLibrary,
      variant: "contained",
      size: "large",
      onClick: () => this.handleLibraryImport(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, " Import Saved Tracks ")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
      item: true,
      xs: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
      disabled: this.state.importedTop,
      variant: "contained",
      size: "large",
      onClick: () => this.handleTopImport(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, " Import Library Tracks ")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
      item: true,
      xs: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
      disabled: !this.state.generateReady,
      variant: "contained",
      size: "large",
      onClick: () => this.handleGenerate(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, " Generate Features ")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
      item: true,
      xs: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, __jsx(_PlaylistSelector__WEBPACK_IMPORTED_MODULE_10__["default"], {
      token: this.props.token,
      user_id: this.state.user_id,
      featuresGenerated: !this.state.featuresGenerated,
      importedSong: this.state.imported,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
      item: true,
      xs: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, this.state.renderTable ? __jsx(_Tracks__WEBPACK_IMPORTED_MODULE_8__["default"], {
      generateReady: this.checkTrackSize,
      tracksImported: this.state.importedLibrary || this.state.importedTop,
      allTracks: this.state.imported,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }) : __jsx(_Playlist__WEBPACK_IMPORTED_MODULE_9__["default"], {
      allTracks: this.state.imported,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MainFrame);

/***/ }),

/***/ "./components/Playlist.js":
/*!********************************!*\
  !*** ./components/Playlist.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Playlist; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/AddBox */ "@material-ui/icons/AddBox");
/* harmony import */ var _material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ArrowUpward */ "@material-ui/icons/ArrowUpward");
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Check */ "@material-ui/icons/Check");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "@material-ui/icons/ChevronLeft");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "@material-ui/icons/ChevronRight");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Clear */ "@material-ui/icons/Clear");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/DeleteOutline */ "@material-ui/icons/DeleteOutline");
/* harmony import */ var _material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Edit */ "@material-ui/icons/Edit");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/FilterList */ "@material-ui/icons/FilterList");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/FirstPage */ "@material-ui/icons/FirstPage");
/* harmony import */ var _material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/LastPage */ "@material-ui/icons/LastPage");
/* harmony import */ var _material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Remove */ "@material-ui/icons/Remove");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_SaveAlt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/SaveAlt */ "@material-ui/icons/SaveAlt");
/* harmony import */ var _material_ui_icons_SaveAlt__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SaveAlt__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_ViewColumn__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/ViewColumn */ "@material-ui/icons/ViewColumn");
/* harmony import */ var _material_ui_icons_ViewColumn__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewColumn__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! material-table */ "material-table");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/system */ "@material-ui/system");
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_system__WEBPACK_IMPORTED_MODULE_19__);

var _jsxFileName = "/Users/Daniel/Websites/Hourlist/components/Playlist.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




















const tableIcons = {
  Add: Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }))),
  Check: Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }))),
  Clear: Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_8___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }))),
  Delete: Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }))),
  DetailPanel: Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }))),
  Edit: Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }))),
  Export: Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_SaveAlt__WEBPACK_IMPORTED_MODULE_15___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }))),
  Filter: Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_11___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }))),
  FirstPage: Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_12___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }))),
  LastPage: Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_13___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }))),
  NextPage: Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }))),
  PreviousPage: Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_6___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }))),
  ResetSearch: Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_8___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }))),
  Search: Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_16___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }))),
  SortArrow: Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }))),
  ThirdStateCheck: Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_14___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }))),
  ViewColumn: Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_ViewColumn__WEBPACK_IMPORTED_MODULE_17___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  })))
};

function createData(name, artists, danceAmount, acoustiAmount, liveAmount, energyAmount, loudAmount, instrumentAmount, tempoAmount) {
  var arrayOfNames = [];
  artists.forEach(element => {
    arrayOfNames.push(element.name);
  });
  artists = arrayOfNames.toString();
  danceAmount = danceAmount.toFixed(2);
  energyAmount = energyAmount.toFixed(2);
  loudAmount = loudAmount.toFixed(2);
  instrumentAmount = instrumentAmount.toFixed(2);
  tempoAmount = tempoAmount.toFixed(2);
  return {
    name,
    artists,
    danceAmount,
    liveAmount,
    energyAmount,
    loudAmount,
    instrumentAmount,
    tempoAmount
  };
}
/*

*
acousticness: 0.0126
danceability: 0.864
duration_ms: 189107
energy: 0.877
instrumentalness: 0.0000146
liveness: 0.0831
loudness: -2.418
speechiness: 0.0644
tempo: 103.985
track_href: "https://api.spotify.com/v1/tracks/4cyUTdVRJNxjcI9W4TezDW"
*/


class Playlist extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: this.props.allTracks
    };
  }

  render() {
    var rowsOfData = [];
    console.log(this.props.allTracks);
    rowsOfData = this.props.allTracks.map(({
      feature: {
        danceability: danceAmount
      },
      feature: {
        acousticness: acoustiAmount
      },
      feature: {
        liveiness: liveAmount
      },
      feature: {
        loudness: loudAmount
      },
      feature: {
        energy: energyAmount
      },
      feature: {
        instrumentalness: instrumentAmount
      },
      feature: {
        tempo: tempoAmount
      },
      name,
      artists
    }) => createData(name, artists, danceAmount, acoustiAmount, liveAmount, energyAmount, loudAmount, instrumentAmount, tempoAmount));
    return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default.a, {
      fixed: true,
      style: {
        height: '450px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx(material_table__WEBPACK_IMPORTED_MODULE_18___default.a, {
      style: {
        background: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
        maxWidth: "100%",
        color: '#000000'
      },
      icons: tableIcons,
      columns: [{
        title: "NAME",
        field: "name"
      }, {
        title: "ARTIST",
        field: "artists"
      }, {
        title: "Dance",
        field: "danceAmount",
        type: "numeric"
      }, {
        title: "Energy",
        field: "energyAmount",
        type: "numeric"
      }, {
        title: "Loud",
        field: "loudAmount",
        type: "numeric"
      }, {
        title: "Tempo",
        field: "tempoAmount",
        type: "numeric"
      }],
      data: rowsOfData,
      title: "Generated Features",
      options: {
        headerStyle: {
          background: 'linear-gradient(to bottom, #434343 0%, black 100%)',
          color: '#FFF'
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    })));
  }

}

/***/ }),

/***/ "./components/PlaylistSelector.js":
/*!****************************************!*\
  !*** ./components/PlaylistSelector.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlaylistSelector; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Modal */ "@material-ui/core/Modal");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "@material-ui/core/ListSubheader");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "@material-ui/core/Backdrop");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Fade */ "@material-ui/core/Fade");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "/Users/Daniel/Websites/Hourlist/components/PlaylistSelector.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    overflowY: "hidden"
  };
}

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    position: "absolute",
    width: "60%",
    height: "80%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  typography: {
    padding: theme.spacing(2)
  },
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    color: "black",
    height: "200px",
    maxHeight: 200
  },
  listSection: {
    backgroundColor: "inherit"
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0
  }
}));
function PlaylistSelector(props) {
  const classes = useStyles();
  const [modalStyle] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(getModalStyle);
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const [arrayOfSongs, updateList] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(props.importedSong);
  const [input, setInput] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""); // '' is the initial state value

  const [created, setCreated] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const [feedback, setFeedback] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    updateList(prevArray => [...prevArray]);
  }, [1]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalClose = () => {
    setCreated(false);
  };

  const generateTheme = theme => {
    const sortedArray = props.importedSong.sort(function (a, b) {
      return a.feature[theme] - b.feature[theme];
    });
    console.log(sortedArray);
    updateList([...sortedArray]);
  };

  var createPlaylist = async function (named, list, token, user_id) {
    const apiURL = "https://api.spotify.com/v1/users/" + user_id + "/playlists";
    const data = {
      name: named
    };
    const response = await fetch(apiURL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data)
    });
    const libraryObject = await response.json().then(playlist => {
      addSongs(list, playlist, user_id, token);
      setCreated(true);
      setFeedback("Created Playlist Successfully");
    }, error => {
      console.log(error);
      setCreated(false);
      setFeedback("Playlist Failed to Generate");
    });
  };

  var addSongs = async function (list, playlist, user_id, token) {
    const apiURL = "https://api.spotify.com/v1/users/" + user_id + "/playlists/" + playlist.id + "/tracks";
    let result = list.map(a => a.uri);
    const response = await fetch(apiURL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(result)
    });
    const libraryObject = await response.json().then(value => {});
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    disabled: props.featuresGenerated,
    variant: "contained",
    size: "large",
    onClick: handleOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "Choose Playlist Theme"), __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_5___default.a, {
    "aria-labelledby": "simple-modal-title",
    "aria-describedby": "simple-modal-description",
    open: open,
    onClose: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx("div", {
    style: modalStyle,
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    direction: "row",
    justify: "flex-start",
    alignItems: "stretch",
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "outlined-basic",
    className: classes.textField,
    label: "Playlist Name",
    margin: "normal",
    style: {
      width: "100%"
    },
    variant: "outlined",
    value: input,
    onChange: e => setInput(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "contained",
    color: "primary",
    justify: "center",
    className: classes.button,
    onClick: () => {
      generateTheme("danceability");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "The Dance Build Up")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "contained",
    color: "secondary",
    className: classes.button,
    onClick: () => {
      generateTheme("energy");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "The Energy Build Up")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "contained",
    color: "default",
    className: classes.button,
    onClick: () => {
      generateTheme("tempo");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "The Tempo Build Up")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "contained",
    color: "primary",
    className: classes.button,
    onClick: () => {
      generateTheme("loudness");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, "The Build Up")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.root,
    subheader: __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, __jsx("li", {
    key: `Section Updated`,
    className: classes.listSection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, __jsx("ul", {
    className: classes.ul,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, `Build Up Generated Playlist`), arrayOfSongs.map((item, index) => __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: {
      color: "black"
    },
    key: item.id + index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9___default.a, {
    primary: `${item.name} by ${item.artists[0].name}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }))))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "contained",
    color: "primary",
    className: classes.button,
    onClick: () => {
      createPlaylist(input, arrayOfSongs, props.token, props.user_id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, "Create Playlist"), __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_5___default.a, {
    "aria-labelledby": "transition-modal-title",
    "aria-describedby": "transition-modal-description",
    className: classes.modal,
    open: created,
    onClose: modalClose,
    closeAfterTransition: true,
    BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_11___default.a,
    BackdropProps: {
      timeout: 500
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
    in: created,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, __jsx("div", {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, __jsx("h2", {
    id: "transition-modal-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, "Transition modal"), __jsx("p", {
    id: "transition-modal-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, feedback)))))))));
}

/***/ }),

/***/ "./components/Tracks.js":
/*!******************************!*\
  !*** ./components/Tracks.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tracks; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/AddBox */ "@material-ui/icons/AddBox");
/* harmony import */ var _material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ArrowUpward */ "@material-ui/icons/ArrowUpward");
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Check */ "@material-ui/icons/Check");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "@material-ui/icons/ChevronLeft");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "@material-ui/icons/ChevronRight");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Clear */ "@material-ui/icons/Clear");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/DeleteOutline */ "@material-ui/icons/DeleteOutline");
/* harmony import */ var _material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Edit */ "@material-ui/icons/Edit");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/FilterList */ "@material-ui/icons/FilterList");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/FirstPage */ "@material-ui/icons/FirstPage");
/* harmony import */ var _material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/LastPage */ "@material-ui/icons/LastPage");
/* harmony import */ var _material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Remove */ "@material-ui/icons/Remove");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_SaveAlt__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/SaveAlt */ "@material-ui/icons/SaveAlt");
/* harmony import */ var _material_ui_icons_SaveAlt__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SaveAlt__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_ViewColumn__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/ViewColumn */ "@material-ui/icons/ViewColumn");
/* harmony import */ var _material_ui_icons_ViewColumn__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewColumn__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! material-table */ "material-table");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/system */ "@material-ui/system");
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_system__WEBPACK_IMPORTED_MODULE_21__);


var _jsxFileName = "/Users/Daniel/Websites/Hourlist/components/Tracks.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





















const tableIcons = {
  Add: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }))),
  Check: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }))),
  Clear: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_10___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }))),
  Delete: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_11___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }))),
  DetailPanel: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }))),
  Edit: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_12___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }))),
  Export: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_SaveAlt__WEBPACK_IMPORTED_MODULE_17___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }))),
  Filter: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_13___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }))),
  FirstPage: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_14___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }))),
  LastPage: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_15___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }))),
  NextPage: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }))),
  PreviousPage: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_8___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }))),
  ResetSearch: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_10___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }))),
  Search: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_18___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }))),
  SortArrow: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_6___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }))),
  ThirdStateCheck: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_16___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }))),
  ViewColumn: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_ViewColumn__WEBPACK_IMPORTED_MODULE_19___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  })))
}; //album_type: "single"

/*
album: {album_type: "single", artists: Array(2), available_markets: Array(79), external_urls: {…}, href: "https://api.spotify.com/v1/albums/5HRACanD0eFXPlHubEHml6", …}
artists: (4) [{…}, {…}, {…}, {…}]
available_markets: (79) ["AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA"]
disc_number: 1
duration_ms: 248001
explicit: true
external_ids: {isrc: "USZ4V1800173"}
external_urls: {spotify: "https://open.spotify.com/track/6mBwzEADA0EfzISE52JqJW"}
href: "https://api.spotify.com/v1/tracks/6mBwzEADA0EfzISE52JqJW"
id: "6mBwzEADA0EfzISE52JqJW"
is_local: false
name: "Live A Lil"
popularity: 60
preview_url: "https://p.scdn.co/mp3-preview/f383781989d650cfeef29b9952211890aab7a983?cid=05254a545218406db543397b27a55c17"
track_number: 4
type: "track"
uri: "spotify:track:6mBwzEADA0EfzISE52JqJW"
*/

var totalTime = 0;

function createData(name, artists, length, id, external_urls, album) {
  var arrayOfNames = [];
  var time = 0;
  artists.forEach(element => {
    arrayOfNames.push(element.name);
  });
  artists = arrayOfNames.toString();
  time = millisToMinutes(length);
  totalTime = time + totalTime;
  console.log(totalTime);
  length = millisToMinutesAndSeconds(length);
  return {
    name,
    artists,
    length,
    id,
    external_urls,
    time,
    album
  };
}

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = (millis % 60000 / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function millisToMinutes(millis) {
  var minutes = Math.floor(millis / 60000);
  return minutes;
}

class Tracks extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleGenerateCheck", () => {
      if (totalTime >= 60) {
        this.props.generateReady(totalTime);
      }
    });

    console.log(props);
    this.state = {
      rows: this.props.allTracks,
      time: totalTime
    };
  }

  render() {
    var rowsOfData = [];
    var displayError = "";

    if (this.props.tracksImported) {
      rowsOfData = this.props.allTracks.map(({
        name,
        artists,
        duration_ms,
        id,
        external_urls,
        album
      }) => createData(name, artists, duration_ms, id, external_urls, album));
      this.handleGenerateCheck();
      console.log(rowsOfData);
    }

    if (totalTime < 60) {
      displayError = "You have less than 60 minutes worth of songs in the box";
    } else {
      displayError = " ";
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, __jsx("div", {
      style: {
        maxWidth: "100%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx(material_table__WEBPACK_IMPORTED_MODULE_20___default.a, {
      style: {
        background: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
        color: '#000000'
      },
      icons: tableIcons,
      columns: [{
        title: "NAME",
        field: "name"
      }, {
        title: "ARTIST",
        field: "artists"
      }, {
        title: "LENGTH",
        field: "length",
        type: "numeric"
      }],
      data: rowsOfData,
      title: "Hourlist Song Box",
      options: {
        headerStyle: {
          background: 'linear-gradient(to bottom, #434343 0%, black 100%)',
          color: '#FFF'
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }), __jsx("p", {
      style: {
        color: "red"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, " ", displayError, " ")));
  }

}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/button */ "./styles/button.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _styles_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/mixins */ "./styles/mixins.js");
/* harmony import */ var _styles_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Main */ "./styles/Main.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/Daniel/Websites/Hourlist/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_styles_Main__WEBPACK_IMPORTED_MODULE_4__["default"])`
  ${_styles_mixins__WEBPACK_IMPORTED_MODULE_3__["default"].sidePadding};
  counter-reset: section;
`;

const IndexPage = () => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
});

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./styles/GlobalStyles.js":
/*!********************************!*\
  !*** ./styles/GlobalStyles.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  html {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background: linear-gradient(-180deg, #2d3436 0%, #000000 45%);
    background-repeat: no-repeat;
    background-color: black;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: #8892b0;
    line-height: 1.3;
  }
  ::selection {
    background-color: blue;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
    color: white;
    margin: 0 0 10px 0;
  }
  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }
  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }
  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    cursor: pointer;
    &:hover,
    &:focus {
      outline: 0;
    }
  }
  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    &:focus,
    &:active {
    }
  }
  input, textarea {
    border-radius: 0;
    outline: 0;
    &:focus {
      outline: 0;
    }
    &::placeholder {
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }
  p {
    margin: 0 0 15px 0;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./styles/Main.js":
/*!************************!*\
  !*** ./styles/Main.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins */ "./styles/mixins.js");


const Main = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main`
  ${_mixins__WEBPACK_IMPORTED_MODULE_1__["default"].sidePadding};
  margin: 0 auto;
  width: 100%;
`;
/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./styles/button.js":
/*!**************************!*\
  !*** ./styles/button.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "./styles/theme.js");


const {
  palette,
  colors,
  fontSizes,
  fonts
} = _theme__WEBPACK_IMPORTED_MODULE_1__["default"];
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
  color: ${palette.white};
  background-color: transparent;
  border: 1px solid ${colors.spotifyGreen};
  border-radius: ${_theme__WEBPACK_IMPORTED_MODULE_1__["default"].borderRadius};
  font-size: ${fontSizes.smallish};
  font-family: ${fonts.Press_Start_2P};
  width: 200px;
  height: 75px;
  margin:auto;
  text-decoration: none;
  cursor: pointer;
  transition: ${_theme__WEBPACK_IMPORTED_MODULE_1__["default"].transition};
  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.spotifyGreen};
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./styles/media.js":
/*!*************************!*\
  !*** ./styles/media.js ***!
  \*************************/
/*! exports provided: media, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "media", function() { return media; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const sizes = {
  giant: 1440,
  bigDesktop: 1200,
  desktop: 1000,
  tablet: 768,
  thone: 600,
  phablet: 480,
  phone: 376,
  tiny: 330
};
const media = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;

  accumulator[label] = (...args) => styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
    @media (max-width: ${emSize}em) {
      ${Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(...args)};
    }
  `;

  return accumulator;
}, {});
/* harmony default export */ __webpack_exports__["default"] = (media);

/***/ }),

/***/ "./styles/mixins.js":
/*!**************************!*\
  !*** ./styles/mixins.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "./styles/theme.js");
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media */ "./styles/media.js");



const {
  palette,
  colors,
  fontSizes,
  fonts
} = _theme__WEBPACK_IMPORTED_MODULE_1__["default"];
const mixins = {
  flexCenter: styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexBetween: styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  outline: styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
    outline: 1px solid red;
  `,
  link: styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${_theme__WEBPACK_IMPORTED_MODULE_1__["default"].transition};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${palette.white};
      outline: 0;
    }
  `,
  inlineLink: styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${_theme__WEBPACK_IMPORTED_MODULE_1__["default"].transition};
    cursor: pointer;
    color: ${palette.white};
    &:hover,
    &:focus,
    &:active {
      color: ${palette.white};
      outline: 0;
      &:after {
        width: 100%;
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${palette.white};
      transition: ${palette.transYellowish};
      opacity: 0.5;
    }
  `,
  smallButton: styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
    color: ${palette.white};
    background-color: transparent;
    border: 1px solid ${palette.yellowish};
    border-radius: ${_theme__WEBPACK_IMPORTED_MODULE_1__["default"].borderRadius};
    padding: 0.75rem 1rem;
    font-size: ${fontSizes.smallish};
    font-family: ${fonts.Press_Start_2P};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${_theme__WEBPACK_IMPORTED_MODULE_1__["default"].transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${colors.transGreen};
    }
    &:after {
      display: none !important;
    }
  `,
  textTyping: styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
    color: #fff;
    font-family: monospace;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
    animation: 
      typing 3.5s steps(30, end),
      blink-caret 1s step-end infinite;


  /* The typing effect */
  @keyframes typing {
   from { width: 0% }
    to { width: 100% }
  }

  /* The typewriter cursor effect */
    @keyframes blink-caret {
    from, to { border-color: transparent ; color: ${palette.transSilver};}
    50% { color: green; }
  }
`,
  bigButton: styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
    color: ${palette.deepMatteGray};
    background-color: transparent;
    border-right: 3px solid ${palette.deepMatteGray};
    border-left: 3px solid ${palette.deepMatteGray};
    border-radius: ${_theme__WEBPACK_IMPORTED_MODULE_1__["default"].borderRadius};
    padding: 1.25rem 1.75rem;
    font-size: ${fontSizes.small};
    font-family: 'PressStart2P';
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${_theme__WEBPACK_IMPORTED_MODULE_1__["default"].transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${palette.transYellowish};
      color: ${palette.transSilver};
    }
    &:after {
      display: none !important;
    }
  `,
  sidePadding: styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
    padding: 0 150px;
    ${_media__WEBPACK_IMPORTED_MODULE_2__["default"].desktop`padding: 0 100px;`};
    ${_media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet`padding: 0 50px;`};
    ${_media__WEBPACK_IMPORTED_MODULE_2__["default"].phablet`padding: 0 25px;`};
  `,
  boxShadow: styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
    box-shadow: 0 10px 30px -15px ${colors.shadowNavy};
    transition: ${_theme__WEBPACK_IMPORTED_MODULE_1__["default"].transition};

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px ${colors.shadowNavy};
    }
  `
};
/* harmony default export */ __webpack_exports__["default"] = (mixins);

/***/ }),

/***/ "./styles/theme.js":
/*!*************************!*\
  !*** ./styles/theme.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const theme = {
  colors: {
    dark: '#000007',
    darkestNavy: '#01050b',
    darkNavy: '#020c1b',
    navy: '#0a192f',
    lightNavy: '#172a45',
    darkGrey: '#333f58',
    mediumGrey: '#2d3952',
    grey: '#4c5772',
    lightGrey: '#606a86',
    slate: '#8892b0',
    lightSlate: '#a8b2d1',
    lightestSlate: '#ccd6f6',
    offWhite: '#dce7ff',
    white: '#e6f1ff',
    pink: '#FF647F',
    yellow: '#FFC464',
    orange: '#FF9E64',
    green: '#64ffda',
    blue: '#71AFFF',
    darkBlue: '#1D7FFC',
    highlight: 'rgba(41, 61, 90, 0.99)',
    transGreen: 'rgba(100, 255, 218, 0.07)',
    transNavy: 'rgba(10, 25, 47, 0.7)',
    shadowNavy: 'rgba(2, 12, 27, 0.7)',
    spotifyGreen: '#1ed761'
  },
  palette: {
    red: '#CF000F',
    blue: '#1100BB',
    base: '#000000',
    white: '#e6f1ff',
    deepMatteGray: '#393f4d',
    silverFox: '#d4d4dc',
    transSilver: 'rgba(212, 212, 220, 0.7)',
    yellowish: '#feda6a',
    transYellowish: 'rgba(254, 218, 106, 0.7)',
    darkSlate: '#1d1e22'
  },
  fonts: {
    Rajdhani: 'Rajdhani, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    Turret_Road: 'Turret Road, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    Press_Start_2P: 'PressStart2P, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif'
  },
  fontSizes: {
    xsmall: '12px',
    smallish: '13px',
    small: '14px',
    medium: '16px',
    large: '18px',
    xlarge: '20px',
    xxlarge: '22px',
    h3: '32px'
  },
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
  borderRadius: '100%',
  navHeight: '100px',
  navScrollHeight: '70px',
  margin: '20px',
  tabHeight: 42,
  tabWidth: 120,
  radius: 3,
  gradient: `linear-gradient(0.4turn, #393f4d, #e6f1ff)`,
  loaderDelay: `6`,
  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Daniel/Websites/Hourlist/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core/Backdrop":
/*!*********************************************!*\
  !*** external "@material-ui/core/Backdrop" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Backdrop");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/Fade":
/*!*****************************************!*\
  !*** external "@material-ui/core/Fade" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fade");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/ListSubheader":
/*!**************************************************!*\
  !*** external "@material-ui/core/ListSubheader" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListSubheader");

/***/ }),

/***/ "@material-ui/core/Modal":
/*!******************************************!*\
  !*** external "@material-ui/core/Modal" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Modal");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/AddBox":
/*!********************************************!*\
  !*** external "@material-ui/icons/AddBox" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AddBox");

/***/ }),

/***/ "@material-ui/icons/ArrowUpward":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ArrowUpward" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowUpward");

/***/ }),

/***/ "@material-ui/icons/Check":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Check" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Check");

/***/ }),

/***/ "@material-ui/icons/ChevronLeft":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ChevronLeft" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),

/***/ "@material-ui/icons/ChevronRight":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ChevronRight" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronRight");

/***/ }),

/***/ "@material-ui/icons/Clear":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Clear" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Clear");

/***/ }),

/***/ "@material-ui/icons/DeleteOutline":
/*!***************************************************!*\
  !*** external "@material-ui/icons/DeleteOutline" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DeleteOutline");

/***/ }),

/***/ "@material-ui/icons/Edit":
/*!******************************************!*\
  !*** external "@material-ui/icons/Edit" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Edit");

/***/ }),

/***/ "@material-ui/icons/FilterList":
/*!************************************************!*\
  !*** external "@material-ui/icons/FilterList" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FilterList");

/***/ }),

/***/ "@material-ui/icons/FirstPage":
/*!***********************************************!*\
  !*** external "@material-ui/icons/FirstPage" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FirstPage");

/***/ }),

/***/ "@material-ui/icons/LastPage":
/*!**********************************************!*\
  !*** external "@material-ui/icons/LastPage" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LastPage");

/***/ }),

/***/ "@material-ui/icons/Remove":
/*!********************************************!*\
  !*** external "@material-ui/icons/Remove" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Remove");

/***/ }),

/***/ "@material-ui/icons/SaveAlt":
/*!*********************************************!*\
  !*** external "@material-ui/icons/SaveAlt" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SaveAlt");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "@material-ui/icons/ViewColumn":
/*!************************************************!*\
  !*** external "@material-ui/icons/ViewColumn" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ViewColumn");

/***/ }),

/***/ "@material-ui/system":
/*!**************************************!*\
  !*** external "@material-ui/system" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/system");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "material-table":
/*!*********************************!*\
  !*** external "material-table" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("material-table");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map