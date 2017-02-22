"use strict";

function flatify(form, parent = null) {
    let flat = {};

    for (const field in form) {
        if (typeof form[field] === "object") {
            flat = Object.assign(
                {},
                flat,
                flatify(
                    form[field],
                    parent === null
                        ? field
                        : `${parent}[${field}]`
                )
            );
        } else {
            flat[`${parent}[${field}]`] = form[field];
        }
    }

    return flat;
}

module.exports = flatify;
