const mongoose=require("mongoose");
require('dotenv').config();

const db_link= process.env.DB_Link;
mongoose.connect(db_link,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("db connected");
})
.catch((err)=>{
    console.log("err");
})


const blogschema=mongoose.Schema({
    title:{
        type:String
    },
    postContent:{
        type:String
    },
    creater:{
        type:String
    }
})

const blogmodel= mongoose.model('schema',blogschema);// blogchema is created as schemas in database

module.exports=blogmodel;