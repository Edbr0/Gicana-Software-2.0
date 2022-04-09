var express = require('express');
const router = express.Router();
const {
    create,
    getAll,
    editOne,
    deleteOne,
} = require('../controller/teamController');

router.post('/team', create); //crate team

router.get('/teams', getAll); // get All teams

router.put('/team/:id', editOne); // edit team by

router.delete('/team/:id', deleteOne); // delete team by id

module.exports = router;
