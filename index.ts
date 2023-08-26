import express, { Express } from "express";
import { router } from "./router";
import cors from "cors";
import bodyParser from "body-parser";

const app: Express = express();
const port = "8080";

app.use(cors());
app.use(bodyParser.json());
router(app);

app.listen(port, async () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
