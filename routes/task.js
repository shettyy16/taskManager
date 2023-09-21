const express = require('express');
const routers = express.Router();

const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require('../controller/tasks')

routers.route('/').get(getAllTasks).post(createTask);
routers.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);


module.exports = routers