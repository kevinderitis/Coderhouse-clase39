const { getUsers, saveUser } = require('../negocio/user.js');
const PrimeraConexion = require('../negocio/singleton.js');

async function main(req, res) {
    let users = await getUsers()
    res.render('datos', { users } )
};

async function main2(req, res) {
  let users = await getUsers()
  res.json(users)
};

async function addUser(req, res) {

    let user = {};
    user.nombre = req.body.user[0];
    user.apellido = req.body.user[1];
    user.dni = req.body.user[2]; 
  
    let users = await saveUser(user)
    res.render('datos', { users }  )
};

async function addUser2(req, res) {

  let user = {};
  user.nombre = req.body.user[0];
  user.apellido = req.body.user[1];
  user.dni = req.body.user[2]; 

  let users = await saveUser(user)
  res.status(200)
};

function singleton(req, res) {
  let primeraConexion = PrimeraConexion.getInstance();
  let hora = primeraConexion.obtenerHora()
  res.json({hora})
};




module.exports = {
  main,
  addUser,
  main2,
  addUser2,
  singleton
}
