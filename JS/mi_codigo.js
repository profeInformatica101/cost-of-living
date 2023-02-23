
let ciudades = [];

function configuracion() {

    //Mapeamos los valores que nos interesan
    ciudades = datum.map((c)=> new Ciudad(c[""], c["Tomato (1kg)"], c["Fitness Club, Monthly Fee for 1 Adult"], c["Price per Square Meter to Buy Apartment in City Centre"], c["Price per Square Meter to Buy Apartment Outside of Centre"],c["Average Monthly Net Salary (After Tax)"]));

}
function principal(){
  /***    ###########################################
     *    #            TU CÓDIGO AQUÍ               #
     *    ###########################################
     * */

    //Muestra por consola el total de ciudades que hay


    //Crea una lista con los nombres de las ciudades usando Map


    //Muestra por consola el listado de los nombres de las ciudades que aparecen
            /** Ejemplo 
             *         nombres = ["A", "B", "C"];
             *         nombres.forEach(n => {console.log(n);});
             */


    // Crea una lista con las ciudades que son de España
    // Usa el método 'includes' de String (Ejemplo filter(x => x.nombre.includes("Italy")) )
    /** Nota: 
    "Hola Mundo".includes("H");  // ---> true 
    "Hola Mundo".includes("X");      //--> false
    */
    // Calcula el precio medio de los tomates en Alemania "Germany" usa Map para crear una lista de precios de tipo Float
    // A continuación usa reduce para calcularlo y mostrarlo por consola

                /** Ejemplo Calculo de salario medio
                            lst_salario = [1.2, 4.2, 4.2];
                            salario_medio_pais = lst_salario.reduce((total, x, index, array) => {
                            total += x;
                            if( index === array.length-1) { 
                            return total/array.length;
                            }else { 
                            return total;
                            }
                        });
                */


    

      //Ordena la lista por 'salario_medio'
                  /** Ejemplo lista_ordenada por precio gimnasio
                   *    ord_precio_gym = ciudades.sort((x,y) => parseFloat(y.precio_gym) - parseFloat(x.precio_gym))
                   *   
                   */
    //Muestra las ciudades usando la consola.

    
    

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
