const bcrypt = require("bcryptjs");
const prisma = require("../lib/prisma");

async function getAllUsers(req, res) {
  const users = await prisma.user.findMany();
  res.json({ users });
}

async function createUser(req, res) {
  const { username, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await prisma.user.create({
    data: {
      email,
      username,
      password: hashedPassword,
    },
  });
  res.json({ user });
}

async function updateUser(req, res) {
  const { userId } = req.params;
  const { username, email } = req.body;
  const user = await prisma.user.update({
    where: { id: Number(userId) },
    data: { username, email },
  });
  res.json({ user });
}

async function deleteUser(req, res) {
  const { userId } = req.params;
  const user = await prisma.user.delete({
    where: { id: Number(userId) },
  });
  res.json({ user });
}

module.exports = { getAllUsers, createUser, updateUser, deleteUser };
