import express, { Request, Response } from "express";
import {getHLTB} from "../libs/hltb";

export const hltbRouter = express.Router();

hltbRouter.get("/", async (req: Request, res: Response) => {
  const title = (req.query.title as string) || "";

  const result = await getHLTB(title);

  console.log(result)

  if (!result) {
    res.status(500).send("Something went wrong");
    return;
  }

  res.json({
    gameplayMain: result.gameplayMain || '',
    gameplayMainExtra: result.gameplayMainExtra || '',
    gameplayCompletionist: result.gameplayCompletionist || '',
  });
});
