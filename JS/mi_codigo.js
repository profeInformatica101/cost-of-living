//CONSTANTE
let PAIS = "Spain";

let ciudades = [];
let ciudades_pais = [];
let lst_salario = [];
let salario_medio_pais;
let lst_paises;

function configuracion() {

    //Mapeamos los valores que nos interesan
    ciudades = datum.map((c)=> new Ciudad(c[""], parseFloat(c["Tomato (1kg)"]), parseFloat(c["Fitness Club, Monthly Fee for 1 Adult"]), parseFloat(c["Price per Square Meter to Buy Apartment in City Centre"]), parseFloat(c["Price per Square Meter to Buy Apartment Outside of Centre"]),parseFloat(c["Average Monthly Net Salary (After Tax)"])));


    lst_paises = paises();
    createSelect();


    obtenerDatos();
    //TODO: 
    //console.log(PAIS+" precio_medio_tomate:"+precio_medio_tomate);
}

function obtenerDatos(){

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
}

function principal(){
    genera_tabla();
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

function genera_tabla() {
  obtenerDatos();
    document.getElementById("nombrePais").innerHTML = PAIS;

    // Obtener la referencia del elemento body
    var contenedor = document.getElementById("contenedor");
  
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.getElementById("tabla");



    var tblBody = document.createElement("tbody");
  
    // Crea las celdas
    for (var i = 0; i < ciudades_pais.length; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
  
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode(ciudades_pais[i].nombre);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);

      celda = document.createElement("td");
      textoCelda = document.createTextNode(ciudades_pais[i].precio_tomate);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);


      celda = document.createElement("td");
      textoCelda = document.createTextNode(ciudades_pais[i].precio_gym);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);


      celda = document.createElement("td");
      textoCelda = document.createTextNode(ciudades_pais[i].salario_medio);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);


      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    contenedor.appendChild(tabla);

  }
  
  function createSelect(){

    /**********
 * ##################
 * #   <SELECT> 
 * #################
 * */

 var select = document.createElement("select");
select.name = "pais_name";
select.id= "pais_id";
select.setAttribute("onchange", "cambioPais(this)");
select.value = "Spain";


for (const val of lst_paises){
    var option = document.createElement("option");
    option.value = val;
    option.text = val.charAt(0).toUpperCase() + val.slice(1);
    select.appendChild(option);
}

var label = document.createElement("label");
label.innerHTML = "Elige pais: "
label.htmlFor = "pais";

document.getElementById("contenedor").appendChild(label).appendChild(select);
}

function cambioPais(objeto){
  PAIS =objeto.value;
 // alert(objeto.value);
 genera_tabla();
}

function paises(){
  let nombre_paises = new Set(ciudades.map(x=>x.nombre.substring(x.nombre.indexOf(',')+2, x.nombre.length) ));
  return nombre_paises;
}
