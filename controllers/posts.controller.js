import { model } from "mongoose";
import models from "../models";

export default{

    //Metodo para Guardar persona
    addPost:async(req,res,next)=>{
        try{
            const{
                userId,
                title,
                body
            }=req.body;

            const post=new models.Posts({
                userId,
                title,
                body
            });

            const guardar=await post.save();
            res.status(200).json(guardar);
        }catch(e){
            res.status(500).send({
                message: 'Ocurrio un error al guardar en el server de BD'
            });
            next(e);
        }
    },

    //Metodo para consultar en la coleccion de datos de MongoDB
    listarPost:async(req,res,next)=>{
        try{
            const listar=await models.Posts.find();
            res.json(listar);
        }catch(e){
            res.status(500).send({
                message:"Ocurrio un error al consultar en la Bd"
            });
            next(e);
        }
    },

    //Metodo para eliminar una persona por medio de su ID
    eliminarPost:async(req,res,next)=>{
        try{
            const eliminar=await models.Posts.findByIdAndDelete(req.params.id);
            res.status(200).json(eliminar);
        }catch(e){
            res.status(500).send({
                message:"Los datos no se han eliminado "
            });
            next(e);
        }
    },
    //Metodo para buscar un registro por el ID de la colección
    listarOnePost:async(req,res,next)=>{
        try{
            const listarPost=await models.Posts.findById(req.params.id);
            if(!listarPost){
                res.status(400).send({
                    message:"El registro no se ha encontrado"
                });
            }else{
                res.status(200).json(listarPost);
            }
        }catch(e){
            res.status(500).send({
                message:"Hubo un error en la conexion a la BD"
            })
            next(e);
        }
    },
    updatePost:async(req,res,next)=>{
        try{
            const{
               userId,
               title,
               body
            }=req.body;

            const upPost={
                userId,
                title,
                body
            };

            const update=await models.Posts.findByIdAndUpdate(req.params.id, upPost);
            res.status(200).json(update);

        }catch(e){
            res.status(500).send({
                message:"Hubo un error al actualizar en la BD"
            })
            next(e);
        }
    }
};