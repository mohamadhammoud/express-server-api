import bodyParser from "body-parser";
import cors from "cors";
import { Application } from "express";

import { environment } from "../config";
import apiRouter from "../api";

class ExpressLoader {
  readonly app: Application;

  constructor(app: Application) {
    this.app = app;

    app.use(cors());

    app.options("*", cors());

    // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
    // It shows the real origin IP in the heroku or Cloudwatch logs
    app.enable("trust proxy");

    // Transforms the raw string of req.body into json
    app.use(bodyParser.json());

    // Load API routes
    // app.use(auth);
    app.use(environment.prefix, apiRouter);
  }
}

export default ExpressLoader;
