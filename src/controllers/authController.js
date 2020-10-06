const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { email } = req.body;
    if (await User.findOne({ email })) {
      return res.status(400).send({ error: "User already exists" });
    }

    console.log("Register");

    const user = await User.create(req.body);

    user.password = undefined; //não retornar email pro usuario
    return res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});

module.exports = (app) => app.use("/auth", router); //prefixando todas rotas com /auth
//exemplo: /auth/register
