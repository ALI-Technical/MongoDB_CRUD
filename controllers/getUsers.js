const UserModel = require("../models/userSchema");

const getUsers = (req, res) => {

    UserModel.find( {}, (err, data) => {
        if(err){
            res.send(err);
        } else{
            res.send(data);
        }
    } )
}

module.exports = getUsers;