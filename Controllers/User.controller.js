const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();

// 1. fungsi create player / register - vincent
// 2. fungsi get player - auda
async function getPlayer (req, res, next) {
    try {
        const players = await prisma.user.findMany();
        if (players) {
            return res.status(200).json({
              result: "Success",
              players,
            });
          }
        
    } catch (error) {
        next(error);
    }
  };
// 3. fungsi get player berdasarkan id - adan

// 4. fungsi update player - akmal
async function updateUser(req, res, next) {
  try {
    const { id } = req.params;
    const findUser = await prisma.user.findUnique({where: {id}});
    
    if (!findUser) return res.status(404).json({result: 'not found', message: `Player with ${id} not found`})

    const { Email, Username, Password, Total_score, Biodata, City } = req.body;

    if (findUser) {
      const updateData = await prisma.user.update({
        where: { id },
        data: {
          Email,       
          Username,    
          Password,    
          Total_score, 
          Biodata,     
          City,
        },
    });
      
      res.status(200).json({
        result: "Success",
        message: `User with id = ${id} berhasil di update`,
        data: updateData,
      });
    } else {
      res.status(500).json({
        result: 'Error',
        message: 'Internal Server Error',
      });
    }
  } catch (error) {
    next(error);
  }
}

// 5, fungsi delete player - labib
// 6, fungsi login player - mirza

module.exports = {getPlayer, updateUser};
