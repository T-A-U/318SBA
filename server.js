
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


// Create POST routes for data, as appropriate. At least one data category should allow for client creation via a POST request. Dunno what theme this project even is yet. So ill have to come back to this.
app.post('/users/new', async (req, res) => {
    try {
     const user = await User.add({ userFullName: req.user.name, userName: req.user.username, userEmail: req.user.email });
     res.json(user);
    } catch (err) {
     console.log(err);
     res.json({ error: err.toString() });
    }
   });

// Create PATCH or PUT routes for data, as appropriate. At least one data category should allow for client manipulation via a PATCH or PUT request. Still dunno theme yet so must come back to this.
   app.put('/user/update', async (req, res) => {
    try {
     const user = await User.update({ userFullName: req.user.name, userName: req.user.username, userEmail: req.user.email });
     res.json(user);
    } catch (err) {
     console.log(err);
     res.json({ error: err.toString() });
    }
    })






//error handling?
//Must be the last thing on the list
app.listen(PORT, (error)=>{
    if(!error)
    console.log(`server is listening on : ${PORT}`)
    else
    console.log("Error occured server cannot start", error);
});