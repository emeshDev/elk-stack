import logger from "./logger.js";

const homeController = (req, res) => {
  try {
    logger.info("welcome home page");
    res.send("WELCOME HOME");
  } catch (error) {
    console.log(error);
  }
};

const postController = (req, res) => {
  try {
    logger.info("Doing Post controller");
    res.send("WELCOME POST PAGE");
  } catch (error) {
    console.log(error);
  }
};

const controllers = { homeController, postController };
export default controllers;
