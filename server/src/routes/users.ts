import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Request, Response } from "express";

import { validateEmail, validatePassword } from "../utils";
import ormClient from "../db";

const router = express.Router();

// Any post to /users should create a new user
router.post("/signup", async (req: Request, res: Response) => {
  const {
    body: { email, name, password },
  } = req;

  const validEmail = validateEmail(email);

  if (!validEmail) {
    return res.status(500).send({
      message: "couldn't create user: invalid email",
    });
  }

  const validPassword = validatePassword(password);

  if (!validPassword) {
    return res.status(500).send({
      message: "couldn't create user: invalid password",
    });
  }

  try {
    const salt = await bcrypt.genSalt();
    const encryptedPassword = await bcrypt.hash(password, salt);

    const { id } = await ormClient.user.create({
      data: {
        email,
        name,
        password: encryptedPassword,
      },
    });

    const jsonWebToken = await jwt.sign({ userId: id }, process.env.SECRET);

    res.send({ jsonWebToken });
  } catch (err) {
    console.log("couldn't create user. err.message:", err.message);
    res.status(500).send({
      message: `couldn't create user: ${err.message}`,
    });
  }
});

router.post("/login", async (req: Request, res: Response) => {
  const {
    body: { email, password },
  } = req;

  try {
    const user = await ormClient.user.findUnique({
      where: {
        email,
      },
    });

    const match = await bcrypt.compare(password, user.password);

    if (match) {
      // generate jwt
      const jsonWebToken = await jwt.sign(
        { userId: user.id },
        process.env.SECRET
      );
      res.send({ jsonWebToken });
    } else {
      res.status(500).send({
        message: "couldn't log in",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: `couldn't log in: ${err.message}`,
    });
  }
});

export default router;
