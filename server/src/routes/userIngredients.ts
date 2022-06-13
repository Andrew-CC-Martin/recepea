// import jwt from "jsonwebtoken";
// import express from "express";

// import ormClient from "../db";
// import { JwtPayload } from "../types";
// const router = express.Router();

// async function getUserIngredients(user: ormClient.User) {
//   const allIngredients = await ormClient.userIngredients.findMany({
//     where: {
//       user,
//     },
//   });
//   return allIngredients;
// }

// // todo
// router.get("/", async (req, res) => {
//   const token = req.header("Authorization").replace("Bearer ", "");
//   const decoded = jwt.verify(token, process.env.SECRET) as JwtPayload;
//   const user = await ormClient.user.findUnique({
//     where: {
//       id: Number(decoded.userId),
//     },
//   });
//   const allUserIngredients = await getUserIngredients(user);
//   res.json(allUserIngredients);
// });

// export default router;
