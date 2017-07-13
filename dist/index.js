'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (inComponent, inProps, inAttrs) {
  var props = inProps || {};
  var body = document.body;
  var div = document.createElement('div');
  var component = void 0;

  for (var attr in inAttrs) {
    if (inAttrs.hasOwnProperty(attr)) {
      div[attr] = inAttrs[attr];
    }
  }

  body.appendChild(div);
  component = (0, _preact.render)((0, _preact.h)(inComponent, inProps), div);

  return {
    component: component,
    destroy: function destroy() {
      component = null;
      body.removeChild(div);
    }
  };
};

var _preact = require('preact');

;