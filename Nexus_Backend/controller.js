const User = require("./userModel");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });

  module.exports.AddBorrower = async(req,res)=>{
    const _bId = req.body.BID;
    const _address = req.body.Address;
    const _amount = req.body.amount;
    const newBorrow = await createBorrow(_bId,_address,_amount);
    console.log('adding new borrower');
    console.log({_bid, _amount})
    res.send(newBorrow);
  }

   module.exports.delete = async (req, res ) => {
    console.log(req.body);
    const _bId = req.body.BID
    const __id = req.body.__id;
    const del = await User.deleteOne({ _id : __id});
    console.log("done deleting")
    res.send({status: 200, msg: "done deleting"})
   }

  const createBorrow = async(_bId, _address,_amount)=>{
    const newUser = await User.create({
        BID: _bId,
        Address: _address ,
        creditScore: 700,
        amount: _amount
    })
  }

  module.exports.getAllBorrow=async (req,res)=>{
    const user=await User.find({})
    // console.log(user);
    res.send(user);
  }
