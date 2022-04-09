import {
    createTeam,
    getAllTeam,
    editTeam,
    deleteTeam,
} from '../service/teamService';
import { Request, Response } from 'express';

const create = async (req: Request, res: Response) => {
    return res.status(200).json(await createTeam(req.body));
};

const getAll = async (req: Request, res: Response) => {
    return res.status(200).json(await getAllTeam());
};

const editOne = async (req: Request, res: Response) => {
    const { id } = req.params;

    return res.status(200).json(await editTeam(id, req.body));
};

const deleteOne = async (req: Request, res: Response) => {
    const { id } = req.params;

    return res.status(200).json(await deleteTeam(id));
};

module.exports = {
    getAll,
    create,
    editOne,
    deleteOne,
};
