const { createColor, getAllColors, editColor, deleteColor } = require('../service.js/colorService')



const create = async (req, res)=>{
        return res.status(200).json(await createColor(req.body))
    }


const getAll = async (req, res)=>{
    return res.status(200).json(await getAllColors())
}


const editOne = async (req, res)=>{
    const { id } = req.params

    return res.status(200).json(await editColor(id ,req.body))
}


const deleteOne = async (req, res)=>{
    const { id } = req.params

    return res.status(200).json(await deleteColor(id))
}


module.exports = {
    getAll,
    create,
    editOne,
    deleteOne
}