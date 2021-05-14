const express =require ("express");
const mongoose = require ("mongoose")
const routes = require("./routes");
const app = express ();
app.use(express.json());
app.use(routes);
mongoose.conect("mongedb://localhost:27017/apiUC12", {useNewUrlParser: true, useUnifiedTopoly: true});
app.listen (3001);
