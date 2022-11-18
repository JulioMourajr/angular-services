export type pokemonDados = {
  name: string;
  id: number;
  sprites: {
    other: {
      dream_world:{
        front_default:''
      }
    }
  },
  types:{
    slot:number,
    type:{
      name:string
      url:string
    }
  }[]
}

