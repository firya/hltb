import express from "express";
import {hltbRouter} from "./hltb";

export const apiRouter = express.Router();

apiRouter.use("/", async (req, res, next) => {
  if (process.env.NODE_ENV !== "production") {
    next();
    return;
  }

  const secretKey = (req.query.title as string) || "";

  if (process.env.SECRET_KEY !== secretKey) {
    res.status(401).send("No initData");
    return;
  }
  next();
});

apiRouter.use("/hltb", hltbRouter);
