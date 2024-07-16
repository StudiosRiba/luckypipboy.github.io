// Definir las coordenadas iniciales y el nivel de zoom
var initialCoords = [540, 540]; // Coordenadas iniciales
var initialZoom = 0; // Nivel de zoom inicial

// Crear el mapa
var map = L.map('map', {
    crs: L.CRS.Simple, // Usar un sistema de coordenadas simple para la imagen
    minZoom: 0, // Fijar el zoom mínimo
    maxZoom: 0, // Fijar el zoom máximo (zoom fijo)
    zoomControl: false, // Desactivar el control de zoom por defecto
    dragging: false, // Desactivar el arrastre del mapa
}).setView(initialCoords, initialZoom);

// Añadir la imagen personalizada
var imageUrl = 'MapaVerde.png';
var imageBounds = [[0, 0], [1080, 1080]]; // Coordenadas de la imagen [esquina superior izquierda, esquina inferior derecha]
L.imageOverlay(imageUrl, imageBounds).addTo(map);

// Añadir control de escala (opcional)
L.control.scale().addTo(map);

// Función para deshabilitar el doble clic para hacer zoom
map.doubleClickZoom.disable();

// Función para deshabilitar el scroll del mouse para hacer zoom
map.scrollWheelZoom.disable();

// Función para deshabilitar el control de teclado para hacer zoom
ma
