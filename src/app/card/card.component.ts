import {Component, Input, Output, EventEmitter} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface CardData {
  title: string;
  image: string;
  words: CardWord[];
  state: 'default' | 'flipped' | 'matched';
  isCollection: boolean;
  id: number;
}
export interface CardWord {
  title: string;
  translate: string;
  image: string;
  state: 'default' | 'flipped' | 'matched';
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
  trigger('cardFlip', [
  state('default', style({
  transform: 'none'
  })),
  state('flipped', style({
  transform: 'rotateY(180deg)'
  })),
  transition('default => flipped', [
  animate('400ms')
  ]),
  transition('flipped => default', [
  animate('200ms')
  ])
  ])
]
})

export class CardComponent {
   @Input() public data: CardData;
   @Input() public wordData: CardWord;
   @Output() public cardsCollection: EventEmitter<CardData> = new EventEmitter<CardData>();

  public cardClicked = () => {
  if (this.data.state === 'default' && this.data.isCollection === true) {
  this.cardsCollection.emit(this.data);
  return this.data.isCollection = false;

  if (this.data.state === 'default') {
  this.data.state = 'flipped';
  } else {
  this.data.state = 'default';
  }
  }
  }

}
