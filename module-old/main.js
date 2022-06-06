const hello = require('./hello.js')
const saludo = require('./helloForName')

function main() {
  //llamar a la funcion hello
  console.log(hello);

  console.log(hello());
  //llamar a la funcion
  //helloForName enviandole
  //un nombre
  const msg = saludo('Fabian');
  console.log(msg);
}

main()