import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
  await TestBed.configureTestingModule({
  declarations: [
  AppComponent
  ],
  }).compileComponents();
  });

  it('should create the app', () => {
  const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
  const app: AppComponent = fixture.componentInstance;
  expect(app).toBeTruthy();
  });

  it(`should have as title 'easy-lang'`, () => {
  const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
  const app: AppComponent = fixture.componentInstance;
  expect(app.title).toEqual('easy-lang');
  });

  it('should render title', () => {
  const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  const compiled: Element = fixture.nativeElement;
  expect(compiled.querySelector('.content span').textContent).toContain('easy-lang app is running!');
  });
});
