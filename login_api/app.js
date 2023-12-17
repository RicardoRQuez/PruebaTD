import express, { application } from 'express';
import cors from 'cors';
import userRouter from './routes/admins.routes.js'
import employeesRoutes from './routes/employees.routes.js'
import Employeepayhistory from './routes/Employeedepartmenthistory.routes.js'
//import routes



const app = express();

app.use(express.json());
app.use(cors());


app.use("/api/v1",userRouter, employeesRoutes, Employeepayhistory)
export default app;