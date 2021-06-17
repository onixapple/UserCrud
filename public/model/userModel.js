var dbConn = require('../../config/dbConf');
const bcrypt = require('bcrypt')


var User = function(user){
    this.userName = user.userName
    this.password = user.password
}

User.getAllUsers = (result) =>{
    dbConn.query('SELECT * FROM users',(err,res)=>{
        if(err){
            console.log('Error while fetching users');
            result(null,err)
        }else{
            console.log('Users fetched successfull')
            result(null,res)
        }
    })
}

User.getUserByID =(id,result)=>{
    dbConn.query('SELECT * FROM users WHERE id=?',id,(err,res)=>{
        if(err){
            console.log('Error while fetching by id', err);
            result(null,err);
        }else{
            result(null,res);
        }
    })

}

User.createUser = (userReqData, result)=>{
    dbConn.query('INSERT INTO users SET ? ', userReqData,(err,res)=>{
        if(err){
            console.log('error while inserting data');
            result(null,err);
        }else{
            console.log('User created successfully');
            result(null,res)
            }
        })

}

User.updateUser = (id,userReqData,result)=>{
    dbConn.query("UPDATE users SET userName =?, password=?WHERE id =?",[userReqData.userName,userReqData.password,id],
    (err,res)=>{
        if(err){
            console.log('Error while updating');
            result(null,err);
        }else{
            console.log('User updated');
            result(null,res);
        }
    })
}

User.deleteUser = (id,result)=>{
    dbConn.query('DELETE FROM users WHERE id=?',id,(err,res)=>{
        if(err){
            console.log('Error while deleting user');
            result(null,err);
        }else{
            result(null,res);
        }
    })
}


module.exports = User;