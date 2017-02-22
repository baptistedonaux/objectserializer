"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function flatify(form) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    var flat = {};

    for (var field in form) {
        if (_typeof(form[field]) === "object") {
            flat = Object.assign({}, flat, flatify(form[field], parent === null ? field : parent + "[" + field + "]"));
        } else {
            flat[parent + "[" + field + "]"] = form[field];
        }
    }

    return flat;
}

module.exports = flatify;
