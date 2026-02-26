import * as grupoModelo from '../models/grupomodel.js'
              //se llamara como nosotros lo tengamos asignados depende de nuestra base de datos, 
              // se hace que llame su funcion
export const getAllGrupos= async (req,res)=>{

    //Metodo de controlador para los grupos
    try{
        const grupos= await grupoModelo.getAllGrupos();
        res.status(200).json(grupos)
    }catch(error){
        res.status(500).json({error:error.message})
    }

}
                // esto se eva a vincular
export const getGrupoById = async(req,res)=>{
    try {
        const grupo= await grupoModelo.getGrupoById(req.params.id) // del requerimiento se obtiene los parametros
        if(!grupo)
            res.status(404).json({message:'como el amor de ella,-- NO ENCONTRADO :`('})
        res.status(200).json(grupo)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

export const createGrupo = async(req,res)=>{
    try {
        const nuevo = await grupoModelo.createGrupo(req.body)
        res.status(201).json(nuevo)
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}