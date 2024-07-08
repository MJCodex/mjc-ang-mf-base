import { Component } from '@angular/core';
import {CommonsLibService} from "@commons-lib";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(
    public commonsLibService: CommonsLibService
  ) { }
}
