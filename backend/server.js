const app=require('./app')
const dotenv=require('dotenv')
const connectDatabase=require('./config/database')

// config
dotenv.config({path:'backend/config/updatedconfig.env'})

// database
connectDatabase()

const server=app.listen(process.env.PORT,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`);
})


// unhanddled promise rejection
process.on('unhandledRejection',(err)=>{
    console.log(`Error :${err.message}`);
    console.log('shutting down the server due to unhandled promise rejection');
    server.close(()=>{
        process.exit(1)
    })
})