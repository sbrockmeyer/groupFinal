//  connection to database
//  both ways should work
// mongodb+srv://username:JHqkre2hvS4ZtfO8@monsterhunter.eg1mrlr.mongodb.net/?retryWrites=true&w=majority

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://username:JHqkre2hvS4ZtfO8@monsterhunter.eg1mrlr.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
const dataAccess = require("./dataaccess");
const cors = require('cors');

const express = require('express');
const { resourceUsage } = require("process");

const app = express();

const PORT = 4000;

app.use(cors());

app.get("/", function(req, res){
    res.send("MHW API");
});

app.get('/monsters', async function(req,res){
    var monsters = await dataAccess.DA.getAllMonsters();
    console.log(monsters);
    res.json(monsters);
});

app.get('/locals', async function(req, res){
    var locations = await dataAccess.DA.getAllLocales();
    console.log(locations);
    res.json(locations);
});

app.get('/items', async function(req, res){
    var items = await dataAccess.DA.getAllItems();
    console.log(items);
    res.json(items);
});

app.get('/itemsbyrarity/:rarity', async (req, res) => {
    var rarity = parseInt(req.params.rarity);
    const items = await dataAccess.DA.findItemsByRarity(rarity);
    console.log(rarity);
    res.json(items);
    console.log(rarity);
});

app.get('/monstersbyspecies/:species', async (req, res) => {
    var species = req.params.species;
    const monsters = await dataAccess.DA.findMonstersBySpecies(species);
    res.json(monsters);
    console.log(monsters);
});





app.listen(PORT, ()=> console.log(`Express listening on port: ${PORT}`));