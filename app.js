const express = require("express");
const mongoose = require('mongoose');
const router = require("./routes/routes");

const app = express();
const PORT = process.env.PORT || 5000;
const DBURI = `mongodb+srv://ALI:<password>@cluster0.bhhln.mongodb.net/user?retryWrites=true&w=majority`

//Allow body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);


mongoose.connect(DBURI);
mongoose.connection.on("connected", () => console.log("mongoose connected"));
mongoose.connection.on("error", (error) => console.log(error));



app.listen( PORT, () => {
    console.log(`server is running on localhost:${PORT}`);
})