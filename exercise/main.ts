import create from "./create";
import deleteClub from "./delete";
import { findAll, findByTex, findOne } from "./search";
import update from "./update";

const main = (): any => {
  // console.log('Hola');
  const msg = create(3, "River Plate");
  create(4, "Boca Juniors");
  console.log(msg);
  const res = findAll();
  console.log(res);
  const filter = findByTex("a");
  console.log(filter);
  const find = findOne(4);
  console.log(find);
  const resDelete = deleteClub(4);
  console.log(resDelete);
  const updateRes = update(3, "River el Más Grande");
  console.log(updateRes);
};

main();
