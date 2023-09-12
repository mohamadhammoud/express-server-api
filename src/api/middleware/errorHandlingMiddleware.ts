import { Request, Response, NextFunction } from "express";

export function errorHandlingWrapper(
  callback: (req: Request, res: Response, next: NextFunction) => Promise<void>
) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await callback(req, res, next);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  };
}
