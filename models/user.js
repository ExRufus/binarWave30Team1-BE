const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

function checkPassword(incomingPassword, databasePassword) {
  return bcrypt.compareSync(incomingPassword, databasePassword);
}

async function login({ Email, password}) {
  try {
    const user = await prisma.user.findUnique({ where: { Email } });
    if (!user) return Promise.reject("User not found");
    const isPasswordValid = checkPassword(password, user.Password)
    if (!isPasswordValid) return Promise.reject("Wrong Password");
    return user;
  } catch (error) {
    return Promise.reject(error);
  }
}



module.exports = { login };