/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/canvas.js":
/*!*******************************!*\
  !*** ./src/modules/canvas.js ***!
  \*******************************/
/***/ (() => {

var next = document.getElementById('arrow-fon-next'),
  ctxN = next.getContext('2d');
ctxN.beginPath();
ctxN.moveTo(0, 150);
ctxN.quadraticCurveTo(0, 30, 240, 0);
ctxN.lineTo(240, 295);
ctxN.quadraticCurveTo(0, 265, 0, 150);
ctxN.fillStyle = '#E9EBF7';
ctxN.strokeStyle = '#E9EBF7';
ctxN.fill();
ctxN.stroke();
var prev = document.getElementById('arrow-fon-prev'),
  ctxP = prev.getContext('2d');
ctxP.beginPath();
ctxP.moveTo(0, 295);
ctxP.lineTo(0, 0);
ctxP.quadraticCurveTo(240, 30, 240, 150);
ctxP.quadraticCurveTo(240, 265, 0, 295);
ctxP.fillStyle = '#E9EBF7';
ctxP.strokeStyle = '#E9EBF7';
ctxP.fill();
ctxP.stroke();

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var tab = _toConsumableArray(document.getElementsByClassName('case-menu__link'));
var tabContent = _toConsumableArray(document.getElementsByClassName('case__item'));
function onClick(e) {
  tab.filter(function (element) {
    return element.closest('.case-menu__link_active');
  }).map(function (element) {
    return element.classList.remove('case-menu__link_active');
  });
  tabContent.filter(function (element) {
    return element.closest('.case__item_active');
  }).map(function (element) {
    return element.classList.remove('case__item_active');
  });
  var link = e.target;
  link.classList.toggle('case-menu__link_active');
  var index = tab.findIndex(function (element) {
    return element === link;
  });
  tabContent[index].classList.toggle('case__item_active');
  e.preventDefault();
}
tab.forEach(function (element) {
  element.addEventListener('click', onClick);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!../node_modules/normalize.css/normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Exo2-Regular.woff */ "./src/fonts/Exo2-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Exo2-SemiBold.woff */ "./src/fonts/Exo2-SemiBold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Exo2-Bold.woff */ "./src/fonts/Exo2-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img/people.svg */ "./src/img/people.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img/msg.svg */ "./src/img/msg.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img/price.svg */ "./src/img/price.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Exo2";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Exo2";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff");
  font-weight: 600;
  font-style: semibold;
}
@font-face {
  font-family: "Exo2";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff");
  font-weight: 700;
  font-style: bold;
}
.cases {
  font-family: "Exo2", "Arial", sans-serif;
  background-color: #FFFFFF;
  color: #333333;
  margin: auto 170px;
  max-width: 1920px;
}
.cases__title {
  font-weight: 600;
  font-size: 3.75rem;
  line-height: 1.2;
  text-transform: uppercase;
}
.cases__desc {
  display: flex;
  justify-content: space-between;
  border: 1px solid #E9EBF7;
  border-radius: 40px;
  padding: 60px 80px 130px 80px;
}

.case__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.case__main {
  margin-left: 8%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.case-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 1.4375rem;
  line-height: 1.2;
  margin-bottom: 35px;
}
.case-heading__logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.case-menu {
  background: #E9EBF7;
  border-radius: 37px;
  border: none;
  height: 90px;
  display: flex;
  margin-bottom: 46px;
}
.case-menu__list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 0;
  margin: auto;
}
.case-menu__item {
  list-style-type: none;
  width: 25%;
}
.case-menu__item :hover {
  background-color: #FFFFFF;
  border-radius: 34px;
  color: #333333;
}
.case-menu__link {
  text-decoration: none;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 52px;
  color: #8087A7;
  display: block;
  width: 100%;
  height: 52px;
  text-align: center;
}
.case-menu__link_active {
  background-color: #FFFFFF;
  border-radius: 34px;
  color: #333333;
}

.case__item {
  display: none;
  margin-bottom: 20px;
}

.case__item_active {
  display: block;
}

.funnel-box {
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}

.funnel {
  padding-bottom: 25px;
  position: relative;
}
.funnel__img-box {
  padding-top: 20px;
  width: 40%;
  text-align: center;
}
.funnel__img {
  width: 100%;
  height: 100%;
}
.funnel__desc {
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.05;
  width: 41%;
}
.funnel__desc-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  position: relative;
}
.funnel__desc-item::after {
  content: "";
  position: absolute;
  display: block;
  height: 1px;
  background-color: #E9EBF7;
  margin-top: 65px;
}
.funnel__desc-item::before {
  content: "";
  position: absolute;
  display: block;
  width: 9px;
  height: 9px;
  background-color: #E9EBF7;
  margin-top: 65px;
  border-radius: 50%;
}
.funnel__desc-item-human::after {
  width: 100%;
}
.funnel__desc-item-request::after {
  width: 108%;
  right: 0;
}
.funnel__desc-item-request::before {
  left: -8%;
}
.funnel__desc-item-price::after {
  width: 116%;
  right: 0;
}
.funnel__desc-item-price::before {
  left: -16%;
}
.funnel__desc-item-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
}
.funnel__desc-number {
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 1.2;
  position: relative;
  margin: 0;
}
.funnel__desc-number::before {
  content: "";
  position: absolute;
  display: block;
  background-repeat: no-repeat;
  margin-top: 12px;
  left: -61px;
}
.funnel__desc-number-human::before {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}
.funnel__desc-number-request::before {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}
.funnel__desc-number-price::before {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
}
.funnel__desc-text {
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.2;
  text-align: right;
}

.funnel__total {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a,
img {
  cursor: pointer;
}

.budget {
  display: flex;
  align-items: center;
  width: 40%;
  padding: 20px 25px;
  border: 1px solid #E9EBF7;
  border-radius: 7px;
}
.budget__price-box {
  margin-left: 20px;
  line-height: 1.2;
}
.budget__price {
  font-weight: 700;
  font-size: 1.5rem;
  color: #333333;
}
.budget__text {
  font-weight: 400;
  font-size: 0.875rem;
  color: #AAAAAA;
}

.funnel__result {
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.2;
  color: #43BEA2;
  text-align: right;
}

.btn-order-box {
  position: relative;
}
.btn-order-box::after {
  content: "";
  position: absolute;
  display: block;
  height: 1px;
  background-color: #E9EBF7;
  width: 100%;
  margin-top: -74px;
}

.btn-order {
  width: 200px;
  height: 52px;
  border: none;
  border-radius: 39px;
  background-color: #43BEA2;
  color: #FFFFFF;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.2;
  display: block;
  margin-left: auto;
}
.btn-order:hover {
  cursor: pointer;
  background-color: #333333;
}

.history {
  border: 1px solid #E9EBF7;
}
.history-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 21px 40px;
}
.history-box:first-child {
  border-bottom: 1px solid #E9EBF7;
}
.history__item {
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.2;
  width: 70%;
}
.history__title {
  font-weight: 700;
  font-size: 1.4375rem;
  margin: 0;
}
.history__text {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.history__price {
  width: 163px;
  height: 163px;
  border: none;
  border-radius: 50%;
  background-color: #E9EBF7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.history__price-text {
  margin: 10px;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.15;
}
.history__price-value {
  margin: 10px;
  font-weight: 700;
  font-size: 1.4375rem;
  line-height: 1.15;
}

.company-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.company__item {
  width: 50%;
  font-size: 0.875rem;
  line-height: 1.2;
}
.company__title {
  font-weight: 700;
}
.company__list {
  list-style-type: none;
  padding: 0;
  line-height: 2;
}

.done__list {
  -webkit-column-width: 45%;
          column-width: 45%;
  -webkit-column-count: 2;
          column-count: 2;
  -webkit-column-gap: 10%;
          column-gap: 10%;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.2;
}
.done__item {
  margin-bottom: 20px;
}

.arrow {
  position: absolute;
  top: calc(50% - 37px);
  cursor: pointer;
}
.arrow_prev {
  left: 0;
}
.arrow_next {
  right: 9px;
}

.slider__arrow {
  border-top: 4px solid #000000 !important;
  border-right: 4px solid #000000 !important;
}

.slider__arrow {
  width: 50px;
  height: 50px;
  margin: 16px 0 0 10px;
  display: inline-block;
  transition: 1s;
  position: absolute;
  top: 0;
  z-index: 2;
}
.slider__arrow_prev {
  left: 0;
  -webkit-transform: rotate(-135deg);
          transform: rotate(-135deg);
}
.slider__arrow_next {
  right: 0;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

.cases__desc {
  position: relative;
  z-index: 0;
}

.arrow__fon {
  width: 240px;
  height: 300px;
  position: absolute;
  top: -100px;
  z-index: 1;
}
.arrow__fon_next {
  right: -181px;
}
.arrow__fon_prev {
  left: -173px;
}

.case-burger {
  display: none;
}

@media (max-width: 320px){
  .cases {
    margin: auto 10px;
  }
  .cases__desc {
    padding: 10px 10px;
  }
  .cases__title {
    text-align: center;
  }
  .case__main {
    width: 100%;
    margin: 0;
  }
  .case__image-box {
    display: none;
  }
  .case-heading {
    flex-direction: column;
    font-size: 1.2rem;
    line-height: 1;
  }
  .case-heading__title {
    width: 100%;
    text-align: center;
  }
  .case-menu {
    display: none;
  }
  .case-burger {
    display: block;
    position: relative;
    width: 20px;
    height: 3px;
    background: #333333;
    margin-right: 23px;
    cursor: pointer;
    margin-bottom: 35px;
  }
  .case-burger::before {
    content: " ";
    position: absolute;
    width: 20px;
    height: 3px;
    background: #333333;
    margin-top: -5px;
  }
  .case-burger::after {
    content: " ";
    position: absolute;
    width: 20px;
    height: 3px;
    background: #333333;
    margin-top: 5px;
  }
  .funnel__img-box {
    display: none;
  }
  .funnel__desc {
    font-size: 1rem;
    line-height: 1;
    width: 100%;
  }
  .funnel__desc-item {
    flex-direction: column;
    justify-content: center;
  }
  .funnel__desc-number {
    font-size: 1.5rem;
    line-height: 1;
  }
  .funnel__desc-item::before {
    left: 0;
  }
  .funnel__result {
    text-align: left;
    font-size: 0.8rem;
    line-height: 1.4;
  }
  .funnel__desc-item-request::after,
  .funnel__desc-item-price::after {
    width: 100%;
  }
  .funnel__total {
    flex-direction: column;
  }
  .budget {
    border: none;
    width: 100%;
    padding: 0;
    margin-bottom: 30px;
  }
  .budget__price {
    font-size: 1rem;
    line-height: 1;
  }
  .btn-order {
    margin: auto;
  }
  .slider__arrow {
    width: 20px;
    height: 20px;
  }
  .arrow__fon {
    display: none;
  }
}`, "",{"version":3,"sources":["webpack://./src/style/_fonts.scss","webpack://./../../../../../%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B51/%D0%A0%D0%B0%D0%B1%D0%BE%D1%82%D0%B0/Wesma/job-w/src/index.scss","webpack://./src/style/blocks/_cases.scss","webpack://./src/style/_var.scss","webpack://./<no source>","webpack://./src/index.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,2DAAA;EACA,gBAAA;EACA,kBAAA;ACEF;ADCA;EACE,mBAAA;EACA,2DAAA;EACA,gBAAA;EACA,oBAAA;ACCF;ADEA;EACE,mBAAA;EACA,2DAAA;EACA,gBAAA;EACA,gBAAA;ACAF;AClBA;EACI,wCAAA;EACA,yBAAA;EACA,cCFG;EDGH,kBAAA;EACA,iBAAA;ADoBJ;AClBI;EACI,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBAAA;ADoBR;ACjBI;EACI,aAAA;EACA,8BAAA;EACA,yBAAA;EACA,mBAAA;EACA,6BAAA;ADmBR;;ACfA;EACI,WAAA;EACA,YAAA;EACA,iBAAA;ADkBJ;;ACfA;EACI,eAAA;EACA,UAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;ADkBJ;;ACfA;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,gBAAA;EACA,oBAAA;EACA,gBAAA;EACA,mBAAA;ADkBJ;AChBI;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;ADkBR;;ACdA;EACI,mBAAA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;ADiBJ;ACfI;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,UAAA;EACA,UAAA;EACA,YAAA;ADiBR;ACdI;EACI,qBAAA;EACA,UAAA;ADgBR;ACdQ;EACI,yBAAA;EACA,mBAAA;EACA,cAAA;ADgBZ;ACZI;EACI,qBAAA;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;EACA,cAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;ADcR;ACXI;EACI,yBAAA;EACA,mBAAA;EACA,cAAA;ADaR;;ACTA;EACI,aAAA;EACA,mBAAA;ADYJ;;ACTA;EACI,cAAA;ADYJ;;ACRA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;ADWJ;;ACRA;EACI,oBAAA;EACA,kBAAA;ADWJ;ACTI;EACI,iBAAA;EACA,UAAA;EACA,kBAAA;ADWR;ACRI;EACI,WAAA;EACA,YAAA;ADUR;ACPI;EACI,gBAAA;EACA,mBAAA;EACA,iBAAA;EACA,UAAA;ADSR;ACPQ;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;EACA,kBAAA;ADSZ;ACPY;EACI,WAAA;EACA,kBAAA;EACA,cAAA;EACA,WAAA;EACA,yBAAA;EACA,gBAAA;ADShB;ACNY;EACI,WAAA;EACA,kBAAA;EACA,cAAA;EACA,UAAA;EACA,WAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;ADQhB;ACHY;EACI,WAAA;ADKhB;ACAY;EACI,WAAA;EACA,QAAA;ADEhB;ACCY;EACI,SAAA;ADChB;ACIY;EACI,WAAA;EACA,QAAA;ADFhB;ACKY;EACI,UAAA;ADHhB;ACOQ;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,SAAA;ADLZ;ACQQ;EACI,gBAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;EACA,SAAA;ADNZ;ACQY;EACI,WAAA;EACA,kBAAA;EACA,cAAA;EACA,4BAAA;EACA,gBAAA;EACA,WAAA;ADNhB;ACSY;EACI,yDAAA;ADPhB;ACUY;EACI,yDAAA;ADRhB;ACWY;EACI,yDAAA;ADThB;ACaQ;EACI,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,iBAAA;ADXZ;;ACgBA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;ADbJ;;ACgBA;;EAEI,eAAA;ADbJ;;ACgBA;EACI,aAAA;EACA,mBAAA;EACA,UAAA;EACA,kBAAA;EACA,yBAAA;EACA,kBAAA;ADbJ;ACgBI;EACI,iBAAA;EACA,gBAAA;ADdR;ACiBI;EACI,gBAAA;EACA,iBAAA;EACA,cCzQD;AF0PP;ACkBI;EACI,gBAAA;EACA,mBAAA;EACA,cAAA;ADhBR;;ACsBA;EACI,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,cC1RK;ED2RL,iBAAA;ADnBJ;;ACsBA;EACI,kBAAA;ADnBJ;ACqBI;EACI,WAAA;EACA,kBAAA;EACA,cAAA;EACA,WAAA;EACA,yBAAA;EACA,WAAA;EACA,iBAAA;ADnBR;;ACuBA;EACI,YAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;EACA,yBCjTK;EDkTL,cAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,cAAA;EACA,iBAAA;ADpBJ;ACsBI;EACI,eAAA;EACA,yBC1TD;AFsSP;;ACyBA;EACI,yBAAA;ADtBJ;ACwBI;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,kBAAA;ADtBR;ACwBQ;EACI,gCAAA;ADtBZ;AC0BI;EACI,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,UAAA;ADxBR;AC2BI;EACI,gBAAA;EACA,oBAAA;EACA,SAAA;ADzBR;AC4BI;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;AD1BR;AC6BI;EACI,YAAA;EACA,aAAA;EACA,YAAA;EACA,kBAAA;EACA,yBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AD3BR;AC8BI;EACI,YAAA;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;AD5BR;AC+BI;EACI,YAAA;EACA,gBAAA;EACA,oBAAA;EACA,iBAAA;AD7BR;;ACiCA;EACI,aAAA;EACA,eAAA;EACA,2BAAA;AD9BJ;;ACmCI;EACI,UAAA;EACA,mBAAA;EACA,gBAAA;ADhCR;ACmCI;EACI,gBAAA;ADjCR;ACoCI;EACI,qBAAA;EACA,UAAA;EACA,cAAA;ADlCR;;ACwCI;EACI,yBAAA;UAAA,iBAAA;EACA,uBAAA;UAAA,eAAA;EACA,uBAAA;UAAA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;ADrCR;ACwCI;EACI,mBAAA;ADtCR;;AC0CA;EACI,kBAAA;EACA,qBAAA;EACA,eAAA;ADvCJ;ACyCI;EACI,OAAA;ADvCR;AC0CI;EACI,UAAA;ADxCR;;AC4CA;EAGI,wCAAA;EACA,0CAAA;ADnCJ;;AC+BA;EACI,WAAA;EACA,YAAA;EAGA,qBAAA;EACA,qBAAA;EACA,cAAA;EACA,kBAAA;EACA,MAAA;EACA,UAAA;ADzCJ;AC2CI;EACI,OAAA;EACA,kCAAA;UAAA,0BAAA;ADzCR;AC4CI;EACI,QAAA;EACA,gCAAA;UAAA,wBAAA;AD1CR;;AC8CA;EACI,kBAAA;EACA,UAAA;AD3CJ;;AC8CA;EACI,YAAA;EACA,aAAA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;AD3CJ;AC6CI;EACI,aAAA;AD3CR;AC8CI;EACI,YAAA;AD5CR;;ACgDA;EACI,aAAA;AD7CJ;;AGnbA;EFoeI;IACI,iBAAA;ED7CN;EC+CM;IACI,kBAAA;ED7CV;ECgDM;IACI,kBAAA;ED9CV;ECoDM;IACI,WAAA;IACA,SAAA;EDlDV;ECqDM;IACI,aAAA;EDnDV;ECsDM;IACI,sBAAA;IACA,iBAAA;IACA,cAAA;EDpDV;ECsDU;IACI,WAAA;IACA,kBAAA;EDpDd;ECwDM;IACI,aAAA;EDtDV;ECyDM;IACI,cAAA;IACA,kBAAA;IACA,WAAA;IACA,WAAA;IACA,mBAAA;IACA,kBAAA;IACA,eAAA;IACA,mBAAA;EDvDV;ECyDU;IACI,YAAA;IACA,kBAAA;IACA,WAAA;IACA,WAAA;IACA,mBAAA;IACA,gBAAA;EDvDd;EC0DU;IACI,YAAA;IACA,kBAAA;IACA,WAAA;IACA,WAAA;IACA,mBAAA;IACA,eAAA;EDxDd;EC+DM;IACI,aAAA;ED7DV;ECgEM;IACI,eAAA;IACA,cAAA;IACA,WAAA;ED9DV;ECiEM;IACI,sBAAA;IACA,uBAAA;ED/DV;ECkEM;IACI,iBAAA;IACA,cAAA;EDhEV;ECmEM;IACI,OAAA;EDjEV;ECoEM;IACI,gBAAA;IACA,iBAAA;IACA,gBAAA;EDlEV;ECsEE;;IAEI,WAAA;EDpEN;ECuEE;IACI,sBAAA;EDrEN;ECwEE;IACI,YAAA;IACA,WAAA;IACA,UAAA;IACA,mBAAA;EDtEN;ECwEM;IACI,eAAA;IACA,cAAA;EDtEV;EC0EE;IACI,YAAA;EDxEN;EC2EE;IACI,WAAA;IACA,YAAA;EDzEN;EC4EE;IACI,aAAA;ED1EN;AICF","sourcesContent":["@font-face {\r\n  font-family: \"Exo2\";\r\n  src: url(\"../fonts/Exo2-Regular.woff\") format(\"woff\");\r\n  font-weight: 400;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Exo2\";\r\n  src: url(\"../fonts/Exo2-SemiBold.woff\") format(\"woff\");\r\n  font-weight: 600;\r\n  font-style: semibold;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Exo2\";\r\n  src: url(\"../fonts/Exo2-Bold.woff\") format(\"woff\");\r\n  font-weight: 700;\r\n  font-style: bold;\r\n}","@import '~normalize.css';\n@font-face {\n  font-family: \"Exo2\";\n  src: url(\"../fonts/Exo2-Regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Exo2\";\n  src: url(\"../fonts/Exo2-SemiBold.woff\") format(\"woff\");\n  font-weight: 600;\n  font-style: semibold;\n}\n@font-face {\n  font-family: \"Exo2\";\n  src: url(\"../fonts/Exo2-Bold.woff\") format(\"woff\");\n  font-weight: 700;\n  font-style: bold;\n}\n.cases {\n  font-family: \"Exo2\", \"Arial\", sans-serif;\n  background-color: #FFFFFF;\n  color: #333333;\n  margin: auto 170px;\n  max-width: 1920px;\n}\n.cases__title {\n  font-weight: 600;\n  font-size: 3.75rem;\n  line-height: 1.2;\n  text-transform: uppercase;\n}\n.cases__desc {\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid #E9EBF7;\n  border-radius: 40px;\n  padding: 60px 80px 130px 80px;\n}\n\n.case__image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.case__main {\n  margin-left: 8%;\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.case-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-weight: 700;\n  font-size: 1.4375rem;\n  line-height: 1.2;\n  margin-bottom: 35px;\n}\n.case-heading__logo {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.case-menu {\n  background: #E9EBF7;\n  border-radius: 37px;\n  border: none;\n  height: 90px;\n  display: flex;\n  margin-bottom: 46px;\n}\n.case-menu__list {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  padding: 0;\n  margin: auto;\n}\n.case-menu__item {\n  list-style-type: none;\n  width: 25%;\n}\n.case-menu__item :hover {\n  background-color: #FFFFFF;\n  border-radius: 34px;\n  color: #333333;\n}\n.case-menu__link {\n  text-decoration: none;\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 52px;\n  color: #8087A7;\n  display: block;\n  width: 100%;\n  height: 52px;\n  text-align: center;\n}\n.case-menu__link_active {\n  background-color: #FFFFFF;\n  border-radius: 34px;\n  color: #333333;\n}\n\n.case__item {\n  display: none;\n  margin-bottom: 20px;\n}\n\n.case__item_active {\n  display: block;\n}\n\n.funnel-box {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n}\n\n.funnel {\n  padding-bottom: 25px;\n  position: relative;\n}\n.funnel__img-box {\n  padding-top: 20px;\n  width: 40%;\n  text-align: center;\n}\n.funnel__img {\n  width: 100%;\n  height: 100%;\n}\n.funnel__desc {\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 1.05;\n  width: 41%;\n}\n.funnel__desc-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 30px;\n  position: relative;\n}\n.funnel__desc-item::after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  height: 1px;\n  background-color: #E9EBF7;\n  margin-top: 65px;\n}\n.funnel__desc-item::before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  width: 9px;\n  height: 9px;\n  background-color: #E9EBF7;\n  margin-top: 65px;\n  border-radius: 50%;\n}\n.funnel__desc-item-human::after {\n  width: 100%;\n}\n.funnel__desc-item-request::after {\n  width: 108%;\n  right: 0;\n}\n.funnel__desc-item-request::before {\n  left: -8%;\n}\n.funnel__desc-item-price::after {\n  width: 116%;\n  right: 0;\n}\n.funnel__desc-item-price::before {\n  left: -16%;\n}\n.funnel__desc-item-box {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 25px;\n}\n.funnel__desc-number {\n  font-weight: 400;\n  font-size: 2.5rem;\n  line-height: 1.2;\n  position: relative;\n  margin: 0;\n}\n.funnel__desc-number::before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  background-repeat: no-repeat;\n  margin-top: 12px;\n  left: -61px;\n}\n.funnel__desc-number-human::before {\n  background-image: url(/src/img/people.svg);\n}\n.funnel__desc-number-request::before {\n  background-image: url(/src/img/msg.svg);\n}\n.funnel__desc-number-price::before {\n  background-image: url(/src/img/price.svg);\n}\n.funnel__desc-text {\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 1.2;\n  text-align: right;\n}\n\n.funnel__total {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\na,\nimg {\n  cursor: pointer;\n}\n\n.budget {\n  display: flex;\n  align-items: center;\n  width: 40%;\n  padding: 20px 25px;\n  border: 1px solid #E9EBF7;\n  border-radius: 7px;\n}\n.budget__price-box {\n  margin-left: 20px;\n  line-height: 1.2;\n}\n.budget__price {\n  font-weight: 700;\n  font-size: 1.5rem;\n  color: #333333;\n}\n.budget__text {\n  font-weight: 400;\n  font-size: 0.875rem;\n  color: #AAAAAA;\n}\n\n.funnel__result {\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 1.2;\n  color: #43BEA2;\n  text-align: right;\n}\n\n.btn-order-box {\n  position: relative;\n}\n.btn-order-box::after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  height: 1px;\n  background-color: #E9EBF7;\n  width: 100%;\n  margin-top: -74px;\n}\n\n.btn-order {\n  width: 200px;\n  height: 52px;\n  border: none;\n  border-radius: 39px;\n  background-color: #43BEA2;\n  color: #FFFFFF;\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 1.2;\n  display: block;\n  margin-left: auto;\n}\n.btn-order:hover {\n  cursor: pointer;\n  background-color: #333333;\n}\n\n.history {\n  border: 1px solid #E9EBF7;\n}\n.history-box {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 21px 40px;\n}\n.history-box:first-child {\n  border-bottom: 1px solid #E9EBF7;\n}\n.history__item {\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 1.2;\n  width: 70%;\n}\n.history__title {\n  font-weight: 700;\n  font-size: 1.4375rem;\n  margin: 0;\n}\n.history__text {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.history__price {\n  width: 163px;\n  height: 163px;\n  border: none;\n  border-radius: 50%;\n  background-color: #E9EBF7;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.history__price-text {\n  margin: 10px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  line-height: 1.15;\n}\n.history__price-value {\n  margin: 10px;\n  font-weight: 700;\n  font-size: 1.4375rem;\n  line-height: 1.15;\n}\n\n.company-box {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n.company__item {\n  width: 50%;\n  font-size: 0.875rem;\n  line-height: 1.2;\n}\n.company__title {\n  font-weight: 700;\n}\n.company__list {\n  list-style-type: none;\n  padding: 0;\n  line-height: 2;\n}\n\n.done__list {\n  column-width: 45%;\n  column-count: 2;\n  column-gap: 10%;\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 1.2;\n}\n.done__item {\n  margin-bottom: 20px;\n}\n\n.arrow {\n  position: absolute;\n  top: calc(50% - 37px);\n  cursor: pointer;\n}\n.arrow_prev {\n  left: 0;\n}\n.arrow_next {\n  right: 9px;\n}\n\n.slider__arrow {\n  width: 50px;\n  height: 50px;\n  border-top: 4px solid #000000 !important;\n  border-right: 4px solid #000000 !important;\n  margin: 16px 0 0 10px;\n  display: inline-block;\n  transition: 1s;\n  position: absolute;\n  top: 0;\n  z-index: 2;\n}\n.slider__arrow_prev {\n  left: 0;\n  transform: rotate(-135deg);\n}\n.slider__arrow_next {\n  right: 0;\n  transform: rotate(45deg);\n}\n\n.cases__desc {\n  position: relative;\n  z-index: 0;\n}\n\n.arrow__fon {\n  width: 240px;\n  height: 300px;\n  position: absolute;\n  top: -100px;\n  z-index: 1;\n}\n.arrow__fon_next {\n  right: -181px;\n}\n.arrow__fon_prev {\n  left: -173px;\n}\n\n.case-burger {\n  display: none;\n}\n\n@media (max-width: 320px) {\n  .cases {\n    margin: auto 10px;\n  }\n  .cases__desc {\n    padding: 10px 10px;\n  }\n  .cases__title {\n    text-align: center;\n  }\n  .case__main {\n    width: 100%;\n    margin: 0;\n  }\n  .case__image-box {\n    display: none;\n  }\n  .case-heading {\n    flex-direction: column;\n    font-size: 1.2rem;\n    line-height: 1;\n  }\n  .case-heading__title {\n    width: 100%;\n    text-align: center;\n  }\n  .case-menu {\n    display: none;\n  }\n  .case-burger {\n    display: block;\n    position: relative;\n    width: 20px;\n    height: 3px;\n    background: #333333;\n    margin-right: 23px;\n    cursor: pointer;\n    margin-bottom: 35px;\n  }\n  .case-burger::before {\n    content: \" \";\n    position: absolute;\n    width: 20px;\n    height: 3px;\n    background: #333333;\n    margin-top: -5px;\n  }\n  .case-burger::after {\n    content: \" \";\n    position: absolute;\n    width: 20px;\n    height: 3px;\n    background: #333333;\n    margin-top: 5px;\n  }\n  .funnel__img-box {\n    display: none;\n  }\n  .funnel__desc {\n    font-size: 1rem;\n    line-height: 1;\n    width: 100%;\n  }\n  .funnel__desc-item {\n    flex-direction: column;\n    justify-content: center;\n  }\n  .funnel__desc-number {\n    font-size: 1.5rem;\n    line-height: 1;\n  }\n  .funnel__desc-item::before {\n    left: 0;\n  }\n  .funnel__result {\n    text-align: left;\n    font-size: 0.8rem;\n    line-height: 1.4;\n  }\n  .funnel__desc-item-request::after,\n  .funnel__desc-item-price::after {\n    width: 100%;\n  }\n  .funnel__total {\n    flex-direction: column;\n  }\n  .budget {\n    border: none;\n    width: 100%;\n    padding: 0;\n    margin-bottom: 30px;\n  }\n  .budget__price {\n    font-size: 1rem;\n    line-height: 1;\n  }\n  .btn-order {\n    margin: auto;\n  }\n  .slider__arrow {\n    width: 20px;\n    height: 20px;\n  }\n  .arrow__fon {\n    display: none;\n  }\n}",".cases {\r\n    font-family: \"Exo2\", \"Arial\", sans-serif;\r\n    background-color: #FFFFFF;\r\n    color: $text;\r\n    margin: auto 170px;\r\n    max-width: 1920px;\r\n\r\n    &__title {\r\n        font-weight: 600;\r\n        font-size: 3.75rem;\r\n        line-height: 1.2;\r\n        text-transform: uppercase;\r\n    }\r\n\r\n    &__desc {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        border: 1px solid #E9EBF7;\r\n        border-radius: 40px;\r\n        padding: 60px 80px 130px 80px;\r\n    }\r\n}\r\n\r\n.case__image {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.case__main {\r\n    margin-left: 8%;\r\n    width: 60%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n.case-heading {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    font-weight: 700;\r\n    font-size: 1.4375rem;\r\n    line-height: 1.2;\r\n    margin-bottom: 35px;\r\n\r\n    &__logo {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n    }\r\n}\r\n\r\n.case-menu {\r\n    background: #E9EBF7;\r\n    border-radius: 37px;\r\n    border: none;\r\n    height: 90px;\r\n    display: flex;\r\n    margin-bottom: 46px;\r\n\r\n    &__list {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        width: 90%;\r\n        padding: 0;\r\n        margin: auto;\r\n    }\r\n\r\n    &__item {\r\n        list-style-type: none;\r\n        width: calc(100% / 4);\r\n\r\n        :hover {\r\n            background-color: #FFFFFF;\r\n            border-radius: 34px;\r\n            color: #333333;\r\n        }\r\n    }\r\n\r\n    &__link {\r\n        text-decoration: none;\r\n        font-weight: 400;\r\n        font-size: 0.875rem;\r\n        line-height: 52px;\r\n        color: #8087A7;\r\n        display: block;\r\n        width: 100%;\r\n        height: 52px;\r\n        text-align: center;\r\n    }\r\n\r\n    &__link_active {\r\n        background-color: #FFFFFF;\r\n        border-radius: 34px;\r\n        color: #333333;\r\n    }\r\n}\r\n\r\n.case__item {\r\n    display: none;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.case__item_active {\r\n    display: block;\r\n}\r\n\r\n\r\n.funnel-box {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.funnel {\r\n    padding-bottom: 25px;\r\n    position: relative;\r\n\r\n    &__img-box {\r\n        padding-top: 20px;\r\n        width: 40%;\r\n        text-align: center;\r\n    }\r\n\r\n    &__img {\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n\r\n    &__desc {\r\n        font-weight: 400;\r\n        font-size: 0.875rem;\r\n        line-height: 1.05;\r\n        width: 41%;\r\n\r\n        &-item {\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: space-between;\r\n            margin-bottom: 30px;\r\n            position: relative;\r\n\r\n            &::after {\r\n                content: '';\r\n                position: absolute;\r\n                display: block;\r\n                height: 1px;\r\n                background-color: #E9EBF7;\r\n                margin-top: 65px;\r\n            }\r\n\r\n            &::before {\r\n                content: '';\r\n                position: absolute;\r\n                display: block;\r\n                width: 9px;\r\n                height: 9px;\r\n                background-color: #E9EBF7;\r\n                margin-top: 65px;\r\n                border-radius: 50%;\r\n            }\r\n        }\r\n\r\n        &-item-human {\r\n            &::after {\r\n                width: 100%;\r\n            }\r\n        }\r\n\r\n        &-item-request {\r\n            &::after {\r\n                width: 108%;\r\n                right: 0;\r\n            }\r\n\r\n            &::before {\r\n                left: -8%;\r\n            }\r\n        }\r\n\r\n        &-item-price {\r\n            &::after {\r\n                width: 116%;\r\n                right: 0;\r\n            }\r\n\r\n            &::before {\r\n                left: -16%;\r\n            }\r\n        }\r\n\r\n        &-item-box {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n            gap: 25px;\r\n        }\r\n\r\n        &-number {\r\n            font-weight: 400;\r\n            font-size: 2.5rem;\r\n            line-height: 1.2;\r\n            position: relative;\r\n            margin: 0;\r\n\r\n            &::before {\r\n                content: '';\r\n                position: absolute;\r\n                display: block;\r\n                background-repeat: no-repeat;\r\n                margin-top: 12px;\r\n                left: -61px;\r\n            }\r\n\r\n            &-human::before {\r\n                background-image: url(/src/img/people.svg);\r\n            }\r\n\r\n            &-request::before {\r\n                background-image: url(/src/img/msg.svg);\r\n            }\r\n\r\n            &-price::before {\r\n                background-image: url(/src/img/price.svg);\r\n            }\r\n        }\r\n\r\n        &-text {\r\n            font-weight: 400;\r\n            font-size: 0.875rem;\r\n            line-height: 1.2;\r\n            text-align: right;\r\n        }\r\n    }\r\n}\r\n\r\n.funnel__total {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\na,\r\nimg {\r\n    cursor: pointer;\r\n}\r\n\r\n.budget {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 40%;\r\n    padding: 20px 25px;\r\n    border: 1px solid #E9EBF7;\r\n    border-radius: 7px;\r\n\r\n\r\n    &__price-box {\r\n        margin-left: 20px;\r\n        line-height: 1.2;\r\n    }\r\n\r\n    &__price {\r\n        font-weight: 700;\r\n        font-size: 1.5rem;\r\n        color: $text;\r\n    }\r\n\r\n    &__text {\r\n        font-weight: 400;\r\n        font-size: 0.875rem;\r\n        color: #AAAAAA;\r\n    }\r\n}\r\n\r\n\r\n\r\n.funnel__result {\r\n    font-weight: 700;\r\n    font-size: 0.875rem;\r\n    line-height: 1.2;\r\n    color: $active;\r\n    text-align: right;\r\n}\r\n\r\n.btn-order-box {\r\n    position: relative;\r\n\r\n    &::after {\r\n        content: '';\r\n        position: absolute;\r\n        display: block;\r\n        height: 1px;\r\n        background-color: #E9EBF7;\r\n        width: 100%;\r\n        margin-top: -74px;\r\n    }\r\n}\r\n\r\n.btn-order {\r\n    width: 200px;\r\n    height: 52px;\r\n    border: none;\r\n    border-radius: 39px;\r\n    background-color: $active;\r\n    color: #FFFFFF;\r\n    font-weight: 400;\r\n    font-size: 0.875rem;\r\n    line-height: 1.2;\r\n    display: block;\r\n    margin-left: auto;\r\n\r\n    &:hover {\r\n        cursor: pointer;\r\n        background-color: $text;\r\n    }\r\n\r\n}\r\n\r\n.history {\r\n    border: 1px solid #E9EBF7;\r\n\r\n    &-box {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        padding: 21px 40px;\r\n\r\n        &:first-child {\r\n            border-bottom: 1px solid #E9EBF7;\r\n        }\r\n    }\r\n\r\n    &__item {\r\n        font-weight: 400;\r\n        font-size: 0.875rem;\r\n        line-height: 1.2;\r\n        width: 70%;\r\n    }\r\n\r\n    &__title {\r\n        font-weight: 700;\r\n        font-size: 1.4375rem;\r\n        margin: 0;\r\n    }\r\n\r\n    &__text {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n    }\r\n\r\n    &__price {\r\n        width: 163px;\r\n        height: 163px;\r\n        border: none;\r\n        border-radius: 50%;\r\n        background-color: #E9EBF7;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n    }\r\n\r\n    &__price-text {\r\n        margin: 10px;\r\n        font-weight: 600;\r\n        font-size: 0.875rem;\r\n        line-height: 1.15;\r\n    }\r\n\r\n    &__price-value {\r\n        margin: 10px;\r\n        font-weight: 700;\r\n        font-size: 1.4375rem;\r\n        line-height: 1.15;\r\n    }\r\n}\r\n\r\n.company-box {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.company {\r\n\r\n    &__item {\r\n        width: 50%;\r\n        font-size: 0.875rem;\r\n        line-height: 1.2;\r\n    }\r\n\r\n    &__title {\r\n        font-weight: 700;\r\n    }\r\n\r\n    &__list {\r\n        list-style-type: none;\r\n        padding: 0;\r\n        line-height: 2;\r\n    }\r\n}\r\n\r\n.done {\r\n\r\n    &__list {\r\n        column-width: 45%;\r\n        column-count: 2;\r\n        column-gap: 10%;\r\n        font-weight: 400;\r\n        font-size: 0.875rem;\r\n        line-height: 1.2;\r\n    }\r\n\r\n    &__item {\r\n        margin-bottom: 20px;\r\n    }\r\n}\r\n\r\n.arrow {\r\n    position: absolute;\r\n    top: calc(50% - 37px);\r\n    cursor: pointer;\r\n\r\n    &_prev {\r\n        left: 0;\r\n    }\r\n\r\n    &_next {\r\n        right: 9px;\r\n    }\r\n}\r\n\r\n.slider__arrow {\r\n    width: 50px;\r\n    height: 50px;\r\n    border-top: 4px solid #000000 !important;\r\n    border-right: 4px solid #000000 !important;\r\n    margin: 16px 0 0 10px;\r\n    display: inline-block;\r\n    transition: 1s;\r\n    position: absolute;\r\n    top: 0;\r\n    z-index: 2;\r\n\r\n    &_prev {\r\n        left: 0;\r\n        transform: rotate(-135deg);\r\n    }\r\n\r\n    &_next {\r\n        right: 0;\r\n        transform: rotate(45deg);\r\n    }\r\n}\r\n\r\n.cases__desc {\r\n    position: relative;\r\n    z-index: 0;\r\n}\r\n\r\n.arrow__fon {\r\n    width: 240px;\r\n    height: 300px;\r\n    position: absolute;\r\n    top: -100px;\r\n    z-index: 1;\r\n\r\n    &_next {\r\n        right: -181px;\r\n    }\r\n\r\n    &_prev {\r\n        left: -173px;\r\n    }\r\n}\r\n\r\n.case-burger {\r\n    display: none;\r\n}\r\n\r\n@media (max-width: 320px) {\r\n    .cases {\r\n        margin: auto 10px;\r\n\r\n        &__desc {\r\n            padding: 10px 10px;\r\n        }\r\n\r\n        &__title {\r\n            text-align: center;\r\n        }\r\n    }\r\n\r\n    .case {\r\n\r\n        &__main {\r\n            width: 100%;\r\n            margin: 0;\r\n        }\r\n\r\n        &__image-box {\r\n            display: none;\r\n        }\r\n\r\n        &-heading {\r\n            flex-direction: column;\r\n            font-size: 1.2rem;\r\n            line-height: 1;\r\n\r\n            &__title {\r\n                width: 100%;\r\n                text-align: center;\r\n            }\r\n        }\r\n\r\n        &-menu {\r\n            display: none;\r\n        }\r\n\r\n        &-burger {\r\n            display: block;\r\n            position: relative;\r\n            width: 20px;\r\n            height: 3px;\r\n            background: #333333;\r\n            margin-right: 23px;\r\n            cursor: pointer;\r\n            margin-bottom: 35px;\r\n\r\n            &::before {\r\n                content: \" \";\r\n                position: absolute;\r\n                width: 20px;\r\n                height: 3px;\r\n                background: #333333;\r\n                margin-top: -5px;\r\n            }\r\n\r\n            &::after {\r\n                content: \" \";\r\n                position: absolute;\r\n                width: 20px;\r\n                height: 3px;\r\n                background: #333333;\r\n                margin-top: 5px;\r\n            }\r\n        }\r\n\r\n    }\r\n\r\n    .funnel {\r\n        &__img-box {\r\n            display: none;\r\n        }\r\n\r\n        &__desc {\r\n            font-size: 1rem;\r\n            line-height: 1;\r\n            width: 100%;\r\n        }\r\n\r\n        &__desc-item {\r\n            flex-direction: column;\r\n            justify-content: center;\r\n        }\r\n\r\n        &__desc-number {\r\n            font-size: 1.5rem;\r\n            line-height: 1;\r\n        }\r\n\r\n        &__desc-item::before {\r\n            left: 0;\r\n        }\r\n\r\n        &__result {\r\n            text-align: left;\r\n            font-size: 0.8rem;\r\n            line-height: 1.4;\r\n        }\r\n    }\r\n\r\n    .funnel__desc-item-request::after,\r\n    .funnel__desc-item-price::after {\r\n        width: 100%;\r\n    }\r\n\r\n    .funnel__total {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .budget {\r\n        border: none;\r\n        width: 100%;\r\n        padding: 0;\r\n        margin-bottom: 30px;\r\n\r\n        &__price {\r\n            font-size: 1rem;\r\n            line-height: 1;\r\n        }\r\n    }\r\n\r\n    .btn-order {\r\n        margin: auto;\r\n    }\r\n\r\n    .slider__arrow {\r\n        width: 20px;\r\n        height: 20px;\r\n    }\r\n\r\n    .arrow__fon {\r\n        display: none;\r\n    }\r\n\r\n}","$active: #43BEA2;\r\n$text: #333333;\r\n\r\n\r\n\r\n",null,"@import '~normalize.css';\r\n@import 'style/fonts';\r\n@import 'style/var';\r\n@import 'style/blocks/cases';"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/img/erfan-banaei-p00r5JmTMpY-unsplash1.png */ "./src/img/erfan-banaei-p00r5JmTMpY-unsplash1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/img/Logo.svg */ "./src/img/Logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/img/Carpet-Gold.png */ "./src/img/Carpet-Gold.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../src/img/funnel-png.png */ "./src/img/funnel-png.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../src/img/people.svg */ "./src/img/people.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../src/img/msg.svg */ "./src/img/msg.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../src/img/price.svg */ "./src/img/price.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../src/img/graph.svg */ "./src/img/graph.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Document</title>\r\n\r\n</head>\r\n\r\n<body>\r\n  <main class=\"main\">\r\n    <section class=\"cases\">\r\n      <h2 class=\"cases__title\">Наши кейсы</h2>\r\n      <div class=\"cases__desc case slider__item slider__item_active\">\r\n        <div class=\"case__image-box\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" class=\"case__image\" alt=\"картинка\">\r\n        </div>\r\n        <div class=\"case__main\">\r\n          <div class=\"case__main-box\">\r\n            <div class=\"case-heading\">\r\n              <h3 class=\"case-heading__title\">Интернет-магазин ковров</h3>\r\n              <div class=\"case-heading__logo\">\r\n                <a class=\"case-heading__badge-box\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" class=\"case-heading__badge\" alt=\"логотип\">\r\n                </a>\r\n                <a class=\"case-heading__badge-name-box\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" class=\"case-heading__badge-name\" alt=\"логотип\">\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <nav class=\"case-burger\"></nav>\r\n            <nav class=\"case-menu\">\r\n              <ul class=\"case-menu__list\">\r\n                <li class=\"case-menu__item\">\r\n                  <a href=\"\" class=\"case-menu__link case-menu__link_active\">Воронка</a>\r\n                </li>\r\n                <li class=\"case-menu__item\">\r\n                  <a href=\"\" class=\"case-menu__link\">Было-стало</a>\r\n                </li>\r\n                <li class=\"case-menu__item\">\r\n                  <a href=\"\" class=\"case-menu__link\">О компании</a>\r\n                </li>\r\n                <li class=\"case-menu__item\">\r\n                  <a href=\"\" class=\"case-menu__link\">Что сделали</a>\r\n                </li>\r\n              </ul>\r\n            </nav>\r\n\r\n            <div class=\"case__item funnel case__item_active\">\r\n              <div class=\"funnel-box\">\r\n                <div class=\"funnel__img-box\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" class=\"funnel__img\" alt=\"логотип\">\r\n                </div>\r\n                <div class=\"funnel__desc\">\r\n                  <div class=\"funnel__desc-item funnel__desc-item-human\">\r\n                    <div class=\"funnel__desc-item-box\">\r\n                      <a href=\"\" class=\"funnel__desc-img-box\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" class=\"funnel__desc-img\" width=\"33\" height=\"26\" alt=\"people\">\r\n                      </a>\r\n                      <p class=\"funnel__desc-number\">3945</p>\r\n                    </div>\r\n                    <p class=\"funnel__desc-text\">привлечено за месяц, человек</p>\r\n                  </div>\r\n                  <div class=\"funnel__desc-item funnel__desc-item-request\">\r\n                    <div class=\"funnel__desc-item-box\">\r\n                      <a href=\"\" class=\"funnel__desc-img-box\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" class=\"funnel__desc-img\" width=\"36\" height=\"30\" alt=\"msg\">\r\n                      </a>\r\n                      <p class=\"funnel__desc-number\">3412</p>\r\n                    </div>\r\n                    <p class=\"funnel__desc-text\">заявок с сайта в месяц</p>\r\n                  </div>\r\n                  <div class=\"funnel__desc-item funnel__desc-item-price\">\r\n                    <div class=\"funnel__desc-item-box\">\r\n                      <a href=\"\" class=\"funnel__desc-img-box\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" class=\"funnel__desc-img\" width=\"36\" height=\"36\" alt=\"price\">\r\n                      </a>\r\n                      <p class=\"funnel__desc-number\">17</p>\r\n                    </div>\r\n                    <p class=\"funnel__desc-text\">средняя стоимость клика, рублей</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"funnel__total\">\r\n                <div class=\"funnel__budget budget\">\r\n                  <div class=\"budget__img-box\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" class=\"budget__img\" width=\"66\" height=\"66\" alt=\"бюджет\">\r\n                  </div>\r\n                  <div class=\"budget__price-box\">\r\n                    <div class=\"budget__price\">68 000 &#8381; / мес</div>\r\n                    <p class=\"budget__text\">бюджет на рекламу</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"funnel__result\">Трафик на сайт изменился на целевой<br>Стоимость 1 обращения уменьшилась на\r\n                  81%\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"case__item history\">\r\n              <section class=\"history-box\">\r\n                <div class=\"history__item\">\r\n                  <h4 class=\"history__title\">Было</h4>\r\n                  <div class=\"history__text\">\r\n                    <div class=\"history__text-item\">\r\n                      <p>Заявок/день 2</p>\r\n                      <p>Переходов на сайт/месяц 3 681</p>\r\n                    </div>\r\n                    <div class=\"history__text-item\">\r\n                      <p>Средняя стоимость клика 17 руб.</p>\r\n                      <p>Месячный бюджет 66 000 руб.</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"history__price\">\r\n                  <p class=\"history__price-text\">Стоимость заявки</p>\r\n                  <p class=\"history__price-value\">1100 руб.</p>\r\n                </div>\r\n              </section>\r\n              <section class=\"history-box\">\r\n                <div class=\"history__item\">\r\n                  <h4 class=\"history__title\">Стало</h4>\r\n                  <div class=\"history__text\">\r\n                    <div class=\"history__text-item\">\r\n                      <p>Заявок/день 11</p>\r\n                      <p>Переходов на сайт/месяц 3 945</p>\r\n                    </div>\r\n                    <div class=\"history__text-item\">\r\n                      <p>Средняя стоимость клика 17 руб.</p>\r\n                      <p>Месячный бюджет 68 000 руб.</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"history__price\">\r\n                  <p class=\"history__price-text\">Стоимость заявки</p>\r\n                  <p class=\"history__price-value\">206 руб.</p>\r\n                </div>\r\n              </section>\r\n            </div>\r\n\r\n            \r\n            <div class=\"case__item company\">\r\n              <div class=\"company-box\">\r\n                <div class=\"company__item\">\r\n                  <h4 class=\"company__title\">Тематика</h4>\r\n                  <div class=\"company__text\">Интернет-магазин ковров и ковровых покрытий</div>\r\n                </div>\r\n                <div class=\"company__item\">\r\n                  <h4 class=\"company__title\">Цели</h4>\r\n                  <ul class=\"company__list\">\r\n                    <li class=\"company__text\">-увеличить колличество заявок с сайта;</li>\r\n                    <li class=\"company__text\">-уменьшить стоимость заявки.</li>\r\n                  </ul>\r\n                </div>\r\n                <div class=\"company__item\">\r\n                  <h4 class=\"company__title\">Региональность</h4>\r\n                  <div class=\"company__text\">Москва/МО</div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"case__item done\">\r\n              <ul class=\"done__list\">\r\n                <li class=\"done__item\">проработали семантическое ядро на заранее оговоренные категории товаров;</li>\r\n                <li class=\"done__item\">подключили РСЯ с адаптивными креативными баннерами и видеообъявлениями;</li>\r\n                <li class=\"done__item\">разработали кампанию ретаргетинга по необходимым условиям возврата целевых\r\n                  пользователей на сайт;</li>\r\n                <li class=\"done__item\">исходя из аналитических данных внедрили корректировки показов объявлений для\r\n                  аудиторий (полу, возрасту), по времени заказов, по устройствам (мобильные, десктопные);</li>\r\n                <li class=\"done__item\">выполнили тестирование различных стратегий показов для поиска наиболее выгодного\r\n                  решения;</li>\r\n                <li class=\"done__item\">исключили неконверсионные площадки исходя из аналитических данных в ходе\r\n                  ежемесячной оптимизации;</li>\r\n                <li class=\"done__item\">исключили нецелевые поисковые запросы на основе аналитических данных по всем\r\n                  запросам за прошлый период работы рекламы (этим самым основной трафик изменился на целевой);</li>\r\n                <li class=\"done__item\">еженедельно оптимизировали работу кампаний для исключения нецелевых показов\r\n                  объявлений;</li>\r\n                <li class=\"done__item\">настроили магазин на Yandex.Market по моделям FBS, DBS;</li>\r\n                <li class=\"done__item\">настроили магазин на маркетплейсе СбермегаМаркет;</li>\r\n                <li class=\"done__item\">дополнительно запустили рекламную кампанию в Yandex.Direct \"Смарт-баннеры\" и\r\n                  создали адаптивные креативные баннеры с динамическим контентом для показов в сетях и товарной галерее.\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <div class=\"btn-order-box\">\r\n            <button name=\"сделать заказ\" class=\"btn-order\">Хочу так же!</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"arrow arrow_prev\">\r\n          <div class=\"slider__arrow slider__arrow_prev\"></div>\r\n          <canvas id=\"arrow-fon-prev\" class=\"arrow__fon arrow__fon_prev\" width=\"240\" height=\"300\"></canvas>\r\n        </div>\r\n        <div class=\"arrow arrow_next\">\r\n          <div class=\"slider__arrow slider__arrow_next\"> </div>\r\n          <canvas id=\"arrow-fon-next\" class=\"arrow__fon arrow__fon_next\" width=\"240\" height=\"300\"></canvas>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </main>\r\n\r\n  <footer>\r\n    <div class=\"image\"></div>\r\n  </footer>\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/group-css-media-queries-loader/lib/index.js!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/Exo2-Bold.woff":
/*!**********************************!*\
  !*** ./src/fonts/Exo2-Bold.woff ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Exo2-Bold.woff";

/***/ }),

/***/ "./src/fonts/Exo2-Regular.woff":
/*!*************************************!*\
  !*** ./src/fonts/Exo2-Regular.woff ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Exo2-Regular.woff";

/***/ }),

/***/ "./src/fonts/Exo2-SemiBold.woff":
/*!**************************************!*\
  !*** ./src/fonts/Exo2-SemiBold.woff ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Exo2-SemiBold.woff";

/***/ }),

/***/ "./src/img/Carpet-Gold.png":
/*!*********************************!*\
  !*** ./src/img/Carpet-Gold.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Carpet-Gold.png";

/***/ }),

/***/ "./src/img/Logo.svg":
/*!**************************!*\
  !*** ./src/img/Logo.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Logo.svg";

/***/ }),

/***/ "./src/img/erfan-banaei-p00r5JmTMpY-unsplash1.png":
/*!********************************************************!*\
  !*** ./src/img/erfan-banaei-p00r5JmTMpY-unsplash1.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/erfan-banaei-p00r5JmTMpY-unsplash1.png";

/***/ }),

/***/ "./src/img/funnel-png.png":
/*!********************************!*\
  !*** ./src/img/funnel-png.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/funnel-png.png";

/***/ }),

/***/ "./src/img/graph.svg":
/*!***************************!*\
  !*** ./src/img/graph.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/graph.svg";

/***/ }),

/***/ "./src/img/msg.svg":
/*!*************************!*\
  !*** ./src/img/msg.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/msg.svg";

/***/ }),

/***/ "./src/img/people.svg":
/*!****************************!*\
  !*** ./src/img/people.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/people.svg";

/***/ }),

/***/ "./src/img/price.svg":
/*!***************************!*\
  !*** ./src/img/price.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/price.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabs */ "./src/modules/tabs.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/canvas */ "./src/modules/canvas.js");
/* harmony import */ var _modules_canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_canvas__WEBPACK_IMPORTED_MODULE_3__);




})();

/******/ })()
;
//# sourceMappingURL=main.bb0a52f6ca604795657e.js.map