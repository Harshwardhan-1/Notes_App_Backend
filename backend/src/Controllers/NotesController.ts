import { notesModel } from "../models/NotesModel";
import {Request,Response} from 'express';

export const getAllNotes=async(req:Request,res:Response)=>{
    const userId=(req as any).user.userId;
const getAllNotes=await notesModel.find({userId});
return res.status(200).json({
    getAllNotes
})
}

export const getAddNotes=async(req:Request,res:Response)=>{
    const {title,content}=req.body;

    if(!title || !content){
        return res.status(401).json({
            message:"make notes properly",
        });
    }
    const addNotes=await notesModel.create({
        userId:(req as any).user.userId,
        title:title,
        content:content,
    });
    return res.status(200).json({
        message:"note add successfully",
        data:addNotes,
    });
}



export const deleteNotes=async(req:Request,res:Response)=>{
    const {id}=req.body;
    if(!id){
        return res.status(401).json({
            message:"Note id requiered",
        });
    }
    const findId=await notesModel.findOneAndDelete({_id:id});
    if(!findId){
        return res.status(404).json({
             message:"no id found",
        });
    }
    return res.status(200).json({
        message:"findAndDelete",
    });
}