const aliceModel = require('../models/alice');
const express = require('express');

// get all workout tasks
const getAllWorkOuts = async (req,res)=>{
    try {
        
        let data = await aliceModel.find()
        if(data){
            res.json(data)
        }
    }
    catch(err) {
        console.log(`error with getting data from mongodb databse`);
    }
}

//  get single workout task
const getSingleWorkOut = async (req,res)=> {
    try {
        const id = req.params.id;
        const data = await aliceModel.findById(id)
        res.status(200).json(data)
    } catch (error) {
        console.log(`error with getting data from mongodb databse`);
        res.status(404).json({error:error});
    }
}

// create a workout 
const createWorkout = async(req,res)=> {
    let data = req.body ;
    try {
        await aliceModel.create(data);
    } catch (error) {
        console.log(`got error while insert data into database !`);
    }
}

// delete a workout by id
const deleteSingleWorkout = async(req,res)=> {
    try {
        let id = req.params.id
        // console.log(id);
        if(id) {
            await aliceModel.findByIdAndDelete(id)
        }
    } catch (error) {
        console.log(`err with delete document by id in db !`);
    }
}


module.exports = {
    getAllWorkOuts,
    getSingleWorkOut,
    createWorkout,
    deleteSingleWorkout
}