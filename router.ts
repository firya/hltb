import { Express, Request, Response } from "express";
import { apiRouter } from "./api";

export const router = (app: Express) => {
  app.use("/api", apiRouter);

  app.get("/", (req: Request, res: Response) => {
    res.send("Get out! You are not welcome here");
  });
};
