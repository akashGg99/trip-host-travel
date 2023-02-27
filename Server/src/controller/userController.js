const userModel = require("../models/userModel");




const userLogin = async function(req,res){
    try{
        const data = req.body;
        const [name, email, password]= data

        //check if user exists in DB
        const userData = await userModel.find({email,password})

        if(userData.length==0){ res.status(200).send({msg:"user not found."})}

        let userId = userData._id


        //if user exists create and give a token..
        const Token = jwt.sign({userId:userId, email:email},
            "some secret key")

        res.status(200).send({token:Token})    
        

    }
    catch(err){
        res.status(500).send({msg:err.message})
    }
}
