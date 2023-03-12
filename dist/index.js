/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 394:
/***/ ((module) => {



const anotherElement = () => {
  const element = document.createElement('div');
  element.innerHTML = `
    <p> Arrow Function File</p>
  `;
  console.log('Arrow function got called');
  return element;
}

module.exports = {
  anotherElement
};

/***/ }),

/***/ 204:
/***/ ((module) => {



function anotherElement() {
  const element = document.createElement('div');
  element.innerHTML = `
    <p> Javascript File</p>
  `;
  return element;
}

module.exports = {
  anotherElement
};

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./src/indexmjs.mjs


const anotherElement = () => {
  const element = document.createElement('div');
  element.innerHTML = `
    <p> Javascript .mjs File</p>
  `;
  return element;
}


;// CONCATENATED MODULE: ./src/index.ts

var src_anotherElement = (__webpack_require__(204).anotherElement);
var arrow = __webpack_require__(394);

function component() {
    var element = document.createElement('div');
    element.innerHTML = "\n    <p>Boiler plate build tool.</p>\n    <p>Type Script File</p>\n  ";
    return element;
}
document.body.appendChild(component());
var el = src_anotherElement();
document.body.appendChild(el);
var el2 = arrow.anotherElement();
document.body.appendChild(el2);
var el3 = anotherElement();
document.body.appendChild(el3);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7VUNaQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7OztBQ3BCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1JxQjtBQUNaLHNCQUFjLEdBQUsseUNBQUwsQ0FBOEI7QUFDckQsSUFBTSxLQUFLLEdBQUcsbUJBQU8sQ0FBQyxHQUFpQixDQUFDLENBQUM7QUFDaUI7QUFFMUQsU0FBUyxTQUFTO0lBQ2hCLElBQU0sT0FBTyxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlELE9BQU8sQ0FBQyxTQUFTLEdBQUcsd0VBR25CLENBQUM7SUFDRixPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBRUQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUV2QyxJQUFNLEVBQUUsR0FBRyxrQkFBYyxFQUFvQixDQUFDO0FBQzlDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRTlCLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxjQUFjLEVBQW9CLENBQUM7QUFDckQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFL0IsSUFBTSxHQUFHLEdBQUcsY0FBTSxFQUFvQixDQUFDO0FBQ3ZDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVyLXN0YXRpYy1wYWdlLy4vc3JjL2luZGV4YXJyb3cuanMiLCJ3ZWJwYWNrOi8vYm9pbGVyLXN0YXRpYy1wYWdlLy4vc3JjL2luZGV4ZWxlLmpzIiwid2VicGFjazovL2JvaWxlci1zdGF0aWMtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ib2lsZXItc3RhdGljLXBhZ2UvLi9zcmMvaW5kZXhtanMubWpzIiwid2VicGFjazovL2JvaWxlci1zdGF0aWMtcGFnZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3QgYW5vdGhlckVsZW1lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgPHA+IEFycm93IEZ1bmN0aW9uIEZpbGU8L3A+XG4gIGA7XG4gIGNvbnNvbGUubG9nKCdBcnJvdyBmdW5jdGlvbiBnb3QgY2FsbGVkJyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYW5vdGhlckVsZW1lbnRcbn07IiwiXG5cbmZ1bmN0aW9uIGFub3RoZXJFbGVtZW50KCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgIDxwPiBKYXZhc2NyaXB0IEZpbGU8L3A+XG4gIGA7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYW5vdGhlckVsZW1lbnRcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlxuXG5leHBvcnQgY29uc3QgYW5vdGhlckVsZW1lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgPHA+IEphdmFzY3JpcHQgLm1qcyBGaWxlPC9wPlxuICBgO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxuIiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5jb25zdCAgeyBhbm90aGVyRWxlbWVudCB9ID0gcmVxdWlyZSgnLi9pbmRleGVsZS5qcycpO1xuY29uc3QgYXJyb3cgPSByZXF1aXJlKCcuL2luZGV4YXJyb3cuanMnKTtcbmltcG9ydCB7IGFub3RoZXJFbGVtZW50IGFzIHNlY29uZCB9IGZyb20gJy4vaW5kZXhtanMubWpzJztcblxuZnVuY3Rpb24gY29tcG9uZW50KCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgY29uc3QgZWxlbWVudDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgPHA+Qm9pbGVyIHBsYXRlIGJ1aWxkIHRvb2wuPC9wPlxuICAgIDxwPlR5cGUgU2NyaXB0IEZpbGU8L3A+XG4gIGA7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcblxuY29uc3QgZWwgPSBhbm90aGVyRWxlbWVudCgpIGFzIEhUTUxEaXZFbGVtZW50O1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG5cbmNvbnN0IGVsMiA9IGFycm93LmFub3RoZXJFbGVtZW50KCkgYXMgSFRNTERpdkVsZW1lbnQ7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsMik7XG5cbmNvbnN0IGVsMyA9IHNlY29uZCgpIGFzIEhUTUxEaXZFbGVtZW50O1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbDMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9