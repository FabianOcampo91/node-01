// import * as hola from './hello'
import hello from './hello.js'
// import { helloForName as holaNombre} from './helloForName.js'
import { helloForName } from './helloForName.js'

function main() {
  //llamar a la funcion hello
  console.log(hello);

  console.log(hello());
  //llamar a la funcion
  //helloForName enviandole
  //un nombre
  const msg = helloForName('Fabian');
  console.log(msg);

}

main()