const contenedorActividades = document.getElementById('actividades');

const mostrarActividades = async () => {
    try {
        const actividadesInfo = await fetch('actividades.json');
        const actividadesJson = await actividadesInfo.json();
        const {actividades} = actividadesJson;
        const fragment = document.createDocumentFragment();

        actividades.forEach(elementoActividad => {
            const {id, actividad, status, informacion} = elementoActividad;
            const contenedorActividad = document.createElement('DIV');
            const nombreActividad = document.createElement('H2');
            const imagenActividad = document.createElement('IMG');
            
            if (language==='es') {
                imagenActividad.setAttribute('src',`build/img/actividad-${id}.webp`);
            } else {
                imagenActividad.setAttribute('src',`../build/img/actividad-${id}.webp`);
            }
            imagenActividad.dataset.imagenId = id;
            nombreActividad.textContent = actividad;

            contenedorActividad.addEventListener('click', ()=> {
                mostrarInfoActividad(actividad, informacion, status);
            });

            contenedorActividad.classList.add('actividad');
            imagenActividad.classList.add('actividad--imagen');
            nombreActividad.classList.add('actividad--nombre');
    
            contenedorActividad.appendChild(imagenActividad);
            contenedorActividad.appendChild(nombreActividad);
            fragment.appendChild(contenedorActividad);
        })
        contenedorActividades.appendChild(fragment);
    } catch(error) {
        console.log(error);
    }
};

const mostrarInfoActividad = (actividad, informacion, status) => {
    //const id = parseInt(e.target.dataset.imagenId);
    const overlay = document.createElement('DIV');
    const info = document.createElement('DIV');
    
    // Info sobre la actividad 
    const nombreActividad = document.createElement('H2');
    nombreActividad.textContent = actividad;
    info.appendChild(nombreActividad);
    informacion.forEach(infoElemento => {
        const {tipo, contenido} = infoElemento;
        const elemento = document.createElement(tipo);
        if(tipo=='IMG') elemento.setAttribute('src',contenido);
        else elemento.innerHTML = contenido;
        info.appendChild(elemento);  
    });

    const estado = document.createElement('SPAN');
    if(status=='proximo') estado.textContent = 'Próximamente en UMA Rancho San Gabriel';
    info.appendChild(estado);

    // Botón para cerrar la info
    const boton = document.createElement('BUTTON')
    boton.textContent = 'Cerrar'
    boton.onclick = () => {
        overlay.remove();
    }
    info.appendChild(boton);

    info.classList.add('info-actividad');
    overlay.appendChild(info);
    overlay.classList.add('overlay');

    const body = document.querySelector('body');
    body.appendChild(overlay);
};

// Para llamar a la funcion mostrarActividades una vez que se carge la pestaña de actividades
const bodyActividades = document.querySelector('.body-actividades');

if (bodyActividades) {
   bodyActividades.onload = mostrarActividades; 
}
