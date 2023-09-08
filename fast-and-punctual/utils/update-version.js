const fs = require('fs');
const path = require('path');

// Ruta al archivo package.json
const packageJsonPath = path.join(__dirname, 'package.json');

// Argumento que se pasa al script con la versión de la release
const releaseVersion = process.argv[2];

if (!releaseVersion) {
  console.error('Por favor, proporciona la versión de la release como argumento.');
  process.exit(1);
}

// Lee el contenido del archivo package.json
fs.readFile(packageJsonPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo package.json:', err);
    return;
  }

  // Parsea el contenido JSON
  const packageJson = JSON.parse(data);

  // Actualiza la versión en el objeto package.json
  packageJson.version = releaseVersion;

  // Convierte el objeto de nuevo a JSON
  const updatedPackageJson = JSON.stringify(packageJson, null, 2);

  // Escribe el archivo package.json actualizado
  fs.writeFile(packageJsonPath, updatedPackageJson, 'utf8', (err) => {
    if (err) {
      console.error('Error al escribir el archivo package.json:', err);
    } else {
      console.log(`Versión actualizada a ${releaseVersion} en package.json`);
    }
  });
});