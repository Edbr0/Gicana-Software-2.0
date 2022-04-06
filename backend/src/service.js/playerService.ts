import db from '../db/database'


const editPlayer = async (id, Player) => {
    const query = {
        text: `update gincana.Players set name = $1,  id_color = $2 where id = $3`,
        values: [Player.name, Player.id_color, id],
      }

    try {
        const data = await db.query(query)
        if(data.rowCount == 0){
            return {
                status:'fail',
                error:true,
                success:false,
                message:'Is not possible edit Player'
            }
        }

        return {
            status:'success',
            error:false,
            success:true,
            message:'Player edited succefull'
        }
    } catch (error) {
        return {
            status:'fail',
            error:true,
            success:false,
            message:'error editeding Player: '+error
        }
    }  
    
}


const deletePlayer = async (id) => {
    const query = {
        text: `delete from gincana.Players where id = $1`,
        values: [id],
      }

    try {
        const data = await db.query(query)
        if(data.rowCount == 0){
            return {
                status:'fail',
                error:true,
                success:false,
                message:'Is not possible delete Player'
            }
        }

        return {
            status:'success',
            error:false,
            success:true,
            message:'Player deleted succefull'
        }
    } catch (error) {
        return {
            status:'fail',
            error:true,
            success:false,
            message:'error deleteding Player: '+error
        }
    }  
    
}


const createPlayer = async (Player) => {
    console.log('CRIAR TIME: ',Player)
    const query = {
        text: `insert into gincana.Players (name, id_color) values ($1, $2)`,
        values: [Player.name, Number(Player.color_id)],
      }

    try {
        const data = await db.query(query)
        if(data.rowCount == 0){
            return {
                status:'fail',
                error:true,
                success:false,
                message:'Is not possible create Player'
            }
        }

        return {
            status:'success',
            error:false,
            success:true,
            message:'Player created succefull'
        }
    } catch (error) {
        //console.log(error)
        return {
            status:'fail',
            error:true,
            success:false,
            message:'error creating Player: '+error
        }
    }  
    
}




const getAllPlayer = async () => {
    const query = {
        text: `select *  from gincana.vw_Players`
      }

    try {
        const data = await db.query(query)
        return {
            status:'success',
            error:false,
            success:true,
            message:'Players listed successfully',
            data:data.rows
        }
    } catch (error) {
        return {
            status:'fail',
            error:true,
            success:false,
            message:'error listed Player: '+error
        }
    }  
    
}


module.exports = {
    createPlayer,
    getAllPlayer,
    editPlayer,
    deletePlayer
}

