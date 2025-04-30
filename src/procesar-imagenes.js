const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Directorio de entrada y salida
const entrada = './img';
const salida = './img/optimizadas';

// Crea la carpeta de salida si no existe
if (!fs.existsSync(salida)) {
  fs.mkdirSync(salida);
}

// Lista de imágenes a procesar
const imagenes = ['ramen.jpg', 'sushi.jpg', 'okonomiyaki.jpg'];

imagenes.forEach(nombre => {
  const baseNombre = nombre.replace('.jpg', '');
//Para Resolution switching (dpi)
  sharp('./img/sushi.jpg')
  .resize(600) 
  .toFile('./img/optimizadas/sushi-nigiri@2x.jpg');

  // Imagen de escritorio
  sharp(path.join(entrada, nombre))
    .resize(800)
    .toFormat('webp')
    .webp({ quality: 80 })
    .toFile(path.join(salida, `${baseNombre}-desktop.webp`))
    .then(() => console.log(`✅ ${baseNombre}-desktop.webp generado`))
    .catch(err => console.error(`❌ Error generando ${baseNombre}-desktop.webp`, err));

  // Imagen para tablet/móvil
  sharp(path.join(entrada, nombre))
    .resize(480)
    .toFormat('webp')
    .webp({ quality: 80 })
    .toFile(path.join(salida, `${baseNombre}-tablet.webp`))
    .then(() => console.log(`✅ ${baseNombre}-tablet.webp generado`))
    .catch(err => console.error(`❌ Error generando ${baseNombre}-tablet.webp`, err));
});
