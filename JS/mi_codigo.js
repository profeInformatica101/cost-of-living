
let ciudades = [];

function configuracion() {

    //Mapeamos los valores que nos interesan
    ciudades = datum.map((c)=> new Ciudad(c[""], c["Tomato (1kg)"], c["Fitness Club, Monthly Fee for 1 Adult"], c["Price per Square Meter to Buy Apartment in City Centre"], c["Price per Square Meter to Buy Apartment Outside of Centre"],c["Average Monthly Net Salary (After Tax)"]));

}
function principal(){

}

class Ciudad{
    constructor(nombre, precio_tomate, precio_gym, precio_m2_centro,precio_m2_lejos_centro, salario_medio){
        this.nombre = nombre;
        this.precio_tomate = precio_tomate;
        this.precio_gym = precio_gym;
        this.precio_m2_centro = precio_m2_centro;
        this.precio_m2_lejos_centro = precio_m2_lejos_centro;
        this.salario_medio = salario_medio;
    }

}
