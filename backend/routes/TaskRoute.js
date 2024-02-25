
const express = require('express');

const router = express.Router();

const {
    getAllWorkOuts,
    getSingleWorkOut,
    createWorkout,
    deleteSingleWorkout
} = require('../controller/TaskController')

// get all workouts
router.get("/",getAllWorkOuts)

// get single workout
router.get("/:id",getSingleWorkOut)

//  create workout 
router.post("/",createWorkout)

// deleteSingleWorkout
router.delete("/:id",deleteSingleWorkout)



module.exports = router ;