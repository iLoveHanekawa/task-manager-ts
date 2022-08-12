"use strict";
exports.__esModule = true;
exports.deleteTask = exports.updateTast = exports.getTask = exports.createTask = exports.getAllTasks = void 0;
var getAllTasks = function (req, res) {
    res.send('all items from the file');
};
exports.getAllTasks = getAllTasks;
var createTask = function (req, res) {
    res.json(req.body);
};
exports.createTask = createTask;
var getTask = function (req, res) {
    res.json({ id: req.params.id });
};
exports.getTask = getTask;
var updateTast = function (req, res) {
    res.send('Updated task');
};
exports.updateTast = updateTast;
var deleteTask = function (req, res) {
    res.send('Deleted Task');
};
exports.deleteTask = deleteTask;
