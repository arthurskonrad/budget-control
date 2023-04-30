const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const createRouter = require("./router");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB database");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB database:", err);
    process.exit(1);
  });

const app = express();

app.use(createRouter(app));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT || 3000}`);
});
