import {model,Model, Document,Schema } from "mongoose";

const SubSchema:Schema = new Schema({
  urlCode: {
    type: "String",
    required: true,
  },
  longUrl: {
    type: "String",
    required: true,
  },
  shortUrl: {
    type: "String",
    required: true,
  }
},{
    timestamps: true,
  });

export interface ShortnerInterface extends Document{
  longUrl:string,
  shortUrl:string,
  urlCode:string,
}

export default  model<ShortnerInterface>("sub", SubSchema);