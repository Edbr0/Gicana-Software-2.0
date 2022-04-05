var express = require('express');
const router = express.Router()
const { create, getAll, editOne, deleteOne } = require('../controller/colorController')



router.post('/color', create) //crate color

router.get('/colors', getAll) // get All colors

router.put('/color/:id', editOne) // edit color by 

router.delete('/color/:id', deleteOne) // delete color by id


module.exports = router 