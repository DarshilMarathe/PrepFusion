const express = require("express")
const {body,validationResult}= require("express-validator")
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


const Question = require("../models/Question")
const fetchuser = require('../middleware/fetchuser')


const router = express.Router()


router.post('/bookmark',fetchuser, async (req,res)=>{

    // If there are errors, return bad request & errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) { //error not empty 
      return res.status(400).json({errors:errors.array()});
    // return res.send("ERR") -- my code
    }  


    try {

        const {quest,marks,year,subject} = req.body;
        
        const question = new Question({
            quest ,user : req.user.id,marks,year,subject
        })

        const savednote = await question.save();

        // above 3 lines or 
        // const note = await Notes.create({
        //     title,description,tag,user : req.user.id
        // })

        res.json(question)
                
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Error Occured");
    }
       
})


//Fetch bookmarks

// ROUTE1: Get all notes: GET "/api/notes/fetchallnotes"    requires AUTH login 
router.get('/fetchallbookmarks',fetchuser, async (req,res)=>{

    try {
        const questions = await Question.find({user : req.user.id});
        res.json(questions);
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Error Occured");
    }
    
})


module.exports = router