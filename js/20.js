// Métodos de propiedad
const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el ID: ${id}`)// apostrofe inclinado Alt+9+6
    },
    pausar: function() {
        console.log('Pausando...') //Apostrofe simple.
    },
    crearPlayList: function(nombre) {
        console.log(`Crando la playlist: ${nombre}`)
    },
    reproduciendoPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`)
    },
};

// Las funciones tambien se pueden colocar por fuera del objeto.
reproductor.borrarCancion = function (id) {
    console.log(`Eliminando la canción: ${id}`)
}

reproductor.reproducir(3888);
reproductor.pausar();
reproductor.borrarCancion(5626);
reproductor.crearPlayList('Rock Metal');
reproductor.reproduciendoPlaylist('Rock');