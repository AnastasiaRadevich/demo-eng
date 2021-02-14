import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordShareService {
  public word: BehaviorSubject<string> = new BehaviorSubject(' example ');
  public currentWord: Observable<string> = this.word.asObservable();

  public meaning: BehaviorSubject<string> = new BehaviorSubject(' to show how to do something ');
  public currentMeaning: Observable<string> = this.meaning.asObservable();

  public example: BehaviorSubject<string> = new BehaviorSubject(' A teacher should set a good example. ');
  public currentExample: Observable<string> = this.example.asObservable();

  public updateWord(w: string): void {
  this.word.next(w);
  }

  public updateMeaning(m: string): void {
  this.meaning.next(m);
  }

  public updateExample(u: string): void {
  this.example.next(u);
  }
}
