import express from 'express';
import {
    createUser,
    login
} from '../controllers/admins.controller.js';

import { emitToken } from '../middlewares/verifySingUp.js';
import { verifyToken } from '../middlewares/verifySingUp.js';
const router = express.Router();

router.post("/signin", emitToken, login);
router.post("/signup", createUser);

export default router;