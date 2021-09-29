const mongoos = require('mongoose')

var schema = new mongoos.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:String,
    status:String
})

var userDb = mongoos.model('user', schema)

module.exports = userDb;