/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("sariska-annotation-sdk", ["React"], factory);
	else if(typeof exports === 'object')
		exports["sariska-annotation-sdk"] = factory(require("react"));
	else
		root["sariska-annotation-sdk"] = factory(root["React"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_react__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Canvas/index.js":
/*!****************************************!*\
  !*** ./src/components/Canvas/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useOnDraw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useOnDraw */ \"./src/hooks/useOnDraw.js\");\n\n\nvar Canvas = function Canvas(_ref) {\n  var width = _ref.width,\n    height = _ref.height,\n    lineColor = _ref.lineColor,\n    lineWidth = _ref.lineWidth,\n    zIndex = _ref.zIndex;\n  var _useOnDraw = (0,_hooks_useOnDraw__WEBPACK_IMPORTED_MODULE_1__.useOnDraw)(onDraw),\n    setCanvasRef = _useOnDraw.setCanvasRef,\n    onMouseDown = _useOnDraw.onMouseDown;\n  function onDraw(data) {\n    drawLine(data.ctx, data.point, data.prevPoint, lineColor, lineWidth);\n  }\n  function drawLine(ctx, end, start, color, width) {\n    var _start;\n    start = (_start = start) !== null && _start !== void 0 ? _start : end;\n    ctx.beginPath();\n    ctx.lineWidth = width;\n    ctx.strokeStyle = color;\n    ctx.moveTo(start.x, start.y);\n    ctx.lineTo(end.x, end.y);\n    ctx.stroke();\n    ctx.fillStyle = color;\n    ctx.beginPath();\n    ctx.arc(start.x, start.y, lineWidth / 2, 0, 2 * Math.PI);\n    ctx.fill();\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      position: 'absolute',\n      zIndex: zIndex !== null && zIndex !== void 0 ? zIndex : 10\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"canvas\", {\n    width: width,\n    height: height,\n    style: canvasStyle,\n    ref: setCanvasRef,\n    onMouseDown: onMouseDown\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Canvas);\nvar canvasStyle = {\n  border: \"1px solid black\"\n};\n\n//# sourceURL=webpack://sariska-annotation-sdk/./src/components/Canvas/index.js?");

/***/ }),

/***/ "./src/hooks/useOnDraw.js":
/*!********************************!*\
  !*** ./src/hooks/useOnDraw.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useOnDraw: () => (/* binding */ useOnDraw)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useOnDraw(onDraw) {\n  var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var prevPointRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  var isDrawingRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n  var mouseMoveListenerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var mouseUpListenerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var ctx = canvasRef.current.getContext('2d');\n    function computePointInCanvas(clientX, clientY) {\n      if (canvasRef.current) {\n        var boundingRect = canvasRef.current.getBoundingClientRect();\n        return {\n          x: clientX - boundingRect.left,\n          y: clientY - boundingRect.top\n        };\n      } else {\n        return null;\n      }\n    }\n    function initMouseMoveListener() {\n      var mouseMoveListener = function mouseMoveListener(e) {\n        if (isDrawingRef.current) {\n          var point = computePointInCanvas(e.clientX, e.clientY);\n          var prevPoint = prevPointRef.current;\n          if (onDraw) onDraw({\n            ctx: ctx,\n            point: point,\n            prevPoint: prevPoint\n          });\n          prevPointRef.current = point;\n        }\n      };\n      mouseMoveListenerRef.current = mouseMoveListener;\n      window.addEventListener(\"mousemove\", mouseMoveListener);\n    }\n    function initMouseUpListener() {\n      var mouseUpListener = function mouseUpListener() {\n        isDrawingRef.current = false;\n        prevPointRef.current = null;\n      };\n      mouseUpListenerRef.current = mouseUpListener;\n      window.addEventListener('mouseup', mouseUpListener);\n    }\n    function removeMouseEventListeners() {\n      if (mouseMoveListenerRef.current) {\n        window.removeEventListener('mousemove', mouseMoveListenerRef.current);\n      }\n      if (mouseUpListenerRef.current) {\n        window.removeEventListener('mouseup', mouseUpListenerRef.current);\n      }\n    }\n    initMouseMoveListener();\n    initMouseUpListener();\n    return function () {\n      removeMouseEventListeners();\n    };\n  }, [onDraw]);\n  function setCanvasRef(ref) {\n    if (!ref) return;\n    canvasRef.current = ref;\n  }\n  function onMouseDown() {\n    if (!canvasRef.current) return;\n    isDrawingRef.current = true;\n  }\n  return {\n    setCanvasRef: setCanvasRef,\n    onMouseDown: onMouseDown\n  };\n  // const canvasRef = useRef(null);\n  // const isDrawingRef = useRef(false);\n  // const mouseMoveListenerRef = useRef(null);\n  // const mouseDownListenerRef = useRef(null);\n  // const mouseUpListenerRef = useRef(null);\n\n  // const prevPointRef = useRef()\n\n  // useEffect(()=>{\n  //     return ()=>{\n  //         // if(mouseMoveListenerRef.current){\n  //         //     window.removeEventListener('mousemove', mouseMoveListenerRef.current);\n  //         // }\n  //         // if(mouseUpListenerRef.current){\n  //         //     window.removeEventListener('mouseup', mouseUpListenerRef.current);\n  //         // }\n  //     }\n  // },[])\n\n  // function setCanvasRef(ref){\n  //     if(!ref) return;\n  //     if(canvasRef.current){\n  //         canvasRef.current.removeEventListener('mousedown', mouseDownListenerRef.current);\n  //     }\n  //     canvasRef.current = ref;\n  //     initMouseMoveListener()\n  //     initMouseDownListener();\n  //     initMouseUpListener();\n  // }\n  // function initMouseMoveListener(){\n  //     const mouseMoveListener = (e) => {\n  //         console.log('isdr', isDrawingRef.current)\n  //         if(isDrawingRef.current){\n  //             const point = computePointInCanvas(e.clientX, e.clientY);\n  //             const ctx = canvasRef.current.getContext('2d');\n  //             if(onDraw) onDraw(ctx, point, prevPointRef.current);\n  //             prevPointRef.current = point;\n  //             console.log('point', point);\n  //         }\n  //     }\n  //     mouseMoveListenerRef.current = mouseMoveListener;\n  //     window.addEventListener(\"mousemove\", mouseMoveListener);\n  // }\n  // function initMouseUpListener(){\n  //     const mouseUpListener=()=>{\n  //         isDrawingRef.current = false;\n  //         prevPointRef.current = null;\n  //     }\n  //     mouseUpListenerRef.current = mouseUpListener;\n  //     window.addEventListener('mouseup', mouseUpListener);\n  // }\n  // function initMouseDownListener(){\n  //     if(!canvasRef.current) return;\n  //     const mouseDownListener = () => {\n  //         isDrawingRef.current = true;\n  //     };\n  //     mouseDownListenerRef.current = mouseDownListener;\n  //     canvasRef.current.addEventListener('mousedown', mouseDownListener);\n  // }\n  // function computePointInCanvas(clientX, clientY){\n  //     if(canvasRef.current){\n  //         const boundingRect = canvasRef.current.getBoundingClientRect();\n  //         return {\n  //             x: clientX - boundingRect.left,\n  //             y: clientY - boundingRect.top\n  //         }\n  //     }else{\n  //         return null;\n  //     }\n  // }\n  // return setCanvasRef;\n}\n\n//# sourceURL=webpack://sariska-annotation-sdk/./src/hooks/useOnDraw.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Canvas: () => (/* reexport safe */ _components_Canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _components_Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Canvas */ \"./src/components/Canvas/index.js\");\n\n\n\n//# sourceURL=webpack://sariska-annotation-sdk/./src/index.js?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"} ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});