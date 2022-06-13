import express from "express";

import ormClient from "../db";

const router = express.Router();

async function getIngredients() {
  const allIngredients = await ormClient.ingredient.findMany();
  return allIngredients;
}

// Any post to /users should create a new user
router.get("/", async (_req, res) => {
  const allIngredients = await getIngredients();
  res.json(allIngredients);
});

export default router;
