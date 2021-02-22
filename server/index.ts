import express  from "express";
import apiRouter from "./routes/";

const server = express();
import {App,Mongo} from "./middleware";

// setup MongoDb
Mongo();

// setup global middleware
App(server);
console.log(888);

// api router
server.use("/", apiRouter);

export default server;