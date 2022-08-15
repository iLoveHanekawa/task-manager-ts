"use strict";
exports.__esModule = true;
exports.notFound = void 0;
var notFound = function (req, res) {
    res.status(404).send("Not found");
};
exports.notFound = notFound;
