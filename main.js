"use strict";

function flatify(form, parent = null) {
    let flat = {};

    for (const field in form) {
        const key = parent === null ? field : `${parent}[${field}]`;

        if (typeof form[field] === "object") {
            flat = Object.assign(
                {},
                flat,
                flatify(form[field], key)
            );
        } else {
            flat[key] = form[field];
        }
    }

    return flat;
}

module.exports = flatify;
