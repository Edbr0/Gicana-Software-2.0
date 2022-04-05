const { createTeam, getAllTeam, editTeam, deleteTeam } = require('../service.js/teamService')



const create = async (req, res)=>{
        return res.status(200).json(await createTeam(req.body))
    }


const getAll = async (req, res)=>{
    return res.status(200).json(await getAllTeam())
}


const editOne = async (req, res)=>{
    const { id } = req.params

    return res.status(200).json(await editTeam(id ,req.body))
}


const deleteOne = async (req, res)=>{
    const { id } = req.params

    return res.status(200).json(await deleteTeam(id))
}


module.exports = {
    getAll,
    create,
    editOne,
    deleteOne
}