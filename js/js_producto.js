// componente mejorado

const productos = [
    { nombre: "gato", precio: 0, img: "https://i.redd.it/jv4stl6clfm71.jpg" }
    ,{ nombre: "Moto r6", precio: 200000, img: "https://www.moto1pro.com/sites/default/files/yamaha-yzf-r6.jpg" }
];

const contenedor = document.getElementById("contenedor");

productos.forEach(prod => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${prod.img}" alt="${prod.nombre}">
            <h3>${prod.nombre}</h3>
            <p>${prod.precio}</p>
            <button>Agregar</button>
    `;
    contenedor.appendChild(card);
});