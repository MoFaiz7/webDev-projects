//required modules importing
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import validator from 'validator'
import bcrypt from "bcrypt"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

//connecting to the database mongoDB
mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

//defining schema of the user
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    timeStamp: String,
})

const User = new mongoose.model("User", userSchema)

//securing pass

const secPass = async(password)=>{
    try{
        const passHash = await bcrypt.hash(password, 10);
        return passHash;
    }catch(e){
        console.log(e);
    }
}


//Routes

//verifying login
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

//handling the registeration request
app.post("/register", async (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, async(err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            if(validator.isEmail(email)){
                // const hashPass = secPass(password);
                const tm = new Date();
            const user = new User({
                name,
                email,
                password,
                timeStamp: tm.toLocaleString() //timestamp of registeration
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now.", valid:true })
                }
            })
        }else{
            res.send( { message: "Invalid field", valid:false })
        }
        }
    })
    
}) 

app.listen(8000,() => {
    console.log("listening at port 8000")
})