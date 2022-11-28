const {MongoClient, ObjectId} = require('mongodb');

const uri = "mongodb+srv://username:JHqkre2hvS4ZtfO8@monsterhunter.eg1mrlr.mongodb.net/?retryWrites=true&w=majority";

const monsterDBName = "Monster";
const monsterCollection = "monsties";
const localesDBName = "Locals";
const localesCollection = "locations";
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
    }
}