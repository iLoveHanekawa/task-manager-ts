"use strict";
exports.__esModule = true;
exports.tasksRouter = void 0;
var express = require("express");
var tasksControllers_1 = require("../controllers/tasksControllers");
exports.tasksRouter = express.Router();
exports.tasksRouter.route('/').get(tasksControllers_1.getAllTasks).post(tasksControllers_1.createTask);
exports.tasksRouter.route('/:id').put(tasksControllers_1.updateTast)["delete"](tasksControllers_1.deleteTask).get(tasksControllers_1.getTask);
