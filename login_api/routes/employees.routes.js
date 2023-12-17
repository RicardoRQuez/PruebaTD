import express from 'express';
import { findAll } from '../controllers/employees.controller.js';

import { verifyToken } from '../middlewares/verifySingUp.js';
const router = express.Router();

router.get("/employees",findAll );

export default router;