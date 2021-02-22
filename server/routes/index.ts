import express from "express";
import  Base from "../controller";

const apiRouter = express.Router();

apiRouter.get("/:uid", Base.get).post("/", Base.post);

export default apiRouter;
