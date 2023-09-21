const { ObjectId } = require('mongodb')
const Task = require('../models/task')
const asyncWrapper = require('../middleware/async')

const getAllTasks = asyncWrapper(async (req, res) => {
    const taskData = await Task.find({})
    res.status(201).json({ status: true, data: { taskData, taskLength: taskData.length } })
})

const createTask = asyncWrapper(async (req, res) => {
    const taskData = await Task.create(req.body);
    res.status(201).json({ status: true, data: { taskData, taskLength: taskData.length } })

})


const getTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params
    const taskData = await Task.findOne({ _id: taskID })
    if (!taskData) {
        return res.status(500).json({ message: `record not found for the following id : ${taskID}` })
    }
    res.status(201).json({ status: true, data: { taskData, taskLength: taskData.length } })


})

const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const taskData = await Task.findOneAndUpdate({ _id: taskID }, req.body,
        {
            new: true,
            runValidators: true,
        })
    if (!taskData) {
        return res.status(500).json({ message: `record not found for the following id : ${taskID}` })
    }
    res.status(201).json({ status: true, data: { taskData, taskLength: taskData.length } })

})

const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params
    const taskData = await Task.findOneAndDelete({ _id: taskID })
    if (!taskData) {
        return res.status(500).json({ message: `record not found for the following id : ${taskID}` })
    }
    res.status(201).json({ status: true, data: { taskData, taskLength: taskData.length } })

})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}