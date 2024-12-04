import express from "express";
import controllers from "./controller.js";

const app = express();

app.get("/", controllers.homeController);
app.get("/post", controllers.postController);

app.listen(5000, () => {
  console.log("Server is running on port : 5000");
});
