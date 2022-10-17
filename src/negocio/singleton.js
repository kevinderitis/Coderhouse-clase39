let instance = null;

class PrimeraConexion {

    constructor(){
        let date = new Date();
        let formatTime = date.toLocaleTimeString();
        this.value = formatTime;
    }

    obtenerHora(){
        return this.value;
    }


    static getInstance(){
        if (!instance) {
            instance = new PrimeraConexion();
        }
        return instance;
    }
}

module.exports = PrimeraConexion;