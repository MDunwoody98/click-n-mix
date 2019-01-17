var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://michael:hJ2&H3Sg$Zpt@ds157864.mlab.com:57864/click-n-mix-db', ['tasks']);

//Get all tasks
router.get('/tasks', function(req, res, next){
    db.tasks.find(function(err, tasks){
        if (err){
            res.send(err);
        }
        res.json(tasks)
    });
});

//Get a single task
router.get('/task/:id', function(req, res, next){//:id is a parameter/placeholder -id will be dynamic - different each time
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){//where _id is equal to the id that's passed from db
    //Since it's an object id stored on the db it must be mongojs.ObjectId and then pass in the id that's passed in the URL (req.params.id)
        if (err){
            res.send(err);
        }
        res.json(task)
    });
});
//25 minsinto https://www.youtube.com/watch?v=PFP0oXNNveg
module.exports = router;