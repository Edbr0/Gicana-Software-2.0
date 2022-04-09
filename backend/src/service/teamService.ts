import { connection } from '../db/database';

const editTeam = async (id: any, team: any) => {
    try {
        const exists = await connection.teams.findUnique({
            where: {
                id: parseInt(id),
            },
        });

        if (!exists) {
            return {
                status: 'fail',
                error: true,
                success: false,
                message: 'This team is not exists',
            };
        }

        const data = await connection.teams.update({
            where: {
                id: parseInt(id),
            },
            data: team,
        });

        return {
            status: 'success',
            error: false,
            success: true,
            message: 'Team edited succefull',
            data: data,
        };
    } catch (error) {
        console.log('error editeding team: ' + error);
        return {
            status: 'fail',
            error: true,
            success: false,
            message: 'Is not possible edit team',
        };
    }
};

const deleteTeam = async (id: any) => {
    try {
        const exists = await connection.teams.findUnique({
            where: {
                id: parseInt(id),
            },
        });

        if (!exists) {
            return {
                status: 'fail',
                error: true,
                success: false,
                message: 'This team is not exists',
            };
        }
        const data = await connection.teams.delete({
            where: {
                id: parseInt(id),
            },
        });

        return {
            status: 'success',
            error: false,
            success: true,
            message: 'Team successfully deleted',
            data: data,
        };
    } catch (error) {
        console.log('error deleteding team: ' + error);
        return {
            status: 'fail',
            error: true,
            success: false,
            message: 'error deleteding teamS',
        };
    }
};

const createTeam = async (team: any) => {
    const { name, id_color } = team;
    try {
        const exists = await connection.teams.findMany({
            where: {
                name: name,
            },
        });

        if (exists.length > 0) {
            return {
                status: 'fail',
                error: true,
                success: false,
                message: 'this team name already exists.',
            };
        }

        const team = await connection.teams.create({
            data: {
                name: name,
                id_color: parseInt(id_color),
                total_pontos: 0,
            },
        });

        return {
            status: 'success',
            error: false,
            success: true,
            message: 'Team created succefull',
            data: team,
        };
    } catch (error) {
        //console.log(error)
        return {
            status: 'fail',
            error: true,
            success: false,
            message: 'error creating team: ' + error,
        };
    }
};

const getAllTeam = async () => {
    try {
        const teams = await connection.vw_teams.findMany({});
        console.log(teams);
        return {
            status: 'success',
            error: false,
            success: true,
            message: 'teams listed successfully',
            data: teams,
        };
    } catch (error) {
        throw new Error(`Erro ao buscar time ${error}`);
    }
};

export { createTeam, getAllTeam, editTeam, deleteTeam };
