const express = require("express");
const mongoose = require("mongoose");
const Task = require("../models/task");

const router = express.Router();

router.get('/tasks',(req,res,next) => {
    Task.find({})
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err))
})

router.get('/tasks/sorted',(req,res,next) => {
    Task.find({}).sort({ priority:1 })
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err))
})

router.get('/tasks/pending',(req,res,next) => {
    Task.find({ category: "pending" })
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err))
})

router.get('/tasks/inProcess',(req,res,next) => {
    Task.find({ category: "in process" })
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err))
})

router.get('/tasks/completed',(req,res,next) => {
    Task.find({ category: "completed" })
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err))
})

router.get('/tasks/:taskId',(req,res,next) => {
    Task.find({ _id: req.params.taskId })
        .then(task => res.json(task))
        .catch(err => res.json(err))
})

router.get('/tasks/name/:taskName',(req,res,next) => {
    Task.find({name: new RegExp( req.params.taskName, "i")})
        .then(task => res.json(task))
        .catch(err => res.json(err))
})

router.post('/task',(req,res,next) => {
    const newTask = new Task({
        name: req.body.name,
        category: req.body.category,
        priority: req.body.priority
    });
    newTask.save()
    .then(task => res.json(task))
    .catch(err => res.json(err))
})

router.put('/tasks/:taskId',(req,res,next) => {
    Task.findByIdAndUpdate(req.params.taskId, {$set: req.body})
        .then(task => res.json(task))
        .catch(err => res.json(err))
})

router.delete('/tasks/:taskId',(req,res,next) => {
    Task.findByIdAndDelete( req.params.taskId )
        .then(task => res.json(task))
        .catch(err => res.json(err))
})

module.exports = router;