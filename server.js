
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


// Create POST routes for data, as appropriate. At least one data category should allow for client creation via a POST request. Dunno what theme this project even is yet. So ill have to come back to this. Somethin' pokemon themed
app.post('/users/new', async (req, res) => {
    try {
     const user = await User.add({ userFullName: req.user.name, userName: req.user.username, userEmail: req.user.email });
     res.json(user);
    } catch (err) {
     console.log(err);
     res.json({ error: err.toString() });
    }
   });

// Create PATCH or PUT routes for data, as appropriate. At least one data category should allow for client manipulation via a PATCH or PUT request. Still dunno theme yet so must come back to this. Somethin pokemon themed
app.put('/user/update', async (req, res) => {
    try {
     const user = await User.update({ userFullName: req.user.name, userName: req.user.username, userEmail: req.user.email });
     res.json(user);
    } catch (err) {
     console.log(err);
     res.json({ error: err.toString() });
    }
    })

// Create DELETE routes for data, as appropriate. At least one data category should allow for client deletion via a DELETE request. come back to. Somethin' pokemon themed
     app.delete('/user/delete', async (req, res) => {
        try {
         const user = await User.delete({ userFullName: req.user.name, userName: req.user.username, userEmail: req.user.email });
         res.json(user);
        } catch (err) {
         console.log(err);
         res.json({ error: err.toString() });
        }
       });



// Include query parameters for data filtering, where appropriate. At least one data category should allow for additional filtering through the use of query parameters      

app.get("/pokeballs?cost=200", (req,res) => {
    const pokeballs = [
        {
            id: 1,
            name: "pokeball",
            cost:200
        },
        {
            id: 2,
            name: "Greatball",
            cost:600
        },
        {
        id: 3,
        name: "Ultraball",
        cost:1200
        },
    ];
  
    res.json(pokeballs.cost=200);
});

//Utilize route parameters, where appropriate. Not working for individual ids yet
app.get("/pokeballs/:id", (req,res) => {
    const pokeballs = [
        {
            id: 1,
            name: "pokeball",
            cost:200
        },
        {
            id: 2,
            name: "Greatball",
            cost:600
        },
        {
        id: 3,
        name: "Ultraball",
        cost:1200
        },
    ];
  
    res.json(pokeballs[1]);
});

//Create and render at least one view using a view template and template engine. This can be a custom template engine or a third-party engine.If you are stuck on how to approach this, think about ways you could render the current state of your API's data for easy viewing.















//error handling?
//Must be the last thing on the list
app.listen(PORT, (error)=>{
    if(!error)
    console.log(`server is listening on : ${PORT}`)
    else
    console.log("Error occured server cannot start", error);
});