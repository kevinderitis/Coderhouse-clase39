
const { guardar, listar } = require('../persistencia/user.js'); 

async function getUsers() {
   return listar();
}

async function saveUser(user) {
    let users = guardar(user)
   return users;
}


module.exports = {
  getUsers,
  saveUser
}