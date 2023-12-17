import express from 'express';
import { findAll } from '../controllers/Employeedepartmenthistory.controller.js';

import { verifyToken } from '../middlewares/verifySingUp.js';
const router = express.Router();

router.get("/employeedepartmenthistory", findAll );

export default router;