require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes= require('./routes/UserRoutes')
app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.DBURL)
  .then(() => {
    console.log(`DB Connected`);
  })
  .catch((e) => {
    console.log(e);
  });
app.use('/api/user',userRoutes)
app.listen(7600, console.log(`Server is running on PORT: ${process.env.PORT}`));
