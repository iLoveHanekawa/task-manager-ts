"use strict";
exports.__esModule = true;
exports.errorMidware = void 0;
var errorMidware = function (err, req, res, next) {
    return res.status(500).json({ msg: err });
};
exports.errorMidware = errorMidware;
