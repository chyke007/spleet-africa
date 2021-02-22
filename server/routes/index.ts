import express from "express";
import  Base from "../controller";

const apiRouter = express.Router();

apiRouter.post("/", Base.post);

export default apiRouter;
