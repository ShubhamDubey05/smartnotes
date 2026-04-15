const mongoose = require("mongoose");
const { DB_NAME } = require("../constants.js");

async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: DB_NAME
        });

        console.log("Connected to Database");
    } catch (err) {
        console.log("DB Error:", err);
    }
}

module.exports = connectToDB;