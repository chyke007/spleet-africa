import Express from "express";
import cors from "cors";
// eslint-disable-next-line
/**
 * @param  {Express.Application} server
 */
export default (server:Express.Application) => {
  server.use(Express.json());
  server.use(Express.urlencoded({ extended: false }));
  server.use(cors());
};
