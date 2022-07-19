import mongoose,{Schema} from "mongoose";

const persona=new Schema({
    clave:{type:String},
    contraseña:{type:String},
    nombre:String,
    apellidos:String,
    ocupacion:String,
    telefono:{type:Number},
    sexo:String,
    email:String,
    imagen:String,
    createdAct:{type:Date, default:Date.now}
});

const Personas=mongoose.model('persona',persona);
export default Personas;