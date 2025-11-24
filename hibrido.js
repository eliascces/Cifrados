const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Funciones de cifrado y descifrado híbrido
function cifrar(texto, clave) {
  return texto.split('').map(char => {
    let num = char.charCodeAt(0);
    let cifrado = (num + clave) % 256;
    return cifrado.toString(2);
  });
}

function descifrar(binarios, clave) {
  return binarios.map(bin => {
    let num = parseInt(bin, 2);
    let original = (num - clave + 256) % 256;
    return String.fromCharCode(original);
  }).join('');
}

// Flujo
rl.question("¿Quieres cifrar (C) o descifrar (D)? ", opcion => {
  rl.question("Ingresa la clave numérica: ", claveStr => {
    let clave = parseInt(claveStr);

    if (opcion.toUpperCase() === "C") {
      rl.question("Ingresa el texto a cifrar: ", texto => {
        let resultado = cifrar(texto, clave);
        console.log("Texto cifrado en binario:", resultado);
        rl.close();
      });
    } else if (opcion.toUpperCase() === "D") {
      rl.question("Ingresa los binarios separados por coma: ", entrada => {
        let binarios = entrada.split(",");
        let resultado = descifrar(binarios, clave);
        console.log("Texto descifrado:", resultado);
        rl.close();
      });
    } else {
      console.log("Opción inválida. Usa C o D.");
      rl.close();
    }
  });
});
