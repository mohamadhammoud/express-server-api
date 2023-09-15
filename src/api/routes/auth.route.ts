import { Router, Request, Response, NextFunction } from "express";
import { errorHandlingWrapper } from "../middleware/errorHandlingMiddleware";
import authController from "../../controllers/auth.controller";

const router = Router();

router.post(
  "/signup",
  errorHandlingWrapper(
    async (req: Request, res: Response, next: NextFunction) => {
      const { firstName, lastName, email, password, role, company } = req.body;

      await authController.signup({
        firstName,
        lastName,
        email,
        password,
        role,
        company,
      });

      res.json("Signed up successfully");
    }
  )
);

export default router;
