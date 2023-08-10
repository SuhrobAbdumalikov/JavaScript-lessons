import express from 'express'
import cors from 'cors'
const app = express();
const tasks = []

const HTTPStatusCodes = {
    CREATED: 201,
}

app.use(express.json())
app.use(cors())

app.get('/',(req,res) => {
    const {taskName} =req.body
    tasks.unshift({ taskName, id: new Date().getTime() })
    res.status(HTTPStatusCodes.CREATED).json({
        msg: 'Success',
    })
})


app.delete('/',(req,res) => {
    const {id} = req.params
    const idx = tasks.findIndex((el) => el.id == id)
    tasks.splice(idx,1);
    res.send({
        msg:'success',
    })
})


app.put('/',(req,res) => {
    const {id} = req.params
    const {taskName} = req.body
    const idx = tasks.findIndex((el) => el.id == id)

    tasks[idx] = {...tasks[idx],taskName}

    res.send({
        msg : "Success",
    })
})


app.listen(3000,() => {
    console.log('Server running on port 3000');
})