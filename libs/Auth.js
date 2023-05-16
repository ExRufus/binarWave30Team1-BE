const SECRET_KEY = "private!@$~!@~!$~!@~!@";

function generateToken (user) {
    const payload = {
    id: user.id,
    email: user.email,
    }
    const token = jwt.sign(payload, SECRET_KEY)
    return token
  }

  function verifyToken(token) {
    const isVerified = jwt.verify(token, SECRET_KEY)
    console.log({isVerified})
    return isVerified;
}

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

module.exports = {generateToken, verifyToken, authLogin}