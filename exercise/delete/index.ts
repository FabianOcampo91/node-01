import { IClub, clubes } from "../create";

export interface IResponse {
  msg: string;
  status: boolean;
}

const deleteClub = (id: number): IResponse => {
  const pos = clubes.findIndex((club: IClub) => club.id === id);
  if (pos === -1) {
    return {
      msg: "Club Invalido",
      status: false,
    };
  } else {
    clubes.splice(pos, 1);
    return {
      msg: "Club eliminado exitosamente",
      status: true,
    };
  }
};

export default deleteClub;
