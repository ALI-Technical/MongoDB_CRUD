const UserModel = require('../models/userSchema')

const signupController = (req, res) => {

    const body = req.body;
    let userObj = {
        username: body.username,
        email: body.email,
        password: body.password,
    }

    // console.log(body);
    UserModel.create(userObj, (err, _) => {
        if(err){
            res.send(err);
        }else{
            res.send( {message: "user successfully signup"} )
        }
    })
}

module.exports = signupController;