import { model } from "mongoose";
import models from "../models";

export default{

    //Metodo para Guardar persona
    addPersona:async(req,res,next)=>{
        try{
            const{
                clave,
                contraseña,
                nombre,
                apellidos,
                ocupacion,
                telefono,
                sexo,
                email,
                imagen
            }=req.body;

            const persona=new models.Personas({
                clave,
                contraseña,
                nombre,
                apellidos,
                ocupacion,
                telefono,
                sexo,
                email,
                imagen
            });

            const guardar=await persona.save();
            res.status(200).json(guardar);
        }catch(e){
            res.status(500).send({
                message: 'Ocurrio un error al guardar en el server de BD'
            });
            next(e);
        }
    },

    //Metodo para consultar en la coleccion de datos de MongoDB
    listarPersonas:async(req,res,next)=>{
        try{
            const listar=await models.Personas.find();
            res.json(listar);
        }catch(e){
            res.status(500).send({
                message:"Ocurrio un error al consultar en la Bd"
            });
            next(e);
        }
    },

    //Metodo para eliminar una persona por medio de su ID
    eliminarPersona:async(req,res,next)=>{
        try{
            const eliminar=await models.Personas.findByIdAndDelete(req.params.id);
            res.status(200).json(eliminar);
        }catch(e){
            res.status(500).send({
                message:"Los datos no se han eliminado "
            });
            next(e);
        }
    },
    //Metodo para buscar un registro por el ID de la colección
    listarOnePersona:async(req,res,next)=>{
        try{
            const listarOne=await models.Personas.findById(req.params.id);
            if(!listarOne){
                res.status(400).send({
                    message:"El registro no se ha encontrado"
                });
            }else{
                res.status(200).json(listarOne);
            }
        }catch(e){
            res.status(500).send({
                message:"Hubo un error en la conexion a la BD"
            })
            next(e);
        }
    },
    updatePersona:async(req,res,next)=>{
        try{
            const{
                clave,
                contraseña,
                nombre,
                apellidos,
                ocupacion,
                telefono,
                sexo,
                email,
                imagen
            }=req.body;

            const upPersona={
                clave,
                contraseña,
                nombre,
                apellidos,
                ocupacion,
                telefono,
                sexo,
                email,
                imagen
            };

            const update=await models.Personas.findByIdAndUpdate(req.params.id, upPersona);
            res.status(200).json(update);

        }catch(e){
            res.status(500).send({
                message:"Hubo un error al actualizar en la BD"
            })
            next(e);
        }
    }
};