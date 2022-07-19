import mongoose,{Schema} from "mongoose";

const post=new Schema({
    userId:{type:Number},
    title:String,
    body:String,
    createdAct:{type:Date, default:Date.now}
});

const Posts=mongoose.model('post',post);
export default Posts;