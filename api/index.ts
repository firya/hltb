import express from "express";
import {hltbRouter} from "./hltb";

export const apiRouter = express.Router();

apiRouter.use("/", async (req, res, next) => {
  if (process.env.NODE_ENV !== "production") {
    next();
    return;
  }

  const secretKey = (req.query.sekretKey as string) || "";

  if (process.env.SECRET_KEY !== secretKey) {
    res.status(401).send("No sekretKey");
    return;
  }
  next();
});

apiRouter.use("/hltb", hltbRouter);
