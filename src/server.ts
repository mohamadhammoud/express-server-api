import express from "express";
import AppLoader from "./loaders";
import { environment } from "./config";

const app = express();

new AppLoader(app);

app.listen(environment.port, () => {
  console.log("🔥 Server is running on port", environment.port);
});
