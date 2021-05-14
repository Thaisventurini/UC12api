const mongoose =require ("mongoose");
const EmployerSchema = new mongoose.Schema(
 {
     name: {
         type: String,
         required: true,
     },
     position: {
         type: String,
         required: true,
     },
     age: {
         type: Number,
     }
 }   
)
module.exports = mongoose.model("Employer", EmployerSchema);