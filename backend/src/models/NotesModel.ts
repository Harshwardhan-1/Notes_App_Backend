import mongoose from "mongoose";

const NotesSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    title:{
   type: String,
   required:true,
    },
    content:{
    type:String,
    required:true,
    },
})

export const notesModel=mongoose.model("notes",NotesSchema);