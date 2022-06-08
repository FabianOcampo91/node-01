//INTEERFACE:  moldes que representan estructuras de datos
//CLASE: molde para crear objetos

export interface IClub {
  id: number
  name: string
}

interface IRespuesta extends IClub{
  msg: string
 
}

export const clubes: IClub[] = []

const createClub = (id: number, name: string): IRespuesta => {
  clubes.push({id, name})
  return {msg: 'Club successfuly reates', name, id }
}

//DEsafio: la estructura de la respuesta deberia ser
//{msg: '', value: 'river plate', id: 1}

export default createClub
