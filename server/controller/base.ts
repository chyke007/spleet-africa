// eslint-disable-next-line no-unused-vars
import { Response, Request, NextFunction } from "express";
import { nanoid } from "nanoid";
import {
  customResult,
  customException,
  validUrl,
  BODY_MUST_CONTAIN,
  INVALID_URL_FORMAT,
  UNKNOWN_ERROR,
  URL_ALREADY_EXIST
} from "../../server/utils";

import {Shortner} from "../model";
import { URL }  from '../../config'

const formatResult = (data: any) => {
  return {
    longUrl: data.longUrl,
    shortUrl: data.shortUrl,
    code: data.code
  }
}

/* eslint func-names: ["error", "never"] */
/**
 * @param  {Request} req
 * @param  {Response} res
 * @param  {NextFunction} next
 */
const post = async function (req:Request, res:Response, next:NextFunction) {
  try{

      if(!("url" in req.body)){
        res.status(400);
        return res.json(customException(BODY_MUST_CONTAIN));
      }

      const {body:{url}} = req;

      if(!validUrl(url)){
        res.status(400);
        return res.json(customException(INVALID_URL_FORMAT));
      }
     
     const exist = await Shortner.findOne({longUrl: url});

     if(exist){
      res.status(200);
      return res.json(customResult(formatResult(exist), URL_ALREADY_EXIST));
     }

     const uid = nanoid(6)

     const newUrl = await new Shortner({
      longUrl: url,
      shortUrl: `${URL}/${uid}`,
      urlCode: uid
    });
    newUrl.save();
    res.status(201)
    return res.json(customResult(newUrl));
  
  }catch(e){
      res.status(400);
      res.json(customException(UNKNOWN_ERROR));
    }
};

export { post };
