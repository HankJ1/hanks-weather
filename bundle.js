/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "links": () => (/* binding */ links)
/* harmony export */ });


let links = [
        { name: 'clear-sky', source: "./images/clear-sky.jpeg"},
        { name: 'few-clouds', source: "./images/scattered-clouds.jpeg"},
        { name: 'broken-clouds', source: "./thick-clouds.png"},
        { name: 'rain', source: "./images/rain.jpeg"},
        { name: 'thunderstorm', source: './images/thunderstorm.jpeg'},
        { name: 'snow', source: './images/snow.jpeg'},
        { name: 'mist', source: './images/mist.jpeg'},
        { name: 'night', source: './images/moon.jpeg'}
    ]



/***/ }),

/***/ "./images/scattered-clouds.jpeg":
/*!**************************************!*\
  !*** ./images/scattered-clouds.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b9e7cf6ceb9e71767f86.jpeg";

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles.css ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_scattered_clouds_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/scattered-clouds.jpeg */ "./images/scattered-clouds.jpeg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_scattered_clouds_jpeg__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody {\n    background-color: rgba(0, 0, 0, 0.9);\n    font-family: Geneva, Verdana, sans-serif;\n    \n}\n.header {\n    position: relative;\n    top: 0px;\n    height: 60px;\n    width: auto;\n    text-align: center;\n    color: white;\n     \n}\n\n.weather-search {\n    display: inline-block;\n    position: relative;\n    left: 50%;\n    transform: translate(-50%, 0);\n    \n}\n    .label {\n        margin-right: 5px;\n        font-size: 24px;\n        color: white;\n    }\n    .text-input {\n        width: 250px;\n        height: 25px;\n        border-radius: 15px;\n        background-color:rgba(100, 105, 105, 0.747);\n        border: none;\n        color: white;\n        padding-left: 10px;\n        font-size: 16px;\n        /* box-shadow: 2px 2px 2px black; */\n    }\n        .text-input:focus {\n            outline: none;\n        }\n    .submit {\n        margin-left: 5px;\n        height: 30px;\n        width: 80px;\n        border-radius: 5px;\n        font-size: 18px;\n        color: white;\n        background-color:rgba(100, 105, 105, 0.747);\n        border: none;\n        font-family: Geneva, Verdana, sans-serif;\n    }\n        .submit:hover {\n            transform: scale(1.1);\n        }\n\n.city-background {\n    margin-top: 10px;\n    width: 100%;\n    height: 500px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: (0, 0);\n    box-shadow: 2px 2px 2px rgba(12, 12, 12, 0.6);\n    background-blend-mode: darken;\n    border-radius: 10px;\n    \n}\n    .weather-container {\n        position: relative;\n        padding-top: 5px;\n        height: 190px;\n        width: 160px;\n        z-index: 5;\n        /* border: 1px solid black; */\n        left: 50px;\n        top: 40px;\n        text-align: center;\n        background-color:rgba(192, 197, 197, 0.4);\n        /* box-shadow: 2px 2px 1px rgba(95, 97, 97, 0.6); */\n        border-radius: 5px;\n\n    }\n        .city-name {\n            font-size: 24px;\n            margin-top: 10px;\n            font-family: helvetica;\n            font-weight: bolder;\n        }\n        .weather-icon {\n            margin-top: -30px;\n            padding: none;\n            transform: scale(1.5);\n        }\n        .temp {\n            font-size: 22px;\n            margin-top: -15px;\n            font-family: helvetica;\n            color: black;\n            font-weight: bold;\n        }\n        .description {\n            font-size: 20px;\n            margin-top: -15px;\n            font-family: helvetica;\n        }\n\nh2 {\n    color: white;\n    margin-left: 20px;\n}\n\n.hourly-container {\n    position: relative;\n    left: 50%;\n    transform:translate(-50%, 0);\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    margin-top: 15px;\n    height: auto;\n    max-width: 95vw;\n    /* outline: 1px solid black; */\n    color: white;\n    font-size: 12px;\n    font-family: Geneva, Verdana, sans-serif;\n}\n    .hourly {\n        padding-top: -5px;\n        height: 150px;\n        width: 130px;\n        margin-top: 8px;\n        margin-right: 8px;\n        text-align: center;\n        /* background-color:rgba(167, 173, 173, 0.301); */\n    }\n        .hourly-name {\n            margin-top: 5px;\n            font-size: 14px;\n            font-family: Geneva, Verdana, sans-serif;\n        }\n        .hourly-icon {\n            transform: scale(1.2);\n            margin-top: -35px;\n        }\n        .hourly-temp {\n            margin-top: -20px;\n            margin-bottom: 7px;\n            font-size: 12px;\n            font-family: Geneva, Verdana, sans-serif;\n        }\n        .hourly-description {\n            margin-top: -5px;\n            font-size: 12px;\n            font-family: Geneva, Verdana, sans-serif;\n        }\n        #hour-pre {\n            font-size: 18px;\n        }\n\n.weekly-container {\n    display: flex;\n    margin-top: 15px;\n    margin-bottom: 20px;\n    height: auto;\n    max-width: 95vw;\n    flex-wrap: wrap;\n    justify-content: center;\n    color: white;\n}\n    .weekly {\n        padding-top: -5px;\n        height: 150px;\n        width: 130px;\n        margin: 8px 8px 0 0;\n        text-align: center;\n        /* background-color:rgba(167, 173, 173, 0.301); */\n        font-size: 12px;\n        font-family: Geneva, Verdana, sans-serif;\n    }\n        .weekly-name {\n            margin-top: 5px;\n            margin-bottom: 20px;\n            font-size: 14px;\n            font-family: Geneva, Verdana, sans-serif;\n        }\n        .weekly-icon {\n            transform: scale(1.2);\n            margin-top: -35px;\n        }\n        .weekly-temp {\n            margin-top: -20px;\n            font-size: 12px;\n            font-family: Geneva, Verdana, sans-serif;\n            margin-bottom: 7px;\n        }\n        .weekly-description {\n            margin-top: -5px;\n            font-size: 1em;\n            font-size: 12px;\n            font-family: Geneva, Verdana, sans-serif;\n        }\n        #week-pre {\n            font-size: 18px;\n        }\n\n@media (max-width: 500px) {\n    .header {\n        min-width: 350px;\n    }\n    .main-header {\n        font-size: 24px;\n    }\n    .text-input {\n        font-size: 14px;\n        width: 200px;\n    }\n    .label {\n        position: fixed;\n        left: 500px;\n        display: none;\n    }\n}", "",{"version":3,"sources":["webpack://./styles.css"],"names":[],"mappings":";AACA;IACI,oCAAoC;IACpC,wCAAwC;;AAE5C;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,YAAY;;AAEhB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,SAAS;IACT,6BAA6B;;AAEjC;IACI;QACI,iBAAiB;QACjB,eAAe;QACf,YAAY;IAChB;IACA;QACI,YAAY;QACZ,YAAY;QACZ,mBAAmB;QACnB,2CAA2C;QAC3C,YAAY;QACZ,YAAY;QACZ,kBAAkB;QAClB,eAAe;QACf,mCAAmC;IACvC;QACI;YACI,aAAa;QACjB;IACJ;QACI,gBAAgB;QAChB,YAAY;QACZ,WAAW;QACX,kBAAkB;QAClB,eAAe;QACf,YAAY;QACZ,2CAA2C;QAC3C,YAAY;QACZ,wCAAwC;IAC5C;QACI;YACI,qBAAqB;QACzB;;AAER;IACI,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,yDAAuD;IACvD,sBAAsB;IACtB,4BAA4B;IAC5B,2BAA2B;IAC3B,6CAA6C;IAC7C,6BAA6B;IAC7B,mBAAmB;;AAEvB;IACI;QACI,kBAAkB;QAClB,gBAAgB;QAChB,aAAa;QACb,YAAY;QACZ,UAAU;QACV,6BAA6B;QAC7B,UAAU;QACV,SAAS;QACT,kBAAkB;QAClB,yCAAyC;QACzC,mDAAmD;QACnD,kBAAkB;;IAEtB;QACI;YACI,eAAe;YACf,gBAAgB;YAChB,sBAAsB;YACtB,mBAAmB;QACvB;QACA;YACI,iBAAiB;YACjB,aAAa;YACb,qBAAqB;QACzB;QACA;YACI,eAAe;YACf,iBAAiB;YACjB,sBAAsB;YACtB,YAAY;YACZ,iBAAiB;QACrB;QACA;YACI,eAAe;YACf,iBAAiB;YACjB,sBAAsB;QAC1B;;AAER;IACI,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,4BAA4B;IAC5B,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,8BAA8B;IAC9B,YAAY;IACZ,eAAe;IACf,wCAAwC;AAC5C;IACI;QACI,iBAAiB;QACjB,aAAa;QACb,YAAY;QACZ,eAAe;QACf,iBAAiB;QACjB,kBAAkB;QAClB,iDAAiD;IACrD;QACI;YACI,eAAe;YACf,eAAe;YACf,wCAAwC;QAC5C;QACA;YACI,qBAAqB;YACrB,iBAAiB;QACrB;QACA;YACI,iBAAiB;YACjB,kBAAkB;YAClB,eAAe;YACf,wCAAwC;QAC5C;QACA;YACI,gBAAgB;YAChB,eAAe;YACf,wCAAwC;QAC5C;QACA;YACI,eAAe;QACnB;;AAER;IACI,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,eAAe;IACf,uBAAuB;IACvB,YAAY;AAChB;IACI;QACI,iBAAiB;QACjB,aAAa;QACb,YAAY;QACZ,mBAAmB;QACnB,kBAAkB;QAClB,iDAAiD;QACjD,eAAe;QACf,wCAAwC;IAC5C;QACI;YACI,eAAe;YACf,mBAAmB;YACnB,eAAe;YACf,wCAAwC;QAC5C;QACA;YACI,qBAAqB;YACrB,iBAAiB;QACrB;QACA;YACI,iBAAiB;YACjB,eAAe;YACf,wCAAwC;YACxC,kBAAkB;QACtB;QACA;YACI,gBAAgB;YAChB,cAAc;YACd,eAAe;YACf,wCAAwC;QAC5C;QACA;YACI,eAAe;QACnB;;AAER;IACI;QACI,gBAAgB;IACpB;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;QACf,YAAY;IAChB;IACA;QACI,eAAe;QACf,WAAW;QACX,aAAa;IACjB;AACJ","sourcesContent":["\nbody {\n    background-color: rgba(0, 0, 0, 0.9);\n    font-family: Geneva, Verdana, sans-serif;\n    \n}\n.header {\n    position: relative;\n    top: 0px;\n    height: 60px;\n    width: auto;\n    text-align: center;\n    color: white;\n     \n}\n\n.weather-search {\n    display: inline-block;\n    position: relative;\n    left: 50%;\n    transform: translate(-50%, 0);\n    \n}\n    .label {\n        margin-right: 5px;\n        font-size: 24px;\n        color: white;\n    }\n    .text-input {\n        width: 250px;\n        height: 25px;\n        border-radius: 15px;\n        background-color:rgba(100, 105, 105, 0.747);\n        border: none;\n        color: white;\n        padding-left: 10px;\n        font-size: 16px;\n        /* box-shadow: 2px 2px 2px black; */\n    }\n        .text-input:focus {\n            outline: none;\n        }\n    .submit {\n        margin-left: 5px;\n        height: 30px;\n        width: 80px;\n        border-radius: 5px;\n        font-size: 18px;\n        color: white;\n        background-color:rgba(100, 105, 105, 0.747);\n        border: none;\n        font-family: Geneva, Verdana, sans-serif;\n    }\n        .submit:hover {\n            transform: scale(1.1);\n        }\n\n.city-background {\n    margin-top: 10px;\n    width: 100%;\n    height: 500px;\n    background-image: url(\"./images/scattered-clouds.jpeg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: (0, 0);\n    box-shadow: 2px 2px 2px rgba(12, 12, 12, 0.6);\n    background-blend-mode: darken;\n    border-radius: 10px;\n    \n}\n    .weather-container {\n        position: relative;\n        padding-top: 5px;\n        height: 190px;\n        width: 160px;\n        z-index: 5;\n        /* border: 1px solid black; */\n        left: 50px;\n        top: 40px;\n        text-align: center;\n        background-color:rgba(192, 197, 197, 0.4);\n        /* box-shadow: 2px 2px 1px rgba(95, 97, 97, 0.6); */\n        border-radius: 5px;\n\n    }\n        .city-name {\n            font-size: 24px;\n            margin-top: 10px;\n            font-family: helvetica;\n            font-weight: bolder;\n        }\n        .weather-icon {\n            margin-top: -30px;\n            padding: none;\n            transform: scale(1.5);\n        }\n        .temp {\n            font-size: 22px;\n            margin-top: -15px;\n            font-family: helvetica;\n            color: black;\n            font-weight: bold;\n        }\n        .description {\n            font-size: 20px;\n            margin-top: -15px;\n            font-family: helvetica;\n        }\n\nh2 {\n    color: white;\n    margin-left: 20px;\n}\n\n.hourly-container {\n    position: relative;\n    left: 50%;\n    transform:translate(-50%, 0);\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    margin-top: 15px;\n    height: auto;\n    max-width: 95vw;\n    /* outline: 1px solid black; */\n    color: white;\n    font-size: 12px;\n    font-family: Geneva, Verdana, sans-serif;\n}\n    .hourly {\n        padding-top: -5px;\n        height: 150px;\n        width: 130px;\n        margin-top: 8px;\n        margin-right: 8px;\n        text-align: center;\n        /* background-color:rgba(167, 173, 173, 0.301); */\n    }\n        .hourly-name {\n            margin-top: 5px;\n            font-size: 14px;\n            font-family: Geneva, Verdana, sans-serif;\n        }\n        .hourly-icon {\n            transform: scale(1.2);\n            margin-top: -35px;\n        }\n        .hourly-temp {\n            margin-top: -20px;\n            margin-bottom: 7px;\n            font-size: 12px;\n            font-family: Geneva, Verdana, sans-serif;\n        }\n        .hourly-description {\n            margin-top: -5px;\n            font-size: 12px;\n            font-family: Geneva, Verdana, sans-serif;\n        }\n        #hour-pre {\n            font-size: 18px;\n        }\n\n.weekly-container {\n    display: flex;\n    margin-top: 15px;\n    margin-bottom: 20px;\n    height: auto;\n    max-width: 95vw;\n    flex-wrap: wrap;\n    justify-content: center;\n    color: white;\n}\n    .weekly {\n        padding-top: -5px;\n        height: 150px;\n        width: 130px;\n        margin: 8px 8px 0 0;\n        text-align: center;\n        /* background-color:rgba(167, 173, 173, 0.301); */\n        font-size: 12px;\n        font-family: Geneva, Verdana, sans-serif;\n    }\n        .weekly-name {\n            margin-top: 5px;\n            margin-bottom: 20px;\n            font-size: 14px;\n            font-family: Geneva, Verdana, sans-serif;\n        }\n        .weekly-icon {\n            transform: scale(1.2);\n            margin-top: -35px;\n        }\n        .weekly-temp {\n            margin-top: -20px;\n            font-size: 12px;\n            font-family: Geneva, Verdana, sans-serif;\n            margin-bottom: 7px;\n        }\n        .weekly-description {\n            margin-top: -5px;\n            font-size: 1em;\n            font-size: 12px;\n            font-family: Geneva, Verdana, sans-serif;\n        }\n        #week-pre {\n            font-size: 18px;\n        }\n\n@media (max-width: 500px) {\n    .header {\n        min-width: 350px;\n    }\n    .main-header {\n        font-size: 24px;\n    }\n    .text-input {\n        font-size: 14px;\n        width: 200px;\n    }\n    .label {\n        position: fixed;\n        left: 500px;\n        display: none;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./styles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./scripts.js":
/*!********************!*\
  !*** ./scripts.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./styles.css");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./data.js");
 
 


const weather = (() => {

    const cityName = document.querySelector(".city-name");
    const desc = document.querySelector(".description");
    const icon = document.querySelector(".weather-icon");
    const tempOutput = document.querySelector(".temp");
    const locationInput = document.querySelector(".text-input");
    const weatherForm = document.querySelector(".weather-search");
    let weatherData;
    
    //get current weather function
    async function getCurrentWeather(location) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=d55986fd6fc9347243af3c997d2c2ea2`, {mode: 'cors'});
            const dayWeatherData = await response.json();

            let lat = await dayWeatherData.coord.lat;
            let long = await dayWeatherData.coord.lon;
            await console.log(dayWeatherData);
            await setIcon(dayWeatherData);

            await getHourlyWeather(lat, long);
        
            let fahr = parseInt(dayWeatherData.main.temp);

            tempOutput.textContent = fahr + " °F";

            await helpers.chooseImage(dayWeatherData);
        
        } catch(err) {
            console.log(err);
            alert("sorry we could not find that city. please check your spelling");
        }
    }
            getCurrentWeather("seattle");

    //get hourly weather function
    async function getHourlyWeather(lat, long) {
        helpers.deleteHourlyElements();
        helpers.deleteWeeklyElements();

        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely&units=imperial&appid=d55986fd6fc9347243af3c997d2c2ea2`, {mode: 'cors'});
        weatherData = await response.json();
        await console.log(weatherData);
        // await console.log(weatherData.weather[0].main);

        await helpers.createHourlyElement(weatherData);
        await helpers.createWeeklyElement(weatherData);

        await helpers.eightElements(weatherData);

        


    }
    
    //set icon and description and name
    function setIcon(weatherObj) {
        let id = weatherObj.weather[0].icon;
        let description = weatherObj.weather[0].description;
        icon.src = `http://openweathermap.org/img/wn/${id}@2x.png`
        desc.textContent = description;
        cityName.textContent = weatherObj.name;

        

    }

    function getNewWeather(e) {
        e.preventDefault();
        let place = locationInput.value;
        getCurrentWeather(place);
    }

    weatherForm.onsubmit = getNewWeather;

    return {
        weatherData
    }


})()
    

const helpers = (() => {

    const hourContainer = document.querySelector(".hourly-container");
    const weekContainer = document.querySelector(".weekly-container");
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let images = _data_js__WEBPACK_IMPORTED_MODULE_1__.links;

    function kToF(kelvin) {
        let fahr = 9 / 5 * (kelvin - 273) + 32;
        return fahr;
    }

    function getCurrentTime() {
        let d = new Date();
        let hours = d.getHours();
        let day = d.getDay();
        let tomorrow = d++;
        if(tomorrow > 6) {tomorrow = 0;};
        console.log(day);
        console.log(hours);
        //console.log(typeof hours);
        return {
            hours,
            tomorrow
        }
    }
    //getCurrentTime();

    function createHourlyElement(myWeatherData) {
        let hourlyDescription = document.querySelector('.hourly-description');
        let hourlyIcon = document.querySelector('.hourly-icon');
        let theHour = document.querySelector(".hourly-name");
        let hourlyDiv = document.querySelector(".hourly-temp");
        console.log(hourlyDiv);
        //console.log(myWeatherData);
        hourlyDiv.textContent = parseInt(myWeatherData.hourly[0].temp) + " °F";
        theHour.textContent = getCurrentTime().hours;
        hourlyIcon.src = `http://openweathermap.org/img/wn/${myWeatherData.hourly[0].weather[0].icon}@2x.png`;
        hourlyDescription.textContent = myWeatherData.hourly[0].weather[0].description;
    }

    function createWeeklyElement(myWeatherData) {
        let weeklyDescription = document.querySelector('.weekly-description');
        let weeklyIcon = document.querySelector('.weekly-icon');
        let theDay = document.querySelector(".weekly-name");
        let weeklyDiv = document.querySelector(".weekly-temp");
        console.log(weeklyDiv);
        //console.log(myWeatherData);
        weeklyDiv.textContent = parseInt(myWeatherData.daily[1].temp.max) + " °F";
        theDay.textContent = days[getCurrentTime().tomorrow];
        weeklyIcon.src = `http://openweathermap.org/img/wn/${myWeatherData.daily[1].weather[0].icon}@2x.png`;
        weeklyDescription.textContent = myWeatherData.daily[1].weather[0].description;
    }

    function deleteHourlyElements() {
        const existingHourlies = document.querySelectorAll(".hourly");
        if(existingHourlies.length > 1) {
            for(let i = 1; i < existingHourlies.length; i++) {
                existingHourlies[i].remove();
            }
        }
    }

    function deleteWeeklyElements() {
        const existingWeeklies = document.querySelectorAll(".weekly");
        if(existingWeeklies.length > 1) {
            for(let i = 1; i < existingWeeklies.length; i++) {
                existingWeeklies[i].remove();
            }
        }
    }

    function eightElements(myWeatherData) {
        let hourNode = document.querySelector(".hourly");
        let weekNode = document.querySelector(".weekly");
        let now = getCurrentTime().hours;
        let day =getCurrentTime().tomorrow;
        for(let i = 1; i <= 13; i++) {
            let cloned = hourNode.cloneNode(true);
            let time = now + i
            if(time > 24) {time -= 24};
            cloned.childNodes[1].textContent = time;
            cloned.childNodes[3].src = `http://openweathermap.org/img/wn/${myWeatherData.hourly[i - 1].weather[0].icon}@2x.png`
            cloned.childNodes[5].textContent = parseInt(myWeatherData.hourly[i - 1].temp) + " °F";
            cloned.childNodes[7].textContent = myWeatherData.hourly[i-1].weather[0].description;
            hourContainer.appendChild(cloned);
        }
        for(let i = 1; i <= 6; i++) {
            let cloned = weekNode.cloneNode(true);
            let time = day + i;
            if(time > 6) {time -= 6};
            cloned.childNodes[1].textContent = days[time];
            cloned.childNodes[3].src = `http://openweathermap.org/img/wn/${myWeatherData.daily[i + 1].weather[0].icon}@2x.png`
            cloned.childNodes[5].textContent = parseInt(myWeatherData.daily[i + 1].temp.max) + " °F";
            cloned.childNodes[7].textContent = myWeatherData.daily[i  + 1].weather[0].description;
            weekContainer.appendChild(cloned);
        }
    }

    function chooseImage(weatherData) {
        console.log(images);
        let imgBack = document.querySelector(".city-background");
        let descriptor = weatherData.weather[0].description;
        console.log(weatherData);
        console.log(descriptor);
        descriptor = descriptor.toLowerCase();
        if(weatherData.weather[0].icon.includes("n")) {
            imgBack.style.backgroundImage = `url(${images[7].source})`;
        } else if(descriptor == "clear sky") {
            imgBack.style.backgroundImage = `url(${images[0].source})`;
        } else if (descriptor == 'few clouds' || descriptor == 'scattered clouds') {
            imgBack.style.backgroundImage = `url(${images[1].source})`;
        } else if (descriptor == "broken clouds") {
            imgBack.style.backgroundImage = `url(${images[2].source})`;
        } else if (descriptor == 'shower rain' || descriptor == 'rain') {
            imgBack.style.backgroundImage = `url(${images[3].source})`;
        } else if (descriptor == "thunderstorm") {
            imgBack.style.backgroundImage = `url(${images[4].source})`;
        } else if (descriptor == "snow") {
            imgBack.style.backgroundImage = `url(${images[5].source})`;
        } else if (descriptor == "snow") {
            imgBack.style.backgroundImage = `url(${images[6].source})`;
        }
         else {
            imgBack.style.backgroundImage = `url(${images[1].source})`;
        }
    }

    //createHourlyElement();

    return {
        kToF,
        createHourlyElement,
        createWeeklyElement,
        eightElements,
        deleteHourlyElements,
        deleteWeeklyElements,
        chooseImage
    }

})()
    
// getCityImage();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./scripts.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map