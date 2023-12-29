import express from "express";

const router = express.Router();

const userList = [];

// add user
router.post("/user/add", (req, res) => {
  const newUser = req.body;

  userList.push(newUser);

  return res.status(201).send({ message: "User is added successfully." });
});

// user list
router.get("/user/list", (req, res) => {
  return res.status(200).send(userList);
});

export default router;
