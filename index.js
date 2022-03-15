const express = require('express');
const app = express();
const mongoose = require('mongoose')
const UserModel = require("./models/Users")

app.use(express.json());

mongoose.connect("mongodb+srv://user12345:password12345@cluster0.kyifl.mongodb.net/mern?retryWrites=true&w=majority");

app.get("/getUsers",(req, res) => {
    UserModel.find({}, (err, result) => {
        if(err){
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
});

app.listen(3001,() => {
    console.log("server runs at 3001!");
});

