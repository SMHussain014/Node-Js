"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";
const dataBase = "myData";
const client = new MongoClient(url);
function dbConnect() {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield client.connect();
        let db = result.db(dataBase);
        return db.collection('personal');
    });
}
// dbConnect().then((resp) => {
//     let response = resp.find({}).toArray();
//     response.then((data) => {
//     console.log(data);
//     })
// });
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let response = yield dbConnect();
    let data = response.find({}).toArray();
    console.log(data);
});
main();
