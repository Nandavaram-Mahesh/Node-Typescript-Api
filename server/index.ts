import express,{Express,Request,Response} from 'express'


// initalize the server

const app:Express = express()


// Routes
app.get('/',(req:Request,res:Response)=>{
    res.send("Node Api Server")
})

// Server Listening on port 8000 
app.listen(8000,()=>{
    console.log("Server listening....")
})