/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack-plugin-serve/client.js":
/*!****************************************!*\
  !*** (webpack)-plugin-serve/client.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n  Copyright © 2018 Andrew Powell\n\n  This Source Code Form is subject to the terms of the Mozilla Public\n  License, v. 2.0. If a copy of the MPL was not distributed with this\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n  The above copyright notice and this permission notice shall be\n  included in all copies or substantial portions of this Source Code Form.\n*/\n\n/**\n * @note This file exists merely as an easy reference for folks adding it to their configuration entries\n */\n\n// (() => {\n//   // eslint-disable-next-line global-require\n//   const { run } = require('./lib/client/client');\n//   run(__webpack_hash__, ʎɐɹɔosǝʌɹǝs);\n// })();\n\n\n//# sourceURL=webpack:///(webpack)-plugin-serve/client.js?");

/***/ }),

/***/ "./scripts/controller.js":
/*!*******************************!*\
  !*** ./scripts/controller.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return processInput; });\nvar pressed={};\r\ndocument.onkeydown=function(e){\r\n     e = e || window.event;\r\n     pressed[e.keyCode] = true;\r\n}\r\n\r\ndocument.onkeyup=function(e){\r\n     e = e || window.event;\r\n     delete pressed[e.keyCode];\r\n}\r\n\r\nfunction processInput() {\r\n    if(pressed[87]) {\r\n        console.log(\"W\");\r\n    }\r\n\r\n    if(pressed[65]) {\r\n        console.log(\"A\");\r\n    }\r\n\r\n    if(pressed[83]) {\r\n        console.log(\"S\");\r\n    }\r\n\r\n    if(pressed[68]) {\r\n        console.log(\"D\");\r\n    }\r\n}\n\n//# sourceURL=webpack:///./scripts/controller.js?");

/***/ }),

/***/ "./scripts/main.js":
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ \"./scripts/controller.js\");\n/* harmony import */ var _updater_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updater.js */ \"./scripts/updater.js\");\n/* harmony import */ var _renderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderer.js */ \"./scripts/renderer.js\");\n\r\n\r\n\r\n\r\nconst MS_PER_UPDATE = 10;\r\nvar prev = null;\r\nvar lag = 0;\r\n\r\nfunction update(current) {\r\n    if(!prev) {\r\n        prev = current;\r\n    }\r\n    var elapsed = current - prev;\r\n    prev = current;\r\n    lag += elapsed;\r\n\r\n    Object(_controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    while(lag >= MS_PER_UPDATE) {\r\n        Object(_updater_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MS_PER_UPDATE);\r\n        lag -= MS_PER_UPDATE;\r\n    }\r\n    Object(_renderer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(lag/MS_PER_UPDATE);\r\n    window.requestAnimationFrame(update) \r\n}\r\n\r\nwindow.requestAnimationFrame(update) \r\n\r\nif (false)\r\n  {}\n\n//# sourceURL=webpack:///./scripts/main.js?");

/***/ }),

/***/ "./scripts/renderer.js":
/*!*****************************!*\
  !*** ./scripts/renderer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return draw; });\ndocument.body.style.margin = \"0px\";\r\ndocument.body.style.overflow = \"hidden\";\r\nlet canvas = document.createElement(\"canvas\");\r\ncanvas.width = window.innerWidth;\r\ncanvas.height = window.innerHeight;\r\ndocument.body.appendChild(canvas);\r\n\r\nlet ctx = canvas.getContext(\"2d\");\r\n\r\nfunction draw(offset) {\r\n    ctx.beginPath();\r\n    ctx.rect(0, 0, window.innerWidth/2, window.innerHeight);\r\n    ctx.fillStyle = '#ff0000';\r\n    ctx.fill();\r\n    ctx.closePath();\r\n\r\n    ctx.beginPath();\r\n    ctx.rect(window.innerWidth/2, 0, window.innerWidth/2, window.innerHeight);\r\n    ctx.fillStyle = '#000099';\r\n    ctx.fill();\r\n    ctx.closePath();\r\n}\r\n\n\n//# sourceURL=webpack:///./scripts/renderer.js?");

/***/ }),

/***/ "./scripts/updater.js":
/*!****************************!*\
  !*** ./scripts/updater.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return gameStep; });\nfunction gameStep(delta) {\r\n    \r\n}\n\n//# sourceURL=webpack:///./scripts/updater.js?");

/***/ }),

/***/ 0:
/*!***********************************************************!*\
  !*** multi ./scripts/main.js webpack-plugin-serve/client ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./scripts/main.js */\"./scripts/main.js\");\nmodule.exports = __webpack_require__(/*! webpack-plugin-serve/client */\"./node_modules/webpack-plugin-serve/client.js\");\n\n\n//# sourceURL=webpack:///multi_./scripts/main.js_webpack-plugin-serve/client?");

/***/ })

/******/ });