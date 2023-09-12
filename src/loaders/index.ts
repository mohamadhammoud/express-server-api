import express, { Application } from "express";
import ExpressLoader from "./express";
import DatabaseLoader from "./database";

class AppLoader {
  constructor(app: Application) {
    new DatabaseLoader();
    new ExpressLoader(app);
  }
}

export default AppLoader;
