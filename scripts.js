
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

// let i1 = document.getElementsByClassName('i1')[0];
// let i2 = document.getElementsByClassName('i2')[0];
// let i3 = document.getElementsByClassName('i3')[0];
// let i4 = document.getElementsByClassName('i4')[0];
// let i5 = document.getElementsByClassName('i5')[0];

// let text = document.getElementById('text');

// i1.addEventListener('mouseover', () => {
//     text.textContent = 'Se aceptan sugerencias a tener en cuenta para la generación de la página web para asegurar un producto acorde a las especificaciones de cada cliente. Diseño UX/UI usando las últimas tecnologías del mercado. Entrega asegurada dentro del mes del pedido y posibilidad de retoques una vez llegue el día de entrega';
// });

// i2.addEventListener('mouseover', () => {
//     text.textContent = 'Obtené tu página web ahora con dominio customizado (www.ejemplo.com), para que tu marca adquiera mayor calidad y destaque en el mercado';
// });

// i3.addEventListener('mouseover', () => {
//     text.textContent = 'SEO optimizado para que tu marca aparezca más frecuentemente en los resultados de búsqueda. Tageamos tu página web con un gran número de palabras clave que coinciden con lo que tus clientes buscan';
// });

// i4.addEventListener('mouseover', () => {
//     text.textContent = 'Envio de emails automáticos, para que tus clientes reciban una atención inmediata y de calidad al solicitar tus servicios o productos';
// });

// i5.addEventListener('mouseover', () => {
//     text.textContent = 'Utilización de códigos QR para lo que quieras. Desde tu página web, tus redes sociales o tu carta de pedidos';
// });


// // link replacement

// if (window.innerWidth <= 480) {
//     document.getElementById('ig').setAttribute('href', 'instagram://user?username=buzzpage.co');
// }


// minimize tabs

const top1 = document.querySelectorAll('.top');
const bar = document.querySelectorAll('.btn-bar');
const p = document.querySelectorAll('.content');

for (let i = 0; i < bar.length; i++) {
    bar[i].addEventListener('click', () => {
        p[i].style.display = 'none';
        top1[i].style.marginBottom = '1%';
    });
}


// enlarge tabs

const sqr = document.querySelectorAll('.btn-sqr');

for (let i = 0; i < sqr.length; i++) {
    sqr[i].addEventListener('click', () => p[i].style.display = 'block');
}


// variables for navbar

const website = document.querySelector('#website');
const domain = document.querySelector('#domain');
const seo = document.querySelector('#seo');
const email = document.querySelector('#email');
const qr = document.querySelector('#qr');

const site = document.querySelector('.website');
const dom = document.querySelector('.domain');
const opt = document.querySelector('.seo');
const mail = document.querySelector('.email');
const code = document.querySelector('.qr');

if (window.innerWidth > 480) {
    // nav pop tabs
    
    var index = 1;
    
    let btns = [website, domain, seo, email, qr];
    
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', () => {
            index++;
            switch (i) {
                case 0:
                    site.style.zIndex = index.toString();
                    break;
                case 1:
                    dom.style.zIndex = index.toString();
                    break;
                case 2:
                    opt.style.zIndex = index.toString();
                    break;
                case 3:
                    mail.style.zIndex = index.toString();
                    break;
                case 4:
                    code.style.zIndex = index.toString();
                    break;
            }
        })
    }
    
    
    // drag tabs
    
    document.addEventListener("DOMContentLoaded", function() {
        var tabs = document.querySelectorAll(".tab");
        var tabContainer = document.querySelector('.tabs');
    
        console.log(tabContainer.children);
        
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener("dragstart", function(event) {
                event.dataTransfer.setData("posX", event.clientX - tabs[i].offsetLeft);
                event.dataTransfer.setData("posY", event.clientY - tabs[i].offsetTop);
                index++;
                tabs[i].style.zIndex = index.toString();
            });
          
            tabs[i].addEventListener("dragend", function(event) {
                tabs[i].style.left = (event.clientX - event.dataTransfer.getData("posX")) + "px";
                tabs[i].style.top = (event.clientY - event.dataTransfer.getData("posY")) + "px";
            });      
          
            tabs[i].addEventListener("drag", function(event) {
                tabs[i].style.left = (event.clientX - event.dataTransfer.getData("posX")) + "px";
                tabs[i].style.top = (event.clientY - event.dataTransfer.getData("posY")) + "px";
            });
        }
    });

    
    // disappear indicator tab
    
    const indicator = document.querySelector('.indicator');
    
    document.addEventListener('dragstart', () => indicator.style.display = 'none');
}


// mobile app mods

if (window.innerWidth <= 480) {   
    let btns = [website, domain, seo, email, qr];
    const p = document.querySelectorAll('.content');
    let invert = 4;

    for (let i = 0; i < btns.length; i++) {
        btns[invert].addEventListener('touchstart', () => p[i].style.display = 'block');
        invert--;
    }

    for (let i = 0; i < p.length; i++) {
        p[i].style.display = 'none';
    }
}

