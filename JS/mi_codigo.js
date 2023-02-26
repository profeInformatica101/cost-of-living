let pasajeros_titanic = [];


function configuracion() {

    //Mapeamos los valores que nos interesan
    pasajeros_titanic = datum.map((c)=> new Pasajero(c["age"], c["boat"],c["cabin"],c["embarked"],c["fare"],c["home.dest"],c["name"],c["parch"],c["pclass"],c["sex"],c["survived"],c["ticket"]));
  
}

function principal(){
    genera_tabla();
}

class Pasajero{
  constructor(age, boat, cabin, embarked, fare, from, name, parch, pclass, sex, survived, ticket ){
    this.age = age;
    this.boat = boat;
    this.cabin = cabin;
    this.embarked = embarked;
    this.fare = fare;
    this.from = from;
    this.name = name;
    this.parch = parch;
    this.pclass = pclass;
    this.sex = sex;
    this.survived = survived;
    this.ticket = ticket;
  }

}

function genera_tabla() {
  //obtenerDatos();



    // Obtener la referencia del elemento body
    var contenedor = document.getElementById("contenedor");
  
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.getElementById("tabla");



    var tblBody = document.createElement("tbody");
  
    // Crea las celdas
    for (var i = 0; i < pasajeros_titanic.length; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
  
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode(pasajeros_titanic[i].name);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);

      celda = document.createElement("td");
      textoCelda = document.createTextNode(pasajeros_titanic[i].from);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);


      celda = document.createElement("td");
      textoCelda = document.createTextNode(pasajeros_titanic[i].pclass);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);


      celda = document.createElement("td");
      textoCelda = document.createTextNode(pasajeros_titanic[i].age);
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

function barcos(){
  let barcos = new Set(pasajeros_titanic.map(p=>p.boat));
  return barcos;
}
function cabinas(){
  let cabin = new Set(pasajeros_titanic.map(p=>p.cabin));
  return cabin;
}


function clases(){
  let clases_posibles = new Set(pasajeros_titanic.map(p=>p.pclass));
  return clases_posibles;
}

function nombreCiudades(){
  let nombre_ciudades = new Set(pasajeros_titanic.map(p=>p.from));
  return nombre_ciudades;
}
function imprimirNombreCiudades(){
  nombreCiudades().forEach(p=>console.log(p));
}

function imprimirNombreMujeres(){
   pasajeros_titanic.filter(p => p.sex === "female").map(p=>p.name).forEach(p=>console.log(p));
}
