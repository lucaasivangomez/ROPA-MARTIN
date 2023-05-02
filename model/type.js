import mongoose from "mongoose";

const {Schema} = mongoose;
const TypeSchema = new Schema({
    name:String,
},{versionKey:false})

const TypeModel = mongoose.model("type", TypeSchema);

export const getTypes = async () => {
    return await TypeModel.find({});
}