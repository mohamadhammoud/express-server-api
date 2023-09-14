import { Router, Request, Response, NextFunction } from "express";
import { errorHandlingWrapper } from "../middleware/errorHandlingMiddleware";
import authController from "../../controllers/auth.controller";

const router = Router();

router.post(
  "login",
  errorHandlingWrapper((req: Request, res: Response, next: NextFunction) => {
    authController.login();
  })
);

export default router;
