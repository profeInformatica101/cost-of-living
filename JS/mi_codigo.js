
const PAIS = "Spain";

let ciudades = [];
let ciudades_pais = [];
let lst_salario = [];
let salario_medio_pais;

function configuracion() {

    //Mapeamos los valores que nos interesan
    ciudades = datum.map((c)=> new Ciudad(c[""], c["Tomato (1kg)"], c["Fitness Club, Monthly Fee for 1 Adult"], c["Price per Square Meter to Buy Apartment in City Centre"], c["Price per Square Meter to Buy Apartment Outside of Centre"],c["Average Monthly Net Salary (After Tax)"]));

    //Filtramos los valores que nos interesan
    ciudades_pais = ciudades.filter((c)=>c.nombre.includes(PAIS));
   
    //Mapeamos a listado de Float con los salarios
    lst_salario = ciudades_pais.map((c)=>parseFloat(c.salario_medio));

    //Reducimos el listado de float a una media de salarios.
    salario_medio_pais = lst_salario.reduce((total, amount, index, array) => {
        total += amount;
        if( index === array.length-1) { 
          return total/array.length;
        }else { 
          return total;
        }
      });
    
    
    console.log(PAIS+" salario_medio_pais:"+salario_medio_pais);
    console.log(PAIS+" precio_medio_tomate:"+salario_medio_pais);
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
