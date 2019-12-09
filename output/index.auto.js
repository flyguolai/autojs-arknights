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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/index.auto.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./images/add.png":
/*!************************!*\
  !*** ./images/add.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./scripts/index.auto.ts":
/*!*******************************!*\
  !*** ./scripts/index.auto.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var add_png_1 = __importDefault(__webpack_require__(/*! ../images/add.png */ "./images/add.png"));
var Index = (function () {
    function Index() {
    }
    Index.main = function () {
        if (images.requestScreenCapture()) {
            var bigImage = images.captureScreen();
            var targetImage = images.fromBase64(add_png_1.default);
            var p = images.findImage(bigImage, targetImage, {
                threshold: 0.8
            });
            if (p) {
                toast("找到啦" + p);
            }
            else {
                toast("没找到");
            }
        }
    };
    return Index;
}());
Index.main();


/***/ })

/******/ });
//# sourceMappingURL=index.auto.js.map