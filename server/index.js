const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//setup express

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("uploadImages"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

//setup mongoose

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) throw err;
    console.log("Mongodb connection established");
  }
);

//setup routes

app.use("/users", require("./routes/userRouter"));
app.use("/products", require("./routes/productRouter"));
app.use("/orders", require("./routes/orderRouter"));
app.use("/recipes", require("./routes/recipeRouter"));
app.use("/dietplans", require("./routes/dietPlanRouter"));
app.use("/training", require("./routes/trainingRouter"));
app.use("/contact", require("./routes/contactFormRouter"));
app.use("/blog", require("./routes/blogRouter"));
app.use("/meditation", require("./routes/meditationRouter"));
app.use("/history", require("./routes/historyRouter"));
