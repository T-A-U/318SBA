
//express server template
const express = require ('express');

const app = express();
let PORT = 3000; 


//GET routes  for data exposed t0 client
app.get('/', (req , res)=>{
    res.send('Hello, World!')
});

//3 diff data categories
//1
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

//2
app.get("/pokeballs", (req,res) => {
    const pokeballs = [
        {
            id: 1,
            name: "pokeball",
        },
        {
            id: 2,
            name: "Greatball",
        },
        {
        id: 3,
        name: "Ultraball",
        },
    ];
  
    res.json(pokeballs);
});

//3
app.get("/HPrefill", (req,res) => {
    const HPrefill = [
        {
            id: 1,
            name: "potion",
        },
        {
            id: 2,
            name: "superpotion",
        },
        {
        id: 3,
        name: "hyperpotion",
        },
    ];
  
    res.json(HPrefill);
});







//error handling?
//Must be the last thing on the list
app.listen(PORT, (error)=>{
    if(!error)
    console.log(`server is listening on : ${PORT}`)
    else
    console.log("Error occured server cannot start", error);
});