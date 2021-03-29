(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/slick-carousel/slick/slick-theme.scss":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--14-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--14-3!./node_modules/sass-loader/dist/cjs.js??ref--14-4!./node_modules/slick-carousel/slick/slick-theme.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/* Slider */\n.slick-loading .slick-list {\n  background: #fff url('ajax-loader.gif') center center no-repeat;\n}\n/* Icons */\n@font-face {\n  font-family: \"slick\";\n  src: url('slick.eot');\n  src: url('slick.eot') format(\"embedded-opentype\"), url('slick.woff') format(\"woff\"), url('slick.ttf') format(\"truetype\"), url('slick.svg') format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Arrows */\n.slick-prev,\n.slick-next {\n  position: absolute;\n  display: block;\n  height: 20px;\n  width: 20px;\n  line-height: 0px;\n  font-size: 0px;\n  cursor: pointer;\n  background: transparent;\n  color: transparent;\n  top: 50%;\n  transform: translate(0, -50%);\n  padding: 0;\n  border: none;\n  outline: none;\n}\n.slick-prev:hover, .slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus {\n  outline: none;\n  background: transparent;\n  color: transparent;\n}\n.slick-prev:hover:before, .slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before {\n  opacity: 1;\n}\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before {\n  opacity: 0.25;\n}\n.slick-prev:before,\n.slick-next:before {\n  font-family: \"slick\";\n  font-size: 20px;\n  line-height: 1;\n  color: white;\n  opacity: 0.75;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.slick-prev {\n  left: -25px;\n}\n[dir=rtl] .slick-prev {\n  left: auto;\n  right: -25px;\n}\n.slick-prev:before {\n  content: \"←\";\n}\n[dir=rtl] .slick-prev:before {\n  content: \"→\";\n}\n.slick-next {\n  right: -25px;\n}\n[dir=rtl] .slick-next {\n  left: -25px;\n  right: auto;\n}\n.slick-next:before {\n  content: \"→\";\n}\n[dir=rtl] .slick-next:before {\n  content: \"←\";\n}\n/* Dots */\n.slick-dotted.slick-slider {\n  margin-bottom: 30px;\n}\n.slick-dots {\n  position: absolute;\n  bottom: -25px;\n  list-style: none;\n  display: block;\n  text-align: center;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n}\n.slick-dots li {\n  position: relative;\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  margin: 0 5px;\n  padding: 0;\n  cursor: pointer;\n}\n.slick-dots li button {\n  border: 0;\n  background: transparent;\n  display: block;\n  height: 20px;\n  width: 20px;\n  outline: none;\n  line-height: 0px;\n  font-size: 0px;\n  color: transparent;\n  padding: 5px;\n  cursor: pointer;\n}\n.slick-dots li button:hover, .slick-dots li button:focus {\n  outline: none;\n}\n.slick-dots li button:hover:before, .slick-dots li button:focus:before {\n  opacity: 1;\n}\n.slick-dots li button:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"•\";\n  width: 20px;\n  height: 20px;\n  font-family: \"slick\";\n  font-size: 6px;\n  line-height: 20px;\n  text-align: center;\n  color: black;\n  opacity: 0.25;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.slick-dots li.slick-active button:before {\n  color: black;\n  opacity: 0.75;\n}", "",{"version":3,"sources":["slick-theme.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAyChB,WAAA;AAGI;EACI,+DAAA;AAzCR;AA6CA,UAAA;AAEI;EACI,oBAAA;EACA,qBAAA;EACA,wJAAA;EACA,mBAAA;EACA,kBAAA;AA3CR;AA+CA,WAAA;AAEA;;EAEI,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,cAAA;EACA,eAAA;EACA,uBAAA;EACA,kBAAA;EACA,QAAA;EAGA,6BAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;AA9CJ;AA+CI;;;EACI,aAAA;EACA,uBAAA;EACA,kBAAA;AA3CR;AA4CQ;;;EACI,UAjEa;AAyBzB;AA2CI;;EACI,aApEmB;AA4B3B;AA0CI;;EACI,oBAlFY;EAmFZ,eAAA;EACA,cAAA;EACA,YAnFY;EAoFZ,aA7EgB;EA8EhB,mCAAA;EACA,kCAAA;AAvCR;AA2CA;EACI,WAAA;AAxCJ;AAyCI;EACI,UAAA;EACA,YAAA;AAvCR;AAyCI;EACI,YA9Fe;AAuDvB;AAwCQ;EACI,YA/FW;AAyDvB;AA2CA;EACI,YAAA;AAxCJ;AAyCI;EACI,WAAA;EACA,WAAA;AAvCR;AAyCI;EACI,YA3Ge;AAoEvB;AAwCQ;EACI,YA9GW;AAwEvB;AA2CA,SAAA;AAEA;EACI,mBAAA;AAzCJ;AA4CA;EACI,kBAAA;EACA,aAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,WAAA;AAzCJ;AA0CI;EACI,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,UAAA;EACA,eAAA;AAxCR;AAyCQ;EACI,SAAA;EACA,uBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,YAAA;EACA,eAAA;AAvCZ;AAwCY;EACI,aAAA;AAtChB;AAuCgB;EACI,UApJK;AA+GzB;AAwCY;EACI,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YA9JM;EA+JN,WAAA;EACA,YAAA;EACA,oBAxKI;EAyKJ,cAjKC;EAkKD,iBAAA;EACA,kBAAA;EACA,YAzKE;EA0KF,aAlKW;EAmKX,mCAAA;EACA,kCAAA;AAtChB;AAyCQ;EACI,YAhLM;EAiLN,aA3KY;AAoIxB","file":"slick-theme.scss","sourcesContent":["@charset \"UTF-8\";\n/* Slider */\n.slick-loading .slick-list {\n  background: #fff url(\"./ajax-loader.gif\") center center no-repeat;\n}\n\n/* Icons */\n@font-face {\n  font-family: \"slick\";\n  src: url(\"./fonts/slick.eot\");\n  src: url(\"./fonts/slick.eot?#iefix\") format(\"embedded-opentype\"), url(\"./fonts/slick.woff\") format(\"woff\"), url(\"./fonts/slick.ttf\") format(\"truetype\"), url(\"./fonts/slick.svg#slick\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Arrows */\n.slick-prev,\n.slick-next {\n  position: absolute;\n  display: block;\n  height: 20px;\n  width: 20px;\n  line-height: 0px;\n  font-size: 0px;\n  cursor: pointer;\n  background: transparent;\n  color: transparent;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n  -ms-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding: 0;\n  border: none;\n  outline: none;\n}\n.slick-prev:hover, .slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus {\n  outline: none;\n  background: transparent;\n  color: transparent;\n}\n.slick-prev:hover:before, .slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before {\n  opacity: 1;\n}\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before {\n  opacity: 0.25;\n}\n.slick-prev:before,\n.slick-next:before {\n  font-family: \"slick\";\n  font-size: 20px;\n  line-height: 1;\n  color: white;\n  opacity: 0.75;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-prev {\n  left: -25px;\n}\n[dir=rtl] .slick-prev {\n  left: auto;\n  right: -25px;\n}\n.slick-prev:before {\n  content: \"←\";\n}\n[dir=rtl] .slick-prev:before {\n  content: \"→\";\n}\n\n.slick-next {\n  right: -25px;\n}\n[dir=rtl] .slick-next {\n  left: -25px;\n  right: auto;\n}\n.slick-next:before {\n  content: \"→\";\n}\n[dir=rtl] .slick-next:before {\n  content: \"←\";\n}\n\n/* Dots */\n.slick-dotted.slick-slider {\n  margin-bottom: 30px;\n}\n\n.slick-dots {\n  position: absolute;\n  bottom: -25px;\n  list-style: none;\n  display: block;\n  text-align: center;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n}\n.slick-dots li {\n  position: relative;\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  margin: 0 5px;\n  padding: 0;\n  cursor: pointer;\n}\n.slick-dots li button {\n  border: 0;\n  background: transparent;\n  display: block;\n  height: 20px;\n  width: 20px;\n  outline: none;\n  line-height: 0px;\n  font-size: 0px;\n  color: transparent;\n  padding: 5px;\n  cursor: pointer;\n}\n.slick-dots li button:hover, .slick-dots li button:focus {\n  outline: none;\n}\n.slick-dots li button:hover:before, .slick-dots li button:focus:before {\n  opacity: 1;\n}\n.slick-dots li button:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"•\";\n  width: 20px;\n  height: 20px;\n  font-family: \"slick\";\n  font-size: 6px;\n  line-height: 20px;\n  text-align: center;\n  color: black;\n  opacity: 0.25;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.slick-dots li.slick-active button:before {\n  color: black;\n  opacity: 0.75;\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/slick-carousel/slick/slick.scss":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--14-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--14-3!./node_modules/sass-loader/dist/cjs.js??ref--14-4!./node_modules/slick-carousel/slick/slick.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* Slider */\n.slick-slider {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  touch-action: pan-y;\n  -webkit-tap-highlight-color: transparent;\n}\n.slick-list {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  margin: 0;\n  padding: 0;\n}\n.slick-list:focus {\n  outline: none;\n}\n.slick-list.dragging {\n  cursor: pointer;\n  cursor: hand;\n}\n.slick-slider .slick-track,\n.slick-slider .slick-list {\n  transform: translate3d(0, 0, 0);\n}\n.slick-track {\n  position: relative;\n  left: 0;\n  top: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.slick-track:before, .slick-track:after {\n  content: \"\";\n  display: table;\n}\n.slick-track:after {\n  clear: both;\n}\n.slick-loading .slick-track {\n  visibility: hidden;\n}\n.slick-slide {\n  float: left;\n  height: 100%;\n  min-height: 1px;\n  display: none;\n}\n[dir=rtl] .slick-slide {\n  float: right;\n}\n.slick-slide img {\n  display: block;\n}\n.slick-slide.slick-loading img {\n  display: none;\n}\n.slick-slide.dragging img {\n  pointer-events: none;\n}\n.slick-initialized .slick-slide {\n  display: block;\n}\n.slick-loading .slick-slide {\n  visibility: hidden;\n}\n.slick-vertical .slick-slide {\n  display: block;\n  height: auto;\n  border: 1px solid transparent;\n}\n.slick-arrow.slick-hidden {\n  display: none;\n}", "",{"version":3,"sources":["slick.scss"],"names":[],"mappings":"AAAA,WAAA;AAEA;EACI,kBAAA;EACA,cAAA;EACA,sBAAA;EACA,2BAAA;EACA,yBAAA;EAIA,iBAAA;EAEA,mBAAA;EACA,wCAAA;AAAJ;AAEA;EACI,kBAAA;EACA,gBAAA;EACA,cAAA;EACA,SAAA;EACA,UAAA;AACJ;AACI;EACI,aAAA;AACR;AAEI;EACI,eAAA;EACA,YAAA;AAAR;AAGA;;EAMI,+BAAA;AAAJ;AAGA;EACI,kBAAA;EACA,OAAA;EACA,MAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;AAAJ;AAEI;EAEI,WAAA;EACA,cAAA;AADR;AAII;EACI,WAAA;AAFR;AAKI;EACI,kBAAA;AAHR;AAMA;EACI,WAAA;EACA,YAAA;EACA,eAAA;EAWA,aAAA;AAbJ;AAGI;EACI,YAAA;AADR;AAGI;EACI,cAAA;AADR;AAGI;EACI,aAAA;AADR;AAMI;EACI,oBAAA;AAJR;AAOI;EACI,cAAA;AALR;AAQI;EACI,kBAAA;AANR;AASI;EACI,cAAA;EACA,YAAA;EACA,6BAAA;AAPR;AAUA;EACI,aAAA;AAPJ","file":"slick.scss","sourcesContent":["/* Slider */\n\n.slick-slider {\n    position: relative;\n    display: block;\n    box-sizing: border-box;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -ms-touch-action: pan-y;\n    touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n.slick-list {\n    position: relative;\n    overflow: hidden;\n    display: block;\n    margin: 0;\n    padding: 0;\n\n    &:focus {\n        outline: none;\n    }\n\n    &.dragging {\n        cursor: pointer;\n        cursor: hand;\n    }\n}\n.slick-slider .slick-track,\n.slick-slider .slick-list {\n    -webkit-transform: translate3d(0, 0, 0);\n    -moz-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    -o-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n}\n\n.slick-track {\n    position: relative;\n    left: 0;\n    top: 0;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n\n    &:before,\n    &:after {\n        content: \"\";\n        display: table;\n    }\n\n    &:after {\n        clear: both;\n    }\n\n    .slick-loading & {\n        visibility: hidden;\n    }\n}\n.slick-slide {\n    float: left;\n    height: 100%;\n    min-height: 1px;\n    [dir=\"rtl\"] & {\n        float: right;\n    }\n    img {\n        display: block;\n    }\n    &.slick-loading img {\n        display: none;\n    }\n\n    display: none;\n\n    &.dragging img {\n        pointer-events: none;\n    }\n\n    .slick-initialized & {\n        display: block;\n    }\n\n    .slick-loading & {\n        visibility: hidden;\n    }\n\n    .slick-vertical & {\n        display: block;\n        height: auto;\n        border: 1px solid transparent;\n    }\n}\n.slick-arrow.slick-hidden {\n    display: none;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--14-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--14-3!./node_modules/sass-loader/dist/cjs.js??ref--14-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  height: 100%;\n  padding: 0px;\n  margin: 0px;\n}\nhtml h1, body h1 {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 24px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 700;\n  line-height: 26.4px;\n}\nhtml h3, body h3 {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 700;\n  line-height: 15.4px;\n}\nhtml p, body p {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 400;\n  line-height: 20px;\n}\nhtml blockquote, body blockquote {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 21px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 400;\n  line-height: 30px;\n}\nhtml pre, body pre {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 400;\n  line-height: 18.5714px;\n}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,8EAAA;AAEA;EACK,YAAA;EACA,YAAA;EACA,WAAA;AAAL;AAES;EAAK,2DAAA;EAA6D,eAAA;EAAiB,kBAAA;EAAoB,oBAAA;EAAsB,gBAAA;EAAkB,mBAAA;AAMxJ;AAN+K;EAAK,2DAAA;EAA6D,eAAA;EAAiB,kBAAA;EAAoB,oBAAA;EAAsB,gBAAA;EAAkB,mBAAA;AAc9T;AAdqV;EAAI,2DAAA;EAA6D,eAAA;EAAiB,kBAAA;EAAoB,oBAAA;EAAsB,gBAAA;EAAkB,iBAAA;AAsBne;AAtBwf;EAAa,2DAAA;EAA6D,eAAA;EAAiB,kBAAA;EAAoB,oBAAA;EAAsB,gBAAA;EAAkB,iBAAA;AA8B/oB;AA9BoqB;EAAM,2DAAA;EAA6D,eAAA;EAAiB,kBAAA;EAAoB,oBAAA;EAAsB,gBAAA;EAAkB,sBAAA;AAsCpzB","file":"styles.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n\nhtml, body {\n     height: 100%; \n     padding: 0px;\n     margin: 0px;\n     \n         h1 { font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif; font-size: 24px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 26.4px; } h3 { font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 15.4px; } p { font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 20px; } blockquote { font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif; font-size: 21px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 30px; } pre { font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif; font-size: 13px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 18.5714px; }\n\n}\n\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
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

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.scss":
/*!************************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--14-1!../../postcss-loader/src??embedded!../../resolve-url-loader??ref--14-3!../../sass-loader/dist/cjs.js??ref--14-4!./slick-theme.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/slick-carousel/slick/slick-theme.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.scss":
/*!******************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--14-1!../../postcss-loader/src??embedded!../../resolve-url-loader??ref--14-3!../../sass-loader/dist/cjs.js??ref--14-4!./slick.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/slick-carousel/slick/slick.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
    var nonce =  true ? __webpack_require__.nc : undefined;

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

  if (sourceMap && btoa) {
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

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--14-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--14-3!../node_modules/sass-loader/dist/cjs.js??ref--14-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 2:
/*!***********************************************************************************************************************************!*\
  !*** multi ./src/styles.scss ./node_modules/slick-carousel/slick/slick.scss ./node_modules/slick-carousel/slick/slick-theme.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\DAVE_MATICS\Downloads\2021\New folder\Carousel-main\src\styles.scss */"./src/styles.scss");
__webpack_require__(/*! C:\Users\DAVE_MATICS\Downloads\2021\New folder\Carousel-main\node_modules\slick-carousel\slick\slick.scss */"./node_modules/slick-carousel/slick/slick.scss");
module.exports = __webpack_require__(/*! C:\Users\DAVE_MATICS\Downloads\2021\New folder\Carousel-main\node_modules\slick-carousel\slick\slick-theme.scss */"./node_modules/slick-carousel/slick/slick-theme.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map