const {MongoClient, ObjectId, MongoAPIError} = require('mongodb');

const uri = "mongodb+srv://username:JHqkre2hvS4ZtfO8@monsterhunter.eg1mrlr.mongodb.net/?retryWrites=true&w=majority";

const monsterDBName = "Monster";
const monsterCollection = "monsties";
const localesDBName = "Locals";
const localesCollection = "locations";
const itemsDBName = "Items";
const itemsCollection = "item";
//dbnames and collection names for all

exports.DA = {
    getAllMonsters: async function(){
        const client = await MongoClient.connect(uri);
        try{
            const db = client.db(monsterDBName);
            const collection = db.collection(monsterCollection);
            var query = {};
            var results = await collection.find(query).toArray();
            return results;
        }catch(e){
            console.log(e);
        }finally{
            client.close();
        }
    },
    getAllLocales: async function(){
        const client = await MongoClient.connect(uri);
        try{
            const db = client.db(localesDBName);
            const collection = db.collection(localesCollection);
            var query = {};
            var results = await collection.find(query).toArray();
            return results;
        }catch(e){
            console.log(e);
        }finally{
            client.close();
        }
    },
    getAllItems: async function(){
        const client = await MongoClient.connect(uri);
        try{
            const db = client.db(itemsDBName);
            const collection = db.collection(itemsCollection);
            var query = {};
            var results = await collection.find(query).toArray();
            return results;
        }catch(e){
            console.log(e);
        }finally{
            client.close();
        }
    },
    findMonstersBySpecies: async function(species){
        const client = await MongoClient.connect(uri);
        try{
            const db = client.db(monsterDBName);
            const collection = db.collection(monsterCollection);
            var results = await collection.find({"species": species}).toArray();
            return results;
        }catch(e){
            console.log(e);
        }finally{
            client.close();
        }
    },
    findItemsByRarity: async function(rarity){
        const client = await MongoClient.connect(uri);
        try{
            const db = client.db(itemsDBName);
            const collection = db.collection(itemsCollection);
            var results = await collection.find({"rarity": rarity}).toArray();
            return results;
        }catch(e){
            console.log(e);
        }finally{
            client.close();
        }
    }
}