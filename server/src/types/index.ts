// import ormClient from "../db";
// import { Request } from "express";

// export interface RequestWithAuth extends Request {
//   // user: string // or any other type
//   token: string; // or any other type
//   user: ormClient.UserWhereUniqueInput;
// }

interface JwtPayload {
  userId: string;
}

export type { JwtPayload };
