import mongoose from "mongoose";

const {Schema} = mongoose;
const RopaSchema = new Schema({
    name:String,
    price:Number,
    brand:String,
    detail:String,
    sizes:[{
        type:Schema.Types.ObjectId,
        ref:"size"
    }],
},{versionKey:false})

const RopaModel = mongoose.model("ropa", RopaSchema);

export const getRopa = async () => {
    return await RopaModel.find({}).populate("sizes");
}
export const saveRopa = async (ropa) => {
    const newRopa = new RopaModel(ropa);
    await newRopa.save();
}
export const editRopa = async (id,ropE) => {
    const ropaToEdit = await RopaModel.findById(id);
    
    ropaToEdit.name = ropE.name;
    ropaToEdit.price = ropE.price;
    ropaToEdit.brand = ropE.brand;
    ropaToEdit.detail = ropE.detail;
    ropaToEdit.sizes = ropE.sizes;
    await ropaToEdit.save();
}

export const deleteRopa = async (ed) => {
    await RopaModel.findByIdAndDelete(ed);
}
