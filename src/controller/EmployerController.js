const Employer = require("../model/Employer");
class EmployerController{
    async store(req,res){
        const data = await Employer.create(req.body);
    return res.json(data);
    }
    async index(req, res) {
        const data = await Employer.find({});
        return res.json(data);
    }
    }
module.exports = new EmployerController();