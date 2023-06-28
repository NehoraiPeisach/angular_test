import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import CardInterface from '../types/card.interface';

@Injectable()
export class CardsService {
  getCards(): Observable<CardInterface[]> {
    const cards: CardInterface[] = [{ imgUrl: '', name: '', age: 0 }];
    return of(cards).pipe(delay(2000));
  }
}
