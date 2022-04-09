import { connection } from '../db/database';

const editColor = async (id: any, color: any) => {
    try {
        const exists = await connection.color_team.findUnique({
            where: {
                id: parseInt(id),
            },
        });

        if (!exists) {
            return {
                status: 'fail',
                error: true,
                success: false,
                message: 'This color is not exists',
            };
        }

        const data = await connection.color_team.update({
            where: {
                id: parseInt(id),
            },
            data: color,
        });

        return {
            status: 'success',
            error: false,
            success: true,
            message: 'Color edited succefull',
            data: data,
        };
    } catch (error) {
        console.log('error editeding color: ' + error);
        return {
            status: 'fail',
            error: true,
            success: false,
            message: 'Is not possible edit color',
        };
    }
};

const deleteColor = async (id: any) => {
    try {
        const exists = await connection.color_team.findUnique({
            where: {
                id: parseInt(id),
            },
        });

        if (!exists) {
            return {
                status: 'fail',
                error: true,
                success: false,
                message: 'This color is not exists',
            };
        }
        const data = await connection.color_team.delete({
            where: {
                id: parseInt(id),
            },
        });

        return {
            status: 'success',
            error: false,
            success: true,
            message: 'Color successfully deleted',
            data: data,
        };
    } catch (error) {
        console.log('error deleteding color: ' + error);
        return {
            status: 'fail',
            error: true,
            success: false,
            message: 'error deleteding color',
        };
    }
};

const createColor = async (color: any) => {
    const { name, code } = color;
    try {
        const exists = await connection.color_team.findMany({
            where: {
                cod_color: code,
            },
        });

        if (exists.length > 0) {
            return {
                status: 'fail',
                error: true,
                success: false,
                message: 'This color name already exists.',
            };
        }

        const color = await connection.color_team.create({
            data: {
                ds_color: name,
                cod_color: code,
            },
        });

        return {
            status: 'success',
            error: false,
            success: true,
            message: 'Color created succefull',
            data: color,
        };
    } catch (error) {
        console.log('Error creating Color: ' + error);
        return {
            status: 'fail',
            error: true,
            success: false,
            message: 'error creating Color: ' + error,
        };
    }
};

const getAllColors = async () => {
    try {
        const colors = await connection.color_team.findMany({});

        return {
            status: 'success',
            error: false,
            success: true,
            message: 'Colors listed successfully',
            data: colors,
        };
    } catch (error) {
        throw new Error(`Erro ao buscar cor ${error}`);
    }
};

export { createColor, getAllColors, editColor, deleteColor };
