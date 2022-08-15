"use strict";
exports.__esModule = true;
exports.TaskSchema = void 0;
var mongoose_1 = require("mongoose");
exports.TaskSchema = new mongoose_1["default"].Schema({
    name: {
        type: String,
        required: [true, 'Must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters']
    },
    completed: {
        type: Boolean,
        "default": false
    }
});
exports["default"] = mongoose_1["default"].model('Task', exports.TaskSchema);
