import express from "express";
import  Base from "../controller";

const apiRouter = express.Router();

apiRouter.get("/:uri", Base.post);

export default apiRouter;
