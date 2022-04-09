import {
    createColor,
    getAllColors,
    editColor,
    deleteColor,
} from '../service/colorService';
import { Request, Response } from 'express';

const create = async (req: Request, res: Response) => {
    return res.status(200).json(await createColor(req.body));
};

const getAll = async (req: Request, res: Response) => {
    return res.status(200).json(await getAllColors());
};

const editOne = async (req: Request, res: Response) => {
    const { id } = req.params;

    return res.status(200).json(await editColor(id, req.body));
};

const deleteOne = async (req: Request, res: Response) => {
    const { id } = req.params;

    return res.status(200).json(await deleteColor(id));
};

export { getAll, create, editOne, deleteOne };
