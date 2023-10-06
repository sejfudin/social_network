const { passwordCrypt } = require('../helpers/password');
const { Users} = require('../models');

const addUser = async data => {
    try {
      const { name, lastname, username, email, password, confirmPassword } = data;
      if (
        !name ||
        !lastname ||
        !username ||
        !email ||
        !password ||
        !confirmPassword
      ) {
        throw new Error('All fields are required');
      }
      if (password !== confirmPassword) {
        throw new Error('Password does not match');
      }
      const hashedPassword = await passwordCrypt(password);
      const newUser = await Users.create({
        name,
        lastname,
        username,
        email,
        password: hashedPassword,
      });
      return { status: 'success', newUser };
    } catch (error) {
      console.log(error);
      return { status: 'error', message: error.message };
    }
  };
module.exports = {
  addUser,
};
