import CardInterface from './card.interface';

export interface CardStatesInterface {
  isLoading: boolean;
  card: CardInterface;
  error: string | null;
}
