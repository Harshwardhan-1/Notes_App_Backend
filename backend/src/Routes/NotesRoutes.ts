import {Router} from 'express';
const addNotes=Router();
import verifyToken from '../middleware/verifyToken';
import { getAddNotes,getAllNotes,deleteNotes } from '../Controllers/NotesController';

addNotes.get("/getAllNotes",verifyToken,getAllNotes);
addNotes.post("/addNotes",verifyToken,getAddNotes);
addNotes.post("/deleteNotes",verifyToken,deleteNotes);

export default addNotes;