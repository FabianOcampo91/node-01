import { IClub, clubes } from "../create";
import { IResponse } from "../delete";

const update = (id: number, name: string): IResponse => {
  const pos = clubes.findIndex((club: IClub) => club.id === id);
  if (pos === -1) {
    return {
      msg: "Club Invalido",
      status: false,
    };
  } else {
    clubes[pos].name = name;
    return {
      msg: "Club Encontrado",
      status: true,
    };
  }
};

export default update;
