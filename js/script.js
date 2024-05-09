// Inicializar una variable que tendrá la URL de la API para realizar la solicitud
let url = 'https://jsonplaceholder.typicode.com/users';
// Inicializar la función "fetch" para realizar una solicitud GET
fetch(url)
// Inicializar una promesa para que verifique si la API es correcta y trae los datos en objetos JSON
.then(response => response.json())
// Inicializar una promesa para que nos permita mostrar los datos en el tbody del html
.then(data => mostrarData(data))
// Captura errores de las promesas anterior, imrpimirá cualquier error en la consola
.catch(error => console.log(error));

const mostrarData = (data) => {
    // Inicializar una variable que almacenará el contenido de la tabla
    let body = "";
    // Inicializar el bucle para que recorra y obtenga la información requerida
    for (let i = 0; i < data.length; i++) {
        body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td><td>${data[i].address.street}</td><td>${data[i].address.suite}</td><td>${data[i].address.city}</td><td>${data[i].address.zipcode}</td><td>${data[i].address.geo.lat}</td><td>${data[i].address.geo.lng}</td></tr>`;
    }
    // Imprimir los datos en la tbody del html
    document.getElementById('data').innerHTML = body;
}