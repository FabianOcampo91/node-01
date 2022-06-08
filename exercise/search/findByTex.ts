import { IClub, clubes } from "../create";

export const findByTex = (text: string): IClub[] => {
  const res = clubes.filter((club: IClub) =>
    club.name.toLowerCase().includes(text.toLowerCase())
  );
  return res;
};
