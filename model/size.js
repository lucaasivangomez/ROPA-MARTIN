import mongoose from "mongoose";

const {Schema} = mongoose;
const SizeSchema = new Schema({
    name:String,
},{versionKey:false})

const SizeModel = mongoose.model("size", SizeSchema);

export const getSizes = async () => {
    return await SizeModel.find({});
}
export const saveSize = async (size) => {
    const newSize = new SizeModel(size);
    await newSize.save();
}

export const editSize = async (id,sizeE) => {
    const sizeToEdit = await SizeModel.findById(id);
    sizeToEdit.name = sizeE.name;
    await sizeToEdit.save();
}
export const deleteSize = async (id) => {
    await SizeModel.findByIdAndDelete(id);
}