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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Progress_Bar_Block_block_js__ = __webpack_require__(/*! ./Progress_Bar_Block/block.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Timer_Block_Timer_js__ = __webpack_require__(/*! ./Timer_Block/Timer.js */ 4);\n/**\r\n * Gutenberg Blocks\r\n *\r\n * All blocks related JavaScript files should be imported here.\r\n * You can create a new Progress_Bar_Block folder in this dir and include code\r\n * for that Progress_Bar_Block here as well.\r\n *\r\n * All blocks should be included here since this is the file that\r\n * Webpack is compiling as the input file.\r\n */\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogR3V0ZW5iZXJnIEJsb2Nrc1xyXG4gKlxyXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cclxuICogWW91IGNhbiBjcmVhdGUgYSBuZXcgUHJvZ3Jlc3NfQmFyX0Jsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXHJcbiAqIGZvciB0aGF0IFByb2dyZXNzX0Jhcl9CbG9jayBoZXJlIGFzIHdlbGwuXHJcbiAqXHJcbiAqIEFsbCBibG9ja3Mgc2hvdWxkIGJlIGluY2x1ZGVkIGhlcmUgc2luY2UgdGhpcyBpcyB0aGUgZmlsZSB0aGF0XHJcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxyXG4gKi9cblxuaW1wb3J0ICcuL1Byb2dyZXNzX0Jhcl9CbG9jay9ibG9jay5qcyc7XG5pbXBvcnQgJy4vVGltZXJfQmxvY2svVGltZXIuanMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*****************************************!*\
  !*** ./src/Progress_Bar_Block/block.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/**\r\n * BLOCK: progressbar\r\n *\r\n * Registering a basic Progress_Bar_Block with Gutenberg.\r\n * Simple Progress_Bar_Block, renders and saves the same content without any interactivity.\r\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\n/**\r\n * Register: aa Gutenberg Block.\r\n *\r\n * Registers a new Progress_Bar_Block provided a unique name and an object defining its\r\n * behavior. Once registered, the Progress_Bar_Block is made editor as an option to any\r\n * editor interface where blocks are implemented.\r\n *\r\n * @link https://wordpress.org/gutenberg/handbook/block-api/\r\n * @param  {string}   name     Block name.\r\n * @param  {Object}   settings Block settings.\r\n * @return {?WPBlock}          The Progress_Bar_Block, if it has been successfully\r\n *                             registered; otherwise `undefined`.\r\n */\n\nregisterBlockType('cgb/progressbar-block', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-Progress_Bar_Block.\n\ttitle: __('Progress Bar'), // Block title.\n\ticon: 'smiley', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'magik-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('progressbar — CGB Block'), __('CGB Example'), __('create-guten-Progress_Bar_Block')],\n\tattributes: {\n\t\tcontent: { type: 'string' },\n\t\tcolor: { type: 'string' },\n\t\tPercentageOfProgressBar: { type: 'string' }\n\t},\n\n\t/**\r\n  * The edit function describes the structure of your Progress_Bar_Block in the context of the editor.\r\n  * This represents what the editor will render when the Progress_Bar_Block is used.\r\n  *\r\n  * The \"edit\" property must be a valid function.\r\n  *\r\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\r\n  *\r\n  * @param {Object} props Props.\r\n  * @returns {Mixed} JSX Component.\r\n  */\n\tedit: function edit(props) {\n\t\t// Creates a <p class='wp-Progress_Bar_Block-cgb-Progress_Bar_Block-progressbar'></p>.\n\n\t\t{\n\t\t\tprops.attributes.content = \"Loading\";\n\t\t}\n\t\t{\n\t\t\tprops.attributes.PercentageOfProgressBar = \"100%\";\n\t\t}\n\n\t\tfunction IncreaseProgressBar() {\n\t\t\tvar _arr = [1, 2, 3, 4];\n\n\t\t\tfor (var _i = 0; _i < _arr.length; _i++) {\n\t\t\t\tvar i = _arr[_i];\n\t\t\t\tdocument.getElementById('Bar').style.cssText = \"width:\" + i * 25 + \"%\";\n\t\t\t\t//\n\t\t\t\t// props.attributes.PercentageOfProgressBar=i*25 + \"%\"\n\t\t\t}\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'progress-bar' },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ id: 'Bar', className: 'IncreaseBar', style: { width: props.attributes.PercentageOfProgressBar } },\n\t\t\t\t'Loading'\n\t\t\t)\n\t\t);\n\t},\n\n\t/**\r\n  * The save function defines the way in which the different attributes should be combined\r\n  * into the final markup, which is then serialized by Gutenberg into post_content.\r\n  *\r\n  * The \"save\" property must be specified and must be a valid function.\r\n  *\r\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\r\n  *\r\n  * @param {Object} props Props.\r\n  * @returns {Mixed} JSX Frontend HTML.\r\n  */\n\tsave: function save(props) {\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'progress-bar' },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'IncreaseBar', style: { width: props.attributes.PercentageOfProgressBar } },\n\t\t\t\t'Loading'\n\t\t\t)\n\t\t);\n\t}\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9Qcm9ncmVzc19CYXJfQmxvY2svYmxvY2suanM/YTE1MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQkxPQ0s6IHByb2dyZXNzYmFyXHJcbiAqXHJcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgUHJvZ3Jlc3NfQmFyX0Jsb2NrIHdpdGggR3V0ZW5iZXJnLlxyXG4gKiBTaW1wbGUgUHJvZ3Jlc3NfQmFyX0Jsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXHJcbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5cbi8qKlxyXG4gKiBSZWdpc3RlcjogYWEgR3V0ZW5iZXJnIEJsb2NrLlxyXG4gKlxyXG4gKiBSZWdpc3RlcnMgYSBuZXcgUHJvZ3Jlc3NfQmFyX0Jsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcclxuICogYmVoYXZpb3IuIE9uY2UgcmVnaXN0ZXJlZCwgdGhlIFByb2dyZXNzX0Jhcl9CbG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XHJcbiAqIGVkaXRvciBpbnRlcmZhY2Ugd2hlcmUgYmxvY2tzIGFyZSBpbXBsZW1lbnRlZC5cclxuICpcclxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gICBuYW1lICAgICBCbG9jayBuYW1lLlxyXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXHJcbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgUHJvZ3Jlc3NfQmFyX0Jsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cclxuICovXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjZ2IvcHJvZ3Jlc3NiYXItYmxvY2snLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLVByb2dyZXNzX0Jhcl9CbG9jay5cblx0dGl0bGU6IF9fKCdQcm9ncmVzcyBCYXInKSwgLy8gQmxvY2sgdGl0bGUuXG5cdGljb246ICdzbWlsZXknLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG5cdGNhdGVnb3J5OiAnbWFnaWstYmxvY2tzJywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG5cdGtleXdvcmRzOiBbX18oJ3Byb2dyZXNzYmFyIOKAlCBDR0IgQmxvY2snKSwgX18oJ0NHQiBFeGFtcGxlJyksIF9fKCdjcmVhdGUtZ3V0ZW4tUHJvZ3Jlc3NfQmFyX0Jsb2NrJyldLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0Y29udGVudDogeyB0eXBlOiAnc3RyaW5nJyB9LFxuXHRcdGNvbG9yOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG5cdFx0UGVyY2VudGFnZU9mUHJvZ3Jlc3NCYXI6IHsgdHlwZTogJ3N0cmluZycgfVxuXHR9LFxuXG5cdC8qKlxyXG4gICogVGhlIGVkaXQgZnVuY3Rpb24gZGVzY3JpYmVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBQcm9ncmVzc19CYXJfQmxvY2sgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGVkaXRvci5cclxuICAqIFRoaXMgcmVwcmVzZW50cyB3aGF0IHRoZSBlZGl0b3Igd2lsbCByZW5kZXIgd2hlbiB0aGUgUHJvZ3Jlc3NfQmFyX0Jsb2NrIGlzIHVzZWQuXHJcbiAgKlxyXG4gICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cclxuICAqXHJcbiAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXHJcbiAgKlxyXG4gICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzLlxyXG4gICogQHJldHVybnMge01peGVkfSBKU1ggQ29tcG9uZW50LlxyXG4gICovXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblx0XHQvLyBDcmVhdGVzIGEgPHAgY2xhc3M9J3dwLVByb2dyZXNzX0Jhcl9CbG9jay1jZ2ItUHJvZ3Jlc3NfQmFyX0Jsb2NrLXByb2dyZXNzYmFyJz48L3A+LlxuXG5cdFx0e1xuXHRcdFx0cHJvcHMuYXR0cmlidXRlcy5jb250ZW50ID0gXCJMb2FkaW5nXCI7XG5cdFx0fVxuXHRcdHtcblx0XHRcdHByb3BzLmF0dHJpYnV0ZXMuUGVyY2VudGFnZU9mUHJvZ3Jlc3NCYXIgPSBcIjEwMCVcIjtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBJbmNyZWFzZVByb2dyZXNzQmFyKCkge1xuXHRcdFx0dmFyIF9hcnIgPSBbMSwgMiwgMywgNF07XG5cblx0XHRcdGZvciAodmFyIF9pID0gMDsgX2kgPCBfYXJyLmxlbmd0aDsgX2krKykge1xuXHRcdFx0XHR2YXIgaSA9IF9hcnJbX2ldO1xuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQmFyJykuc3R5bGUuY3NzVGV4dCA9IFwid2lkdGg6XCIgKyBpICogMjUgKyBcIiVcIjtcblx0XHRcdFx0Ly9cblx0XHRcdFx0Ly8gcHJvcHMuYXR0cmlidXRlcy5QZXJjZW50YWdlT2ZQcm9ncmVzc0Jhcj1pKjI1ICsgXCIlXCJcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogJ3Byb2dyZXNzLWJhcicgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgaWQ6ICdCYXInLCBjbGFzc05hbWU6ICdJbmNyZWFzZUJhcicsIHN0eWxlOiB7IHdpZHRoOiBwcm9wcy5hdHRyaWJ1dGVzLlBlcmNlbnRhZ2VPZlByb2dyZXNzQmFyIH0gfSxcblx0XHRcdFx0J0xvYWRpbmcnXG5cdFx0XHQpXG5cdFx0KTtcblx0fSxcblxuXHQvKipcclxuICAqIFRoZSBzYXZlIGZ1bmN0aW9uIGRlZmluZXMgdGhlIHdheSBpbiB3aGljaCB0aGUgZGlmZmVyZW50IGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGNvbWJpbmVkXHJcbiAgKiBpbnRvIHRoZSBmaW5hbCBtYXJrdXAsIHdoaWNoIGlzIHRoZW4gc2VyaWFsaXplZCBieSBHdXRlbmJlcmcgaW50byBwb3N0X2NvbnRlbnQuXHJcbiAgKlxyXG4gICogVGhlIFwic2F2ZVwiIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkIGFuZCBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXHJcbiAgKlxyXG4gICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xyXG4gICpcclxuICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcy5cclxuICAqIEByZXR1cm5zIHtNaXhlZH0gSlNYIEZyb250ZW5kIEhUTUwuXHJcbiAgKi9cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6ICdwcm9ncmVzcy1iYXInIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ0luY3JlYXNlQmFyJywgc3R5bGU6IHsgd2lkdGg6IHByb3BzLmF0dHJpYnV0ZXMuUGVyY2VudGFnZU9mUHJvZ3Jlc3NCYXIgfSB9LFxuXHRcdFx0XHQnTG9hZGluZydcblx0XHRcdClcblx0XHQpO1xuXHR9XG5cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1Byb2dyZXNzX0Jhcl9CbG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

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
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\n/**\r\n * Register: aa Gutenberg Block.\r\n *\r\n * Registers a new block provided a unique name and an object defining its\r\n * behavior. Once registered, the block is made editor as an option to any\r\n * editor interface where blocks are implemented.\r\n *\r\n * @param  {string}   name     Block name.\r\n * @param  {Object}   settings Block settings.\r\n * @return {?WPBlock}          The block, if it has been successfully\r\n *                             registered; otherwise `undefined`.\r\n */\n\nregisterBlockType('cgb/timer-block', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: 'Timer',\n\ticon: 'clock',\n\tcategory: 'magik-blocks',\n\tattributes: {\n\t\tcontent: { type: 'string' },\n\t\tcolor: { type: 'string' }\n\t},\n\n\t/* This configures how the content and color fields will work, and sets up the necessary elements */\n\n\tedit: function edit(props) {\n\t\tfunction updateContent(event) {\n\t\t\tprops.setAttributes({ content: event.target.value });\n\t\t}\n\t\tfunction updateColor(value) {\n\t\t\tprops.setAttributes({ color: value.hex });\n\t\t}\n\t\treturn React.createElement(\"table\", {\n\t\t\tclass: \"time-widget\",\n\t\t\tcellspacing: \"0\"\n\t\t}, React.createElement(\"tbody\", null, React.createElement(\"tr\", null, React.createElement(\"td\", {\n\t\t\tclass: \"tw-digit\",\n\t\t\talign: \"center\"\n\t\t}, \"10\"), React.createElement(\"td\", {\n\t\t\tclass: \"tw-digit\",\n\t\t\talign: \"center\"\n\t\t}, \"10\"), React.createElement(\"td\", {\n\t\t\tclass: \"tw-digit\",\n\t\t\talign: \"center\"\n\t\t}, \"10\"), React.createElement(\"td\", {\n\t\t\tclass: \"tw-digit\",\n\t\t\talign: \"center\"\n\t\t}, \"10\")), React.createElement(\"tr\", null, React.createElement(\"td\", {\n\t\t\tclass: \"tw-title\",\n\t\t\talign: \"center\"\n\t\t}, \"days\"), React.createElement(\"td\", {\n\t\t\tclass: \"tw-title\",\n\t\t\talign: \"center\"\n\t\t}, \"hours\"), React.createElement(\"td\", {\n\t\t\tclass: \"tw-title\",\n\t\t\talign: \"center\"\n\t\t}, \"minutes\"), React.createElement(\"td\", {\n\t\t\tclass: \"tw-title\",\n\t\t\talign: \"center\"\n\t\t}, \"seconds\"))));\n\t},\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\"h3\", { style: { border: \"3px solid \" + props.attributes.color } }, props.attributes.content);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9UaW1lcl9CbG9jay9UaW1lci5qcz8yNmViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5cbi8qKlxyXG4gKiBSZWdpc3RlcjogYWEgR3V0ZW5iZXJnIEJsb2NrLlxyXG4gKlxyXG4gKiBSZWdpc3RlcnMgYSBuZXcgYmxvY2sgcHJvdmlkZWQgYSB1bmlxdWUgbmFtZSBhbmQgYW4gb2JqZWN0IGRlZmluaW5nIGl0c1xyXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxyXG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gICBuYW1lICAgICBCbG9jayBuYW1lLlxyXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXHJcbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZDsgb3RoZXJ3aXNlIGB1bmRlZmluZWRgLlxyXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2NnYi90aW1lci1ibG9jaycsIHtcblx0Ly8gQmxvY2sgbmFtZS4gQmxvY2sgbmFtZXMgbXVzdCBiZSBzdHJpbmcgdGhhdCBjb250YWlucyBhIG5hbWVzcGFjZSBwcmVmaXguIEV4YW1wbGU6IG15LXBsdWdpbi9teS1jdXN0b20tYmxvY2suXG5cdHRpdGxlOiAnVGltZXInLFxuXHRpY29uOiAnY2xvY2snLFxuXHRjYXRlZ29yeTogJ21hZ2lrLWJsb2NrcycsXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRjb250ZW50OiB7IHR5cGU6ICdzdHJpbmcnIH0sXG5cdFx0Y29sb3I6IHsgdHlwZTogJ3N0cmluZycgfVxuXHR9LFxuXG5cdC8qIFRoaXMgY29uZmlndXJlcyBob3cgdGhlIGNvbnRlbnQgYW5kIGNvbG9yIGZpZWxkcyB3aWxsIHdvcmssIGFuZCBzZXRzIHVwIHRoZSBuZWNlc3NhcnkgZWxlbWVudHMgKi9cblxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cdFx0ZnVuY3Rpb24gdXBkYXRlQ29udGVudChldmVudCkge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7IGNvbnRlbnQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcblx0XHR9XG5cdFx0ZnVuY3Rpb24gdXBkYXRlQ29sb3IodmFsdWUpIHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoeyBjb2xvcjogdmFsdWUuaGV4IH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInRhYmxlXCIsIHtcblx0XHRcdGNsYXNzOiBcInRpbWUtd2lkZ2V0XCIsXG5cdFx0XHRjZWxsc3BhY2luZzogXCIwXCJcblx0XHR9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7XG5cdFx0XHRjbGFzczogXCJ0dy1kaWdpdFwiLFxuXHRcdFx0YWxpZ246IFwiY2VudGVyXCJcblx0XHR9LCBcIjEwXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwge1xuXHRcdFx0Y2xhc3M6IFwidHctZGlnaXRcIixcblx0XHRcdGFsaWduOiBcImNlbnRlclwiXG5cdFx0fSwgXCIxMFwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIHtcblx0XHRcdGNsYXNzOiBcInR3LWRpZ2l0XCIsXG5cdFx0XHRhbGlnbjogXCJjZW50ZXJcIlxuXHRcdH0sIFwiMTBcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7XG5cdFx0XHRjbGFzczogXCJ0dy1kaWdpdFwiLFxuXHRcdFx0YWxpZ246IFwiY2VudGVyXCJcblx0XHR9LCBcIjEwXCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7XG5cdFx0XHRjbGFzczogXCJ0dy10aXRsZVwiLFxuXHRcdFx0YWxpZ246IFwiY2VudGVyXCJcblx0XHR9LCBcImRheXNcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7XG5cdFx0XHRjbGFzczogXCJ0dy10aXRsZVwiLFxuXHRcdFx0YWxpZ246IFwiY2VudGVyXCJcblx0XHR9LCBcImhvdXJzXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwge1xuXHRcdFx0Y2xhc3M6IFwidHctdGl0bGVcIixcblx0XHRcdGFsaWduOiBcImNlbnRlclwiXG5cdFx0fSwgXCJtaW51dGVzXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwge1xuXHRcdFx0Y2xhc3M6IFwidHctdGl0bGVcIixcblx0XHRcdGFsaWduOiBcImNlbnRlclwiXG5cdFx0fSwgXCJzZWNvbmRzXCIpKSkpO1xuXHR9LFxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIsIHsgc3R5bGU6IHsgYm9yZGVyOiBcIjNweCBzb2xpZCBcIiArIHByb3BzLmF0dHJpYnV0ZXMuY29sb3IgfSB9LCBwcm9wcy5hdHRyaWJ1dGVzLmNvbnRlbnQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9UaW1lcl9CbG9jay9UaW1lci5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

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