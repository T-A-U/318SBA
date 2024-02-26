
//express server template
const express = require ('express');

const app = express();
let PORT = 3000; 

app.get('/', (req , res)=>{
    res.send('Hello, World!')
});


app.get("/pokemon", (req,res) => {
    const pokemon = [
        {
            id: 1,
            name: "Bulbasauar",
        },
        {
            id: 2,
            name: "Ivysaur",
        },
        {
        id: 3,
        name: "Venusaur",
        },
    ];
  
    res.json(pokemon);
});










//Must be the last thing on the list
app.listen(PORT, (error)=>{
    if(!error)
    console.log('server is listening on : ${PORT}')
    else
    console.log("Error occured server cannot start", error);
});