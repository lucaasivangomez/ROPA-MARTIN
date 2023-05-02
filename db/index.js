import mongoose from "mongoose";
mongoose.set("strictQuery",false);//tutoriales

export async function run () {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ropas');
    }catch(e){
        console.error(e);
    }
}