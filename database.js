// this is where u set modwl for your collection in your database
import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({ 
    Name:String,
    salary:Number,
    language:Number,
    city:String,
    company:String,
    os:String,
    married:Boolean
});
// The names of collections must end with "s"
const employeeModel = mongoose.model('employee_informations', employeeSchema);
export default employeeModel;
