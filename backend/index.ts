import express, {Request , Response} from "express"

const app = express()


app.get("" , (req : Request, res : Response) => {
    res.send("hello from ts project!")
})


app.listen(5000 , () => console.log('server running at port 5000'))


