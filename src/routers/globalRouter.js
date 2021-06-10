import express from "express";
import {
  mainController,
  resultContoller,
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", mainController);
globalRouter.get("/result", resultContoller);

export default globalRouter;
