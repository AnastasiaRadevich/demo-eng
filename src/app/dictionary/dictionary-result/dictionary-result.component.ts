import { Component, OnInit } from '@angular/core';
import {WordShareService} from '../services/word-share.service';

@Component({
  selector: 'app-dictionary-result',
  templateUrl: './dictionary-result.component.html',
  styleUrls: ['./dictionary-result.component.scss']
})
export class DictionaryResultComponent implements OnInit {

  public word: string;
  public meaning: string;
  public example: string;
  public type: string;

  constructor(private wordShare: WordShareService) { }

  public ngOnInit(): void {
  this.wordShare.currentWord.subscribe((w: string) => this.word = w);
  this.wordShare.currentMeaning.subscribe((m: string) => this.meaning = m);
  this.wordShare.currentExample.subscribe((e: string) => this.example = e);
  }

}
