// Función para agrandar la imagen clickeada
const mostrarImagen = (url, format, i, numFotos) => {
    console.log('Hola Aldo');
    const overlay = document.createElement('DIV');
    overlay.classList.add('overlay');

    // Primero se crea un div para agregar los botones necesarios y la foto
    const foto = document.createElement('DIV');
    foto.classList.add('contenedor-foto');

    // Botón para cerrar la info
    const boton = document.createElement('BUTTON')
    boton.classList.add('cerrar-foto');
    boton.textContent = 'X'
    boton.onclick = () => {
        overlay.remove();
    }
    foto.appendChild(boton);

    // Agregar la foto al overlay
    const imgIndividual = document.createElement('IMG');
    imgIndividual.setAttribute('src', url+`imagen-galeria-${i}`+format);
    imgIndividual.classList.add('foto-galeria');
    foto.appendChild(imgIndividual);

    // Agregar botones para desplasarse
    const contBotones = document.createElement('DIV');
    contBotones.classList.add('botones-galeria');
    const botonDerecha = document.createElement('BUTTON');
    const botonIzquierda = document.createElement('BUTTON');
    botonIzquierda.innerHTML = '&#10092;'
    botonDerecha.innerHTML = '&#10093;'
    contBotones.appendChild(botonIzquierda);
    contBotones.appendChild(botonDerecha);
    foto.appendChild(contBotones);

    overlay.appendChild(foto);

    // Ocultar los botones correspondientes en la primera y última foto
    if (i===1) {
        botonIzquierda.classList.add('ocultar');
    }
    if (i===numFotos) {
        botonDerecha.classList.add('ocultar');
    }

    // Cambiar de foto
    botonDerecha.onclick = () => {
        overlay.remove();
        mostrarImagen(url, format, i+1, numFotos);
    }
    botonIzquierda.onclick = () => {
        overlay.remove();
        mostrarImagen(url, format, i-1, numFotos);
    }

    const body = document.querySelector('body');
    body.appendChild(overlay);
}

// Función para agregar las fotos a la galería
const llenarGaleria = () => {
    const galeria = document.querySelector('.galeria');
    const webp = document.querySelector('.webp');

    let url = 'src/img/';
    let format = '.jpg';

    if (webp) {
        url = 'build/img/';
        format = '.webp';
    } 
    const fragment = document.createDocumentFragment();

    for (let i = 1; i < 10; i++) {
        const contenedorImg = document.createElement('DIV');
        const imgGaleria = document.createElement('IMG');
        contenedorImg.classList.add('img-individual');
        //const urli = url+`imagen-galeria-${i}`+format;
        imgGaleria.setAttribute('src', url+`imagen-galeria-${i}`+format);

        imgGaleria.onclick = () => {
            mostrarImagen(url, format, i, 9);
        };

        contenedorImg.appendChild(imgGaleria);
        fragment.appendChild(contenedorImg);
    }

    galeria.appendChild(fragment);
}

// Para llamar a la función llenarGaleria una vez que se abra la pestaña de Galería
const bodyGaleria = document.querySelector('.body-galeria');

if (bodyGaleria) {
    bodyGaleria.onload = llenarGaleria; 
}


