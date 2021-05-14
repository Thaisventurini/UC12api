const  express =  require("express");
const routes = express.Router();
const EmployerController = require("./src/controller/EmployerController");
routes.get("/employer", EmployerController.index);
routes.post("/employer", EmployerController.store);
routes.get("/",(req,res)=> {
    res.send ("Olá, mundo");
})
module.exports = routes;