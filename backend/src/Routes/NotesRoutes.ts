import {Router} from 'express';
const addNotes=Router();
import verifyToken from '../middleware/verifyToken';
import { getAddNotes,getAllNotes } from '../Controllers/NotesController';

addNotes.get("/getAllNotes",verifyToken,getAllNotes);
addNotes.post("/addNotes",verifyToken,getAddNotes);


export default addNotes;