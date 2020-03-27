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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Progress_Bar_Block_block_js__ = __webpack_require__(/*! ./Progress_Bar_Block/block.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Timer_Block_Timer_js__ = __webpack_require__(/*! ./Timer_Block/Timer.js */ 4);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new Progress_Bar_Block folder in this dir and include code\n * for that Progress_Bar_Block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IFByb2dyZXNzX0Jhcl9CbG9jayBmb2xkZXIgaW4gdGhpcyBkaXIgYW5kIGluY2x1ZGUgY29kZVxuICogZm9yIHRoYXQgUHJvZ3Jlc3NfQmFyX0Jsb2NrIGhlcmUgYXMgd2VsbC5cbiAqXG4gKiBBbGwgYmxvY2tzIHNob3VsZCBiZSBpbmNsdWRlZCBoZXJlIHNpbmNlIHRoaXMgaXMgdGhlIGZpbGUgdGhhdFxuICogV2VicGFjayBpcyBjb21waWxpbmcgYXMgdGhlIGlucHV0IGZpbGUuXG4gKi9cblxuaW1wb3J0ICcuL1Byb2dyZXNzX0Jhcl9CbG9jay9ibG9jay5qcyc7XG5pbXBvcnQgJy4vVGltZXJfQmxvY2svVGltZXIuanMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*****************************************!*\
  !*** ./src/Progress_Bar_Block/block.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/**\n * BLOCK: progressbar\n *\n * Registering a basic Progress_Bar_Block with Gutenberg.\n * Simple Progress_Bar_Block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new Progress_Bar_Block provided a unique name and an object defining its\n * behavior. Once registered, the Progress_Bar_Block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The Progress_Bar_Block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('cgb/progressbar-block', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-Progress_Bar_Block.\n\ttitle: __('Progress Bar'), // Block title.\n\ticon: 'smiley', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'magik-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('progressbar — CGB Block'), __('CGB Example'), __('create-guten-Progress_Bar_Block')],\n\tattributes: {\n\t\tcontent: { type: 'string' },\n\t\tcolor: { type: 'string' },\n\t\tPercentageOfProgressBar: { type: 'string' }\n\t},\n\n\t/**\n  * The edit function describes the structure of your Progress_Bar_Block in the context of the editor.\n  * This represents what the editor will render when the Progress_Bar_Block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Component.\n  */\n\tedit: function edit(props) {\n\t\t// Creates a <p class='wp-Progress_Bar_Block-cgb-Progress_Bar_Block-progressbar'></p>.\n\n\t\t{\n\t\t\tprops.attributes.content = \"Loading\";\n\t\t}\n\t\t{\n\t\t\tprops.attributes.PercentageOfProgressBar = \"100%\";\n\t\t}\n\n\t\tfunction IncreaseProgressBar() {\n\t\t\tvar _arr = [1, 2, 3, 4];\n\n\t\t\tfor (var _i = 0; _i < _arr.length; _i++) {\n\t\t\t\tvar i = _arr[_i];\n\t\t\t\tdocument.getElementById('Bar').style.cssText = \"width:\" + i * 25 + \"%\";\n\t\t\t\t//\n\t\t\t\t// props.attributes.PercentageOfProgressBar=i*25 + \"%\"\n\t\t\t}\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'progress-bar' },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ id: 'Bar', className: 'IncreaseBar', style: { width: props.attributes.PercentageOfProgressBar } },\n\t\t\t\t'Loading'\n\t\t\t)\n\t\t);\n\t},\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Frontend HTML.\n  */\n\tsave: function save(props) {\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'progress-bar' },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'IncreaseBar', style: { width: props.attributes.PercentageOfProgressBar } },\n\t\t\t\t'Loading'\n\t\t\t)\n\t\t);\n\t}\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9Qcm9ncmVzc19CYXJfQmxvY2svYmxvY2suanM/YTE1MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJMT0NLOiBwcm9ncmVzc2JhclxuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgUHJvZ3Jlc3NfQmFyX0Jsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIFByb2dyZXNzX0Jhcl9CbG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcblxuLyoqXG4gKiBSZWdpc3RlcjogYWEgR3V0ZW5iZXJnIEJsb2NrLlxuICpcbiAqIFJlZ2lzdGVycyBhIG5ldyBQcm9ncmVzc19CYXJfQmxvY2sgcHJvdmlkZWQgYSB1bmlxdWUgbmFtZSBhbmQgYW4gb2JqZWN0IGRlZmluaW5nIGl0c1xuICogYmVoYXZpb3IuIE9uY2UgcmVnaXN0ZXJlZCwgdGhlIFByb2dyZXNzX0Jhcl9CbG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgUHJvZ3Jlc3NfQmFyX0Jsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2NnYi9wcm9ncmVzc2Jhci1ibG9jaycsIHtcblx0Ly8gQmxvY2sgbmFtZS4gQmxvY2sgbmFtZXMgbXVzdCBiZSBzdHJpbmcgdGhhdCBjb250YWlucyBhIG5hbWVzcGFjZSBwcmVmaXguIEV4YW1wbGU6IG15LXBsdWdpbi9teS1jdXN0b20tUHJvZ3Jlc3NfQmFyX0Jsb2NrLlxuXHR0aXRsZTogX18oJ1Byb2dyZXNzIEJhcicpLCAvLyBCbG9jayB0aXRsZS5cblx0aWNvbjogJ3NtaWxleScsIC8vIEJsb2NrIGljb24gZnJvbSBEYXNoaWNvbnMg4oaSIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zLy5cblx0Y2F0ZWdvcnk6ICdtYWdpay1ibG9ja3MnLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cblx0a2V5d29yZHM6IFtfXygncHJvZ3Jlc3NiYXIg4oCUIENHQiBCbG9jaycpLCBfXygnQ0dCIEV4YW1wbGUnKSwgX18oJ2NyZWF0ZS1ndXRlbi1Qcm9ncmVzc19CYXJfQmxvY2snKV0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRjb250ZW50OiB7IHR5cGU6ICdzdHJpbmcnIH0sXG5cdFx0Y29sb3I6IHsgdHlwZTogJ3N0cmluZycgfSxcblx0XHRQZXJjZW50YWdlT2ZQcm9ncmVzc0JhcjogeyB0eXBlOiAnc3RyaW5nJyB9XG5cdH0sXG5cblx0LyoqXG4gICogVGhlIGVkaXQgZnVuY3Rpb24gZGVzY3JpYmVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBQcm9ncmVzc19CYXJfQmxvY2sgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGVkaXRvci5cbiAgKiBUaGlzIHJlcHJlc2VudHMgd2hhdCB0aGUgZWRpdG9yIHdpbGwgcmVuZGVyIHdoZW4gdGhlIFByb2dyZXNzX0Jhcl9CbG9jayBpcyB1c2VkLlxuICAqXG4gICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKlxuICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcy5cbiAgKiBAcmV0dXJucyB7TWl4ZWR9IEpTWCBDb21wb25lbnQuXG4gICovXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblx0XHQvLyBDcmVhdGVzIGEgPHAgY2xhc3M9J3dwLVByb2dyZXNzX0Jhcl9CbG9jay1jZ2ItUHJvZ3Jlc3NfQmFyX0Jsb2NrLXByb2dyZXNzYmFyJz48L3A+LlxuXG5cdFx0e1xuXHRcdFx0cHJvcHMuYXR0cmlidXRlcy5jb250ZW50ID0gXCJMb2FkaW5nXCI7XG5cdFx0fVxuXHRcdHtcblx0XHRcdHByb3BzLmF0dHJpYnV0ZXMuUGVyY2VudGFnZU9mUHJvZ3Jlc3NCYXIgPSBcIjEwMCVcIjtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBJbmNyZWFzZVByb2dyZXNzQmFyKCkge1xuXHRcdFx0dmFyIF9hcnIgPSBbMSwgMiwgMywgNF07XG5cblx0XHRcdGZvciAodmFyIF9pID0gMDsgX2kgPCBfYXJyLmxlbmd0aDsgX2krKykge1xuXHRcdFx0XHR2YXIgaSA9IF9hcnJbX2ldO1xuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQmFyJykuc3R5bGUuY3NzVGV4dCA9IFwid2lkdGg6XCIgKyBpICogMjUgKyBcIiVcIjtcblx0XHRcdFx0Ly9cblx0XHRcdFx0Ly8gcHJvcHMuYXR0cmlidXRlcy5QZXJjZW50YWdlT2ZQcm9ncmVzc0Jhcj1pKjI1ICsgXCIlXCJcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogJ3Byb2dyZXNzLWJhcicgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgaWQ6ICdCYXInLCBjbGFzc05hbWU6ICdJbmNyZWFzZUJhcicsIHN0eWxlOiB7IHdpZHRoOiBwcm9wcy5hdHRyaWJ1dGVzLlBlcmNlbnRhZ2VPZlByb2dyZXNzQmFyIH0gfSxcblx0XHRcdFx0J0xvYWRpbmcnXG5cdFx0XHQpXG5cdFx0KTtcblx0fSxcblxuXHQvKipcbiAgKiBUaGUgc2F2ZSBmdW5jdGlvbiBkZWZpbmVzIHRoZSB3YXkgaW4gd2hpY2ggdGhlIGRpZmZlcmVudCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb21iaW5lZFxuICAqIGludG8gdGhlIGZpbmFsIG1hcmt1cCwgd2hpY2ggaXMgdGhlbiBzZXJpYWxpemVkIGJ5IEd1dGVuYmVyZyBpbnRvIHBvc3RfY29udGVudC5cbiAgKlxuICAqIFRoZSBcInNhdmVcIiBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZCBhbmQgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuICAqXG4gICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAqXG4gICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzLlxuICAqIEByZXR1cm5zIHtNaXhlZH0gSlNYIEZyb250ZW5kIEhUTUwuXG4gICovXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiAncHJvZ3Jlc3MtYmFyJyB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdJbmNyZWFzZUJhcicsIHN0eWxlOiB7IHdpZHRoOiBwcm9wcy5hdHRyaWJ1dGVzLlBlcmNlbnRhZ2VPZlByb2dyZXNzQmFyIH0gfSxcblx0XHRcdFx0J0xvYWRpbmcnXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxuXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Qcm9ncmVzc19CYXJfQmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!********************************************!*\
  !*** ./src/Progress_Bar_Block/editor.scss ***!
  \********************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9Qcm9ncmVzc19CYXJfQmxvY2svZWRpdG9yLnNjc3M/MTVkYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1Byb2dyZXNzX0Jhcl9CbG9jay9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************************!*\
  !*** ./src/Progress_Bar_Block/style.scss ***!
  \*******************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9Qcm9ncmVzc19CYXJfQmxvY2svc3R5bGUuc2Nzcz9mMmI5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvUHJvZ3Jlc3NfQmFyX0Jsb2NrL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!**********************************!*\
  !*** ./src/Timer_Block/Timer.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('cgb/timer-block', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: 'Timer',\n\ticon: 'clock',\n\tcategory: 'magik-blocks',\n\tattributes: {\n\t\tcontent: { type: 'string' },\n\t\tcolor: { type: 'string' }\n\t},\n\n\t/* This configures how the content and color fields will work, and sets up the necessary elements */\n\n\tedit: function edit(props) {\n\t\tfunction updateContent(event) {\n\t\t\tprops.setAttributes({ content: event.target.value });\n\t\t}\n\t\tfunction updateColor(value) {\n\t\t\tprops.setAttributes({ color: value.hex });\n\t\t}\n\t\treturn React.createElement(\"table\", {\n\t\t\tclass: \"time-widget\",\n\t\t\tcellspacing: \"0\"\n\t\t}, React.createElement(\"tbody\", null, React.createElement(\"tr\", null, React.createElement(\"td\", {\n\t\t\tclass: \"tw-digit\",\n\t\t\talign: \"center\"\n\t\t}, \"10\"), React.createElement(\"td\", {\n\t\t\tclass: \"tw-digit\",\n\t\t\talign: \"center\"\n\t\t}, \"10\"), React.createElement(\"td\", {\n\t\t\tclass: \"tw-digit\",\n\t\t\talign: \"center\"\n\t\t}, \"10\"), React.createElement(\"td\", {\n\t\t\tclass: \"tw-digit\",\n\t\t\talign: \"center\"\n\t\t}, \"10\")), React.createElement(\"tr\", null, React.createElement(\"td\", {\n\t\t\tclass: \"tw-title\",\n\t\t\talign: \"center\"\n\t\t}, \"days\"), React.createElement(\"td\", {\n\t\t\tclass: \"tw-title\",\n\t\t\talign: \"center\"\n\t\t}, \"hours\"), React.createElement(\"td\", {\n\t\t\tclass: \"tw-title\",\n\t\t\talign: \"center\"\n\t\t}, \"minutes\"), React.createElement(\"td\", {\n\t\t\tclass: \"tw-title\",\n\t\t\talign: \"center\"\n\t\t}, \"seconds\"))));\n\t},\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\"h3\", { style: { border: \"3px solid \" + props.attributes.color } }, props.attributes.content);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9UaW1lcl9CbG9jay9UaW1lci5qcz8yNmViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5cbi8qKlxuICogUmVnaXN0ZXI6IGFhIEd1dGVuYmVyZyBCbG9jay5cbiAqXG4gKiBSZWdpc3RlcnMgYSBuZXcgYmxvY2sgcHJvdmlkZWQgYSB1bmlxdWUgbmFtZSBhbmQgYW4gb2JqZWN0IGRlZmluaW5nIGl0c1xuICogYmVoYXZpb3IuIE9uY2UgcmVnaXN0ZXJlZCwgdGhlIGJsb2NrIGlzIG1hZGUgZWRpdG9yIGFzIGFuIG9wdGlvbiB0byBhbnlcbiAqIGVkaXRvciBpbnRlcmZhY2Ugd2hlcmUgYmxvY2tzIGFyZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnY2diL3RpbWVyLWJsb2NrJywge1xuXHQvLyBCbG9jayBuYW1lLiBCbG9jayBuYW1lcyBtdXN0IGJlIHN0cmluZyB0aGF0IGNvbnRhaW5zIGEgbmFtZXNwYWNlIHByZWZpeC4gRXhhbXBsZTogbXktcGx1Z2luL215LWN1c3RvbS1ibG9jay5cblx0dGl0bGU6ICdUaW1lcicsXG5cdGljb246ICdjbG9jaycsXG5cdGNhdGVnb3J5OiAnbWFnaWstYmxvY2tzJyxcblx0YXR0cmlidXRlczoge1xuXHRcdGNvbnRlbnQ6IHsgdHlwZTogJ3N0cmluZycgfSxcblx0XHRjb2xvcjogeyB0eXBlOiAnc3RyaW5nJyB9XG5cdH0sXG5cblx0LyogVGhpcyBjb25maWd1cmVzIGhvdyB0aGUgY29udGVudCBhbmQgY29sb3IgZmllbGRzIHdpbGwgd29yaywgYW5kIHNldHMgdXAgdGhlIG5lY2Vzc2FyeSBlbGVtZW50cyAqL1xuXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblx0XHRmdW5jdGlvbiB1cGRhdGVDb250ZW50KGV2ZW50KSB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgY29udGVudDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuXHRcdH1cblx0XHRmdW5jdGlvbiB1cGRhdGVDb2xvcih2YWx1ZSkge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7IGNvbG9yOiB2YWx1ZS5oZXggfSk7XG5cdFx0fVxuXHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGFibGVcIiwge1xuXHRcdFx0Y2xhc3M6IFwidGltZS13aWRnZXRcIixcblx0XHRcdGNlbGxzcGFjaW5nOiBcIjBcIlxuXHRcdH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIHtcblx0XHRcdGNsYXNzOiBcInR3LWRpZ2l0XCIsXG5cdFx0XHRhbGlnbjogXCJjZW50ZXJcIlxuXHRcdH0sIFwiMTBcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7XG5cdFx0XHRjbGFzczogXCJ0dy1kaWdpdFwiLFxuXHRcdFx0YWxpZ246IFwiY2VudGVyXCJcblx0XHR9LCBcIjEwXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwge1xuXHRcdFx0Y2xhc3M6IFwidHctZGlnaXRcIixcblx0XHRcdGFsaWduOiBcImNlbnRlclwiXG5cdFx0fSwgXCIxMFwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIHtcblx0XHRcdGNsYXNzOiBcInR3LWRpZ2l0XCIsXG5cdFx0XHRhbGlnbjogXCJjZW50ZXJcIlxuXHRcdH0sIFwiMTBcIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIHtcblx0XHRcdGNsYXNzOiBcInR3LXRpdGxlXCIsXG5cdFx0XHRhbGlnbjogXCJjZW50ZXJcIlxuXHRcdH0sIFwiZGF5c1wiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIHtcblx0XHRcdGNsYXNzOiBcInR3LXRpdGxlXCIsXG5cdFx0XHRhbGlnbjogXCJjZW50ZXJcIlxuXHRcdH0sIFwiaG91cnNcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7XG5cdFx0XHRjbGFzczogXCJ0dy10aXRsZVwiLFxuXHRcdFx0YWxpZ246IFwiY2VudGVyXCJcblx0XHR9LCBcIm1pbnV0ZXNcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7XG5cdFx0XHRjbGFzczogXCJ0dy10aXRsZVwiLFxuXHRcdFx0YWxpZ246IFwiY2VudGVyXCJcblx0XHR9LCBcInNlY29uZHNcIikpKSk7XG5cdH0sXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIiwgeyBzdHlsZTogeyBib3JkZXI6IFwiM3B4IHNvbGlkIFwiICsgcHJvcHMuYXR0cmlidXRlcy5jb2xvciB9IH0sIHByb3BzLmF0dHJpYnV0ZXMuY29udGVudCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1RpbWVyX0Jsb2NrL1RpbWVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!************************************!*\
  !*** ./src/Timer_Block/style.scss ***!
  \************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9UaW1lcl9CbG9jay9zdHlsZS5zY3NzPzBjODciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9UaW1lcl9CbG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*************************************!*\
  !*** ./src/Timer_Block/editor.scss ***!
  \*************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9UaW1lcl9CbG9jay9lZGl0b3Iuc2Nzcz8yYjJjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvVGltZXJfQmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ })
/******/ ]);