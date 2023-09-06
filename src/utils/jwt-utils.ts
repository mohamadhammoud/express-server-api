import jwt from "jsonwebtoken";
import environment from "../config/environment";

class JWTUtils {
  static generateAccessToken(payload: any, options: jwt.SignOptions) {
    const { expiresIn = "1h" } = options;

    return jwt.sign(payload, environment.jwtAccessTokenSecret, {
      expiresIn: "1h",
    });
  }

  static verifyAccessToken(accessToken: string) {
    return jwt.verify(accessToken, environment.jwtAccessTokenSecret);
  }
}
