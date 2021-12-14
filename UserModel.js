const mongoose=require('mongoose');

//Create the Schema

const UserSchema=new mongoose.Schema(
    {
        firstName:{
            type:String,
            require:true
        },
        lastName:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        },
        phone:{
            type:String,
            require:false
        },
        avatar:{
            type:String,
            require:false
        }
    }
)

//Create the model

const UserModel= mongoose.model('users',UserSchema);

//Export the model
module.exports = UserModel;