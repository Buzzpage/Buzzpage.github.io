
// // background image switch

// const img = ['./assets/asset1.webp', './assets/asset2.webp', './assets/asset3.png', './assets/asset4.webp', './assets/asset5.webp'];
// var i = 0;

// function backgroundChg() {
//     var body = document.getElementsByTagName('body')[0];
//     body.style.backgroundImage = `url(${img[i]});`;
//     i++;
//     if (i == img.length) i = 0;
// }

// setInterval(backgroundChg, 5000);


// message pop-up

let i1 = document.getElementsByClassName('i1')[0];
let i2 = document.getElementsByClassName('i2')[0];
let i3 = document.getElementsByClassName('i3')[0];
let i4 = document.getElementsByClassName('i4')[0];
let i5 = document.getElementsByClassName('i5')[0];

let text = document.getElementById('text');

i1.addEventListener('mouseover', () => {
    text.textContent = 'Se aceptan sugerencias a tener en cuenta para la generación de la página web para asegurar un producto acorde a las especificaciones de cada cliente. Diseño UX/UI usando las últimas tecnologías del mercado. Entrega asegurada dentro del mes del pedido y posibilidad de retoques una vez llegue el día de entrega';
});

i2.addEventListener('mouseover', () => {
    text.textContent = 'Obtené tu página web ahora con dominio customizado (www.ejemplo.com), para que tu marca adquiera mayor calidad y destaque en el mercado';
});

i3.addEventListener('mouseover', () => {
    text.textContent = 'SEO optimizado para que tu marca aparezca más frecuentemente en los resultados de búsqueda. Tageamos tu página web con un gran número de palabras clave que coinciden con lo que tus clientes buscan';
});

i4.addEventListener('mouseover', () => {
    text.textContent = 'Envio de emails automáticos, para que tus clientes reciban una atención inmediata y de calidad al solicitar tus servicios o productos';
});

i5.addEventListener('mouseover', () => {
    text.textContent = 'Utilización de códigos QR para lo que quieras. Desde tu página web, tus redes sociales o tu carta de pedidos';
});


// link replacement

if (window.innerWidth <= 480) {
    document.getElementById('ig').setAttribute('href', 'instagram://user?username=buzzpage.co');
}
