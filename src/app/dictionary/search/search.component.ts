import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DictionaryConnectService } from '../services/dictionary-connect.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public formSearch: FormControl = new FormControl();
  public requestedWord: string;
  constructor(private dc: DictionaryConnectService ) {
  }

  public sendRequest(): void {
  let trimmed: string;
  this.requestedWord = this.formSearch.value;
  if (this.requestedWord != null) {
   trimmed = this.requestedWord.trim();
   if (trimmed.length > 1 && !trimmed.includes(' ')) {
   this.dc.get(trimmed);
   } else {
   alert('Please enter a valid word. Words should contain more than one letter and no spaces.');
   }
   } else {
   alert('Please enter a word.');
   }
  }

}
