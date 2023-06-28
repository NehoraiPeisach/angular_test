export default interface CardInterface {
  imgUrl: string;
  name: string;
  age: number;
}

export const defaultCard: CardInterface = { imgUrl: '', name: '', age: 0 };
