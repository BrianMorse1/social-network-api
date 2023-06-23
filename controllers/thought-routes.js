const { Thought } = require('../models');
const router = require('express').Router();

// get all thoughts
router.get("/all", (req, res) => {
    Thought.findAll()
    .then(results => {
        res.json(results);
    })
});

//get all thoughts by a specific user
router.get("/:username", (req, res) => {
    Thought.findAll({
        where: {
            username: req.params.username
            }
})
.then(
    results => {
        res.json(results);
        }
)
});

//create a new thought
router.post("/", (req, res) => {
    Thought.create(req.body)
    .then(thought => {
        res.json(thought);
    })
});

//delete thought by id
router.delete("/:id", async (req, res) => {
   try{
    const thought = await Thought.destroy({
        where: {
            id: req.params.id
            }
        })
        res.status(200).json(thought);
}catch{
    res.status(404).json({message: "No thought with this id"})
}});

//update thought by id
router.put("/:id", async (req, res) => {
    try{
        const thought = await Thought.update(req.body, {
            where: {
                id: req.params.id
                }
                })
            res.status(200).json(thought);
            }catch{
                res.status(404).json({message: "No thought with this id"})
            }
});
   

         