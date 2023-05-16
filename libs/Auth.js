const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

function checkPassword(incomingPassword, databasePassword) {
    return bcrypt.compareSync(incomingPassword, databasePassword);
  }

async function authLogin({ email, password }) {
    try {
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) return Promise.reject("User not found!");
  
      const isPasswordValid = checkPassword(password, user.password);
      if (!isPasswordValid) return Promise.reject("Wrong password");
  
      return user;
    
    } catch (error) { 
      return Promise.reject(error);
    }
  }

  module.exports = {authLogin}