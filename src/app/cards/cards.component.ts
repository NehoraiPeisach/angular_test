import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { CardComponent } from './components/card/card.component';
import CardInterface from './types/card.interface';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, TitleComponent, CardComponent],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  dogsList: CardInterface[] = [];

  ngOnInit(): void {
    for (let i = 1; i < 10; i++) {
      this.dogsList.push({
        imgUrl: `https://placedog.net/500/280?id=${i}`,
        name: 'Dog' + i,
        age: Math.floor(Math.random() * 10),
      });
    }
  }
}
