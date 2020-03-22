const boton = document.getElementById("boton");
const contenido = document.querySelector("#contenido");



boton.addEventListener("click",function(){
    fetch('https://randomuser.me/api/')
    //Transforma el archivo en JSON para poder leerlo
    .then(res=> res.json())
    .then(data=>{
        console.log(data.results['0'])
        //Mostrando los datos de la Api Imagen y Nombre
        contenido.innerHTML =`
        <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle">
        <p>Nombre: ${data.results['0'].name.last} ${data.results['0'].name.first}</p>`
    })
})