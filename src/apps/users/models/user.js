import mongoose from 'mongoose'

const Schema = mongoose.Schema
 
const usuarioSchema = new Schema({

	nombres: {type: String, required: [true,'El nombre es requerido']},
	apellidos: {type: String, required: [true,'El apellido es requerido']},
	email: String,
	created: {type: Date, default: Date.now}
	
})

export default mongoose.model('Usuario', usuarioSchema)