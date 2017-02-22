"use strict";

function stringify(form, parent = null) {
    let flat = {};

    for (const field in form) {
        if (typeof form[field] === "object") {
            flat = Object.assign(
                {},
                flat,
                stringify(
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

module.exports = stringify;
