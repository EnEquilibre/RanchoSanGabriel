const menuHamIcono = document.getElementById('menu-ham--icono');
const navegacion = document.getElementById('navegacion');
const tablet = 768;

menuHamIcono.addEventListener('click', e=>{
    e.preventDefault();
    const navAltura = navegacion.scrollHeight;
    if(navegacion.classList.contains('mostrar')){
        navegacion.classList.remove('mostrar');
        navegacion.removeAttribute('style');
    }else{
        navegacion.classList.add('mostrar')
        navegacion.style.height = navAltura+'px';
    }
});

