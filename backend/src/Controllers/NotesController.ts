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