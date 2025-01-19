import mongoose from 'mongoose'

mongoose.connection.on('error', err => {
  console.log('Error de conexión', err)
})

export default function connectMongoose() {  //ejm en local => "mongodb://127.0.0.1:27017/myAPItest"
  return mongoose.connect(process.env.MONGO_URI)
    .then(mongoose => mongoose.connection)
}
