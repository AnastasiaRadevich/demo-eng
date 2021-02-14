import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { Word } from '../utils/word';

import { WordShareService } from './word-share.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DictionaryConnectService {

  private wordUrl: string = 'https://api.dictionaryapi.dev/api/v2/entries/en_US/';

  constructor(private http: HttpClient, private wordShare: WordShareService) { }

  public get(search: string): void {
  this.getWord(search).subscribe((wd: Word | symbol)  => {
  this.wordShare.updateWord(wd[0].word);
  this.wordShare.updateMeaning(wd[0].meanings[0].definitions[0].definition);
  this.wordShare.updateExample(wd[0].meanings[0].definitions[0].example);
  });
  }
  public getWord<T>(search: string): Observable<Word | symbol> {
  const url: string = `${this.wordUrl}${search}`;
  return this.http.get(url).pipe(
  tap((_: symbol) => this.log(`fetched word id=${search}`)),
  catchError(this.handleError<Word>(`getWord search=${search}`))
  );
  }

  public handleError <T>(operation: string = 'operation', result?: T): (error: any) => Observable<T> {
  return (error: any) => {
  console.error(error);
  this.log(`${operation} failed: ${error.message}`);
  return of(result as T);
  };
  }
  public log(message: string): void {
  console.log(`Dictionary Service: ${message}`);
  }

}
