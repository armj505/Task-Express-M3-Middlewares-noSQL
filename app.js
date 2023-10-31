const express = require("express");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");

connectDb();
const morgan = require("morgan");
app.use(morgan("dev"));

app.use(express.json());
app.use("/posts", postsRoutes);

app.use("*", (req, res, next) => {
  res.status(404).json({ message: "Path Not Found" });
});

app.use((error, req, res, next) => {
  if (error) {
    res
      .status(error.status || 500)
      .json({ message: error.message } || { message: "Internal Server Error" });
  }
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
