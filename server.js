
//express server template
const express = require ('express')

const app = express()
let PORT = 3000 

app.get('/', (req , res)=>{
    res.send('Hello, World!')
})

app.listen(PORT, ()=>{
    console.log('server is listening on : ${PORT}')
})