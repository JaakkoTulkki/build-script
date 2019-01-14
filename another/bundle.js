(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.myBundle = {}));
}(this, function (exports) { 'use strict';

  const hello = 'hello world has changed';

  function launch() {
    console.log(hello);
  }

  exports.launch = launch;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
