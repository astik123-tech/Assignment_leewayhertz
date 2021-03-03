const mongoose = require('mongoose')


const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${
    process.env.MONGO_PASSWORD
  }@cluster0.9gxev.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}?retryWrites=true&w=majority`;


mongoose.connect(MONGODB_URI,{
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex:true
}).then((resolve) => {
    console.log("Connected to database");
}).catch((err) => {
    console.log("Can not connect to database : " + err);
})

mongoose.connection.on('disconnected', () => {
    console.log("MongoDB disconnected");
})

process.on('SIGINT', async() => {
    mongoose.connection.close() 
    process.exit(0)
})