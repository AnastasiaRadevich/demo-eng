import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public backgroundToggle: boolean = false;
  @Output() public sidenavToggle: EventEmitter<Event> = new EventEmitter();

  public onToggleSidenav = () => {
  this.sidenavToggle.emit();
  }
}
