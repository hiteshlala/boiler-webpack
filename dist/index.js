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

var anotherElement = (__webpack_require__(204).anotherElement);
var arrow = __webpack_require__(394);
function component() {
    var element = document.createElement('div');
    element.innerHTML = "\n    <p>Boiler plate build tool.</p>\n    <p>Type Script File</p>\n  ";
    return element;
}
document.body.appendChild(component());
var el = anotherElement();
document.body.appendChild(el);
var el2 = arrow.anotherElement();
document.body.appendChild(el2);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7VUNaQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7O0FDdEJxQjtBQUNaLGtCQUFjLEdBQUsseUNBQUwsQ0FBOEI7QUFDckQsSUFBTSxLQUFLLEdBQUcsbUJBQU8sQ0FBQyxHQUFpQixDQUFDLENBQUM7QUFFekMsU0FBUyxTQUFTO0lBQ2hCLElBQU0sT0FBTyxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlELE9BQU8sQ0FBQyxTQUFTLEdBQUcsd0VBR25CLENBQUM7SUFDRixPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBRUQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUV2QyxJQUFNLEVBQUUsR0FBRyxjQUFjLEVBQW9CLENBQUM7QUFDOUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFOUIsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLGNBQWMsRUFBb0IsQ0FBQztBQUNyRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JvaWxlci1zdGF0aWMtcGFnZS8uL3NyYy9pbmRleGFycm93LmpzIiwid2VicGFjazovL2JvaWxlci1zdGF0aWMtcGFnZS8uL3NyYy9pbmRleGVsZS5qcyIsIndlYnBhY2s6Ly9ib2lsZXItc3RhdGljLXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYm9pbGVyLXN0YXRpYy1wYWdlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCBhbm90aGVyRWxlbWVudCA9ICgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICA8cD4gQXJyb3cgRnVuY3Rpb24gRmlsZTwvcD5cbiAgYDtcbiAgY29uc29sZS5sb2coJ0Fycm93IGZ1bmN0aW9uIGdvdCBjYWxsZWQnKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhbm90aGVyRWxlbWVudFxufTsiLCJcblxuZnVuY3Rpb24gYW5vdGhlckVsZW1lbnQoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgPHA+IEphdmFzY3JpcHQgRmlsZTwvcD5cbiAgYDtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhbm90aGVyRWxlbWVudFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5jb25zdCAgeyBhbm90aGVyRWxlbWVudCB9ID0gcmVxdWlyZSgnLi9pbmRleGVsZS5qcycpO1xuY29uc3QgYXJyb3cgPSByZXF1aXJlKCcuL2luZGV4YXJyb3cuanMnKTtcblxuZnVuY3Rpb24gY29tcG9uZW50KCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgY29uc3QgZWxlbWVudDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgPHA+Qm9pbGVyIHBsYXRlIGJ1aWxkIHRvb2wuPC9wPlxuICAgIDxwPlR5cGUgU2NyaXB0IEZpbGU8L3A+XG4gIGA7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcblxuY29uc3QgZWwgPSBhbm90aGVyRWxlbWVudCgpIGFzIEhUTUxEaXZFbGVtZW50O1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG5cbmNvbnN0IGVsMiA9IGFycm93LmFub3RoZXJFbGVtZW50KCkgYXMgSFRNTERpdkVsZW1lbnQ7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsMik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=