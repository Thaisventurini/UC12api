const express =require ("express");
const mongoose = require ("mongoose")
const app = express ();
mongoose.conect("mongedb://localhost:27017/apiUC12", {useNewUrlParser: true, useUnifiedTopoly: true});
app.get("/",(req,res)=> {
    res.send ("Olá, mundo");
})
app.listen (3001);
