let elementos = [];

async function guardar(obj) {
    elementos.push(obj);
    return elementos;
}

async function listar() {
    return elementos;
}

module.exports = {
    guardar,
    listar
}
