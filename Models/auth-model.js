import mongoose from "mongoose"; 

const AddUserSchema = new mongoose.Schema({
    name: { type: String, required: true, default: " " },
    email: { type: String, required: true, default: " " },
    password: { type: String, required: true, default: "" },
    isAdmin:{type:Boolean,default:false},
    

});

const AddUserModel = mongoose.model('AddUser', AddUserSchema);



export default AddUserModel;