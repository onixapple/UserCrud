const UserModel = require('../model/userModel');

exports.getUserList = (req,res)=>{
    UserModel.getAllUsers((err,users)=>{
        if(err)
            res.send(err);
        console.log('Users', users);
        res.send(users)
    })
}
exports.getUserByID = (req,res) =>{
    UserModel.getUserByID(req.params.id, (err, user)=>{
        if(err)
            res.send(err);
        res.send(user);
    })
}
exports.createNewUser = (req,res) =>{
    const userReqData = new UserModel(req.body);
    console.log('userReqData',userReqData);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send('400').send({success: false, message: 'Please fill all fields'});
    }else{
        UserModel.createUser(userReqData, (err,user)=>{
            if(err)
                res.send(err);
            res.json({status: true,message: 'user created successfull', data: user.insertId})
        })
    }
}

exports.updateUser = (req,res)=>{
    const userReqData = new UserModel(req.body);
    console.log('userReqData update',userReqData);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send('400').send({success: false, message: 'Please fill all fields'});
    }else{
        UserModel.updateItem(req.params.id,userReqData, (err,user)=>{
            if(err)
                res.send(err);
            res.json({status: true,message: 'user updated successfully'})
        })
    }
}
exports.deleteUser=(req,res)=>{
    UserModel.deleteUser(req.params.id, (err,user)=>{
        if(err)
            res.send(err);
        res.json({success:true, message:'user deleted'});
    })
}