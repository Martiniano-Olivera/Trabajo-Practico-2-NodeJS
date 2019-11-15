function BBDD(ciudad, humedad, presion, temp) {
    this.ciudad = ciudad;
    this.temp = temp;
    this.presion = presion;
    this.humedad = humedad;
}

module.exports = BBDD;