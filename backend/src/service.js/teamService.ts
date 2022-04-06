import db from '../db/database'


const editTeam = async (id, team) => {
    const query = {
        text: `update gincana.teams set name = $1,  id_color = $2 where id = $3`,
        values: [team.name, team.id_color, id],
      }

    try {
        const data = await db.query(query)
        if(data.rowCount == 0){
            return {
                status:'fail',
                error:true,
                success:false,
                message:'Is not possible edit team'
            }
        }

        return {
            status:'success',
            error:false,
            success:true,
            message:'Team edited succefull'
        }
    } catch (error) {
        return {
            status:'fail',
            error:true,
            success:false,
            message:'error editeding team: '+error
        }
    }  
    
}


const deleteTeam = async (id) => {
    const query = {
        text: `delete from gincana.teams where id = $1`,
        values: [id],
      }

    try {
        const data = await db.query(query)
        if(data.rowCount == 0){
            return {
                status:'fail',
                error:true,
                success:false,
                message:'Is not possible delete team'
            }
        }

        return {
            status:'success',
            error:false,
            success:true,
            message:'Team deleted succefull'
        }
    } catch (error) {
        return {
            status:'fail',
            error:true,
            success:false,
            message:'error deleteding team: '+error
        }
    }  
    
}


const createTeam = async (team) => {
    console.log('CRIAR TIME: ',team)
    const query = {
        text: `insert into gincana.teams (name, id_color) values ($1, $2)`,
        values: [team.name, Number(team.color_id)],
      }

    try {
        const data = await db.query(query)
        if(data.rowCount == 0){
            return {
                status:'fail',
                error:true,
                success:false,
                message:'Is not possible create team'
            }
        }

        return {
            status:'success',
            error:false,
            success:true,
            message:'Team created succefull'
        }
    } catch (error) {
        //console.log(error)
        return {
            status:'fail',
            error:true,
            success:false,
            message:'error creating team: '+error
        }
    }  
    
}




const getAllTeam = async () => {
    const query = {
        text: `select *  from gincana.vw_teams`
      }

    try {
        const data = await db.query(query)
        return {
            status:'success',
            error:false,
            success:true,
            message:'teams listed successfully',
            data:data.rows
        }
    } catch (error) {
        return {
            status:'fail',
            error:true,
            success:false,
            message:'error listed team: '+error
        }
    }  
    
}


module.exports = {
    createTeam,
    getAllTeam,
    editTeam,
    deleteTeam
}

