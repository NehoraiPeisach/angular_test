import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import CardInterface, { defaultCard } from '../../types/card.interface';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
  Decrement,
  Increment,
  Reset,
} from '../../store/counter/counter.actions';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() info: CardInterface = defaultCard;
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }
}
