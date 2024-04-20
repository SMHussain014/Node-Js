const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const dataBase = "myData";
const client = new MongoClient(url);
async function dbConnect() {
    let result = await client.connect();
    let db = result.db(dataBase);
    return db.collection('personal');
}
// dbConnect().then((resp) => {
//     let response = resp.find({}).toArray();
//     response.then((data) => {
//     console.log(data);
//     })
// });
const main = async () => {
    let response = await dbConnect();
    let data = response.find({}).toArray();
    console.log(data);
}
main();