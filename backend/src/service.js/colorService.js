const db = require('../db/database');


const editColor = async (id, color) => {
    const query = {
        text: `update gincana.color_team set ds_color = $1,  cod_color = $2 where id = $3`,
        values: [color.ds_color, color.cod_color, id],
      }

    try {
        const data = await db.query(query)
        if(data.rowCount == 0){
            return {
                status:'fail',
                error:true,
                success:false,
                message:'Is not possible edit color'
            }
        }

        return {
            status:'success',
            error:false,
            success:true,
            message:'color edited succefull'
        }
    } catch (error) {
        return {
            status:'fail',
            error:true,
            success:false,
            message:'error editeding color: '+error
        }
    }  
    
}


const deleteColor = async (id) => {
    const query = {
        text: `delete from gincana.color_team where id = $1`,
        values: [id],
      }

    try {
        const data = await db.query(query)
        if(data.rowCount == 0){
            return {
                status:'fail',
                error:true,
                success:false,
                message:'Is not possible delete color'
            }
        }

        return {
            status:'success',
            error:false,
            success:true,
            message:'color deleted succefull'
        }
    } catch (error) {
        return {
            status:'fail',
            error:true,
            success:false,
            message:'error deleteding color: '+error
        }
    }  
    
}


const createColor = async (color) => {
    const query = {
        text: `insert into gincana.color_team (ds_color, cod_color) values ($1, $2)`,
        values: [color.ds_color, color.cod_color],
      }

    try {
        const data = await db.query(query)
        if(data.rowCount == 0){
            return {
                status:'fail',
                error:true,
                success:false,
                message:'Is not possible create color'
            }
        }

        return {
            status:'success',
            error:false,
            success:true,
            message:'color created succefull'
        }
    } catch (error) {
        return {
            status:'fail',
            error:true,
            success:false,
            message:'error creating color: '+error
        }
    }  
    
}




const getAllColors = async () => {
    const query = {
        text: `select *  from gincana.color_team`
      }

    try {
        const data = await db.query(query)
        return {
            status:'success',
            error:false,
            success:true,
            message:'colors listed successfully',
            data:data.rows
        }
    } catch (error) {
        return {
            status:'fail',
            error:true,
            success:false,
            message:'error listed colors: '+error
        }
    }  
    
}


module.exports = {
    createColor,
    getAllColors,
    editColor,
    deleteColor
}

