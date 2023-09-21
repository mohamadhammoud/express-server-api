import { Request, Response, NextFunction } from "express";
import JWTUtils from "../../utils/jwt-utils";

export function auth(req: Request, res: Response, next: NextFunction) {
  // Get the token from the request headers
  const authHeader = req.header("Authorization");

  // Check if the Authorization header is missing
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  // Split the header to extract the token part
  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return res
      .status(401)
      .json({ message: "Unauthorized: Invalid token format" });
  }

  const token = parts[1];

  try {
    // Verify the token
    const decoded = JWTUtils.verifyAccessToken(token);

    // You can now access the user information in the 'decoded' object
    // For example, if your token contains a 'userId' field:
    // req.user = decoded.userId;

    // Continue to the next middleware or route
    next();
  } catch (error) {
    // If the token is invalid, catch the error and return a 401 Unauthorized response
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
}
