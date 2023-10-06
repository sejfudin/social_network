const generateToken = require('../helpers/generateToken');
const userService = require('../services/userService');

const addUser = async (req, res, next) => {
  try {
  
    const createdUser = await userService.addUser(req.body);
  
    if (createdUser) {
      res.status(201).json({
        _id: createdUser._id,
        // name: createdUser.name,
        // email: createdUser.email,
        token: generateToken(createdUser._id),
      });
    }
  } catch (error) {
    console.log(error)
    // next({ message: error.message });
  }
};

module.exports = { addUser };
