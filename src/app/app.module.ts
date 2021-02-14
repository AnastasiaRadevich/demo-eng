import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './navigation/header/header.component';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { LayoutComponent } from './layout/layout.component';
import { CardComponent } from './card/card.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { DictionaryResultComponent } from './dictionary/dictionary-result/dictionary-result.component';
import { SearchComponent } from './dictionary/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  AppComponent,
  HeaderComponent,
  HomeComponent,
  SidenavListComponent,
  LayoutComponent,
  CardComponent,
  DictionaryComponent,
  DictionaryResultComponent,
  SearchComponent
  ],
  imports: [
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  RoutingModule,
  MaterialModule,
  ReactiveFormsModule,
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
