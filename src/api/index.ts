import { Router } from "express";
import authRouter from "./routes/auth.route";
import userRouter from "./routes/user.route";

const router = Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);

export default router;
