const titulo = document.querySelector('h1');


titulo.innerHTML = titulo.innerHTML.split("").map(letra => {
    let color = [0,0,0].map(() => Math.floor(Math.random() * 256)).join(",");

    return `<span style="color:rgb(${color})">${letra}</span>`;
    
}).join("");

fetch("/colores/borrar/1", {
    method : "DELETE"
})
.then(respuesta => respuesta.text())
.then(respuesta => {
    console.log(respuesta);
})