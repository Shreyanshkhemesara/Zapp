const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    BID:{
        type:Number,
        required:true
    },

    Address:{
        type:String,
        required:true,
    },

    creditScore:{
        type:Number,
        required:true
    },

    amount:{
        type:Number,
        required:true
    }
});

module.exports=mongoose.model('userModel',userSchema);
