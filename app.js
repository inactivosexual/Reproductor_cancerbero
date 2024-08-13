const titulo_cancion= document.querySelector('.reproductor-musica h1');
const artista = document.querySelector('.reproductor-musica p');
const progreso= document.getElementById('progreso');
const cancion= document.getElementById('cancion');
const boton_atras=document.querySelector('.controles button.atras');
const boton_adelante=document.querySelector('.controles button.siguiente');
const boton_medio=document.querySelector('.controles button.iniciar');
const icono= document.getElementById('iconoControl');

const canciones = [
    {
        titulo:`C'est La Mort`,
        nombre:'Cancerbero',
        fuente:'music/01 - Cest La Mort.mp3'
    },
    {
        titulo:'Es Épico',
        nombre:'Cancerbero',
        fuente:'music/02 - Es Épico.mp3'
    },
    {
        titulo:'Ser Vero',
        nombre:'Cancerbero',
        fuente:'music/03 - Ser Vero.mp3'
    },
    {
        titulo:'En el Valle de las Sombras',
        nombre:'Cancerbero',
        fuente:'music/04 - En el Valle de las Sombras.mp3'
    },
    {
        titulo:'Maquiavélico',
        nombre:'Cancerbero',
        fuente:'music/05 - Maquiavélico.mp3'
    },
    {
        titulo:'Mundo de Piedra',
        nombre:'Cancerbero',
        fuente:'music/06 - Mundo de Piedra.mp3'
    },
    {
        titulo:'Sin Mercy',
        nombre:'Cancerbero',
        fuente:'music/07 - Sin Mercy.mp3'
    },
    {
        titulo:'Un Día en el Barrio',
        nombre:'Cancerbero',
        fuente:'music/08 - Un Día en el Barrio.mp3'
    },
    {
        titulo:'Llovía',
        nombre:'Cancerbero',
        fuente:'music/09 - Llovía.mp3'
    },
    {
        titulo:'Y en un Espejo Vi',
        nombre:'Cancerbero',
        fuente:'music/10 - Y en un Espejo Vi.mp3'
    },
    {
        titulo:'La Hora del Juicio',
        nombre:'Cancerbero',
        fuente:'music/11 - La Hora del Juicio.mp3'
    },
    {
        titulo:'El Primer Trago',
        nombre:'Cancerbero',
        fuente:'music/12 - El Primer Trago.mp3'
    },
    {
        titulo:'De Mi Muerte',
        nombre:'Cancerbero',
        fuente:'music/13 - De Mi Muerte.mp3'
    },
    {
        titulo:'Jeremías 17-5',
        nombre:'Cancerbero',
        fuente:'music/14 - Jeremías 17-5.mp3'
    },
];

let indiceCancion=0;

function actualizarInfo(){
    titulo_cancion.textContent=canciones[indiceCancion].titulo;
    artista.textContent=canciones[indiceCancion].nombre;
    cancion.src=canciones[indiceCancion].fuente;
    cancion.addEventListener('loadeddata', function(){});
};
cancion.addEventListener('loadedmetadata',function(){
progreso.max=cancion.duration;
progreso.value=cancion.currentTime;
});
boton_medio.addEventListener('click', reproducir_pausar);
function reproducir_pausar(){
    
    if(cancion.paused){
        reproducir_cancion();
    }else{
        pausar_cancion();
    }
};
function reproducir_cancion(){
    cancion.play();
    icono.classList.add('bi-pause');
    icono.classList.remove('bi-play');
}
function pausar_cancion(){
    cancion.pause(); 
    icono.classList.remove('bi-pause');
    icono.classList.add('bi-play'); 
};

cancion.addEventListener('timeupdate', function(){
    if(!cancion.paused){
        progreso.value=cancion.currentTime;
    }
});

progreso.addEventListener('input',function(){
    cancion.currentTime=progreso.value;
});

boton_adelante.addEventListener('click' ,function(){
    indiceCancion=(indiceCancion+1)%canciones.length;
    actualizarInfo();
    reproducir_cancion();
});
boton_atras.addEventListener('click' ,function(){
    indiceCancion=(indiceCancion-1+canciones.length)%canciones.length;
    actualizarInfo();
    reproducir_cancion();
});

actualizarInfo()








//console.log()

