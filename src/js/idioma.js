let language = document.getElementsByTagName('html')[0].getAttribute('lang')

let esp = document.querySelector('.es');
let eng = document.querySelector('.en');

const filename = () => {
    let rutaAbsoluta = self.location.href;   
    let posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
	let rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
	return rutaRelativa; 
}

esp.onclick = () => {
    if (language!=='es') {
        location.href = '../' + filename();
        language = 'es';
    }
}

eng.onclick = () => {
    if (language!=='en') {
        location.href = 'english/' + filename();
        language = 'en';
    }
}