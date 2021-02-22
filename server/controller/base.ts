// eslint-disable-next-line no-unused-vars
import { Response, Request, NextFunction } from "express";
import {
  customResult,
  customException,
  UNKNOWN_ERROR,
} from "../../server/utils";
import {Shortner} from "../model";

/* eslint func-names: ["error", "never"] */
/**
 * @param  {Request} req
 * @param  {Response} res
 * @param  {NextFunction} next
 */
const post = async function (req:Request, res:Response, next:NextFunction) {
    try{
      const {params:{uri}} = req;
      const sub = await Shortner.find({uri});
      
      return res.json(customResult(sub));
    }catch(e){
      res.status(400);
      res.json(customException(UNKNOWN_ERROR));
    }
};

export { post };
