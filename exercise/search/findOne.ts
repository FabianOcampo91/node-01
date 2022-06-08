import { clubes, IClub } from "../create";

export const findOne = (id: number): IClub | undefined => {
  const find = clubes.find((club: IClub) => club.id === id);
  return find;
};
