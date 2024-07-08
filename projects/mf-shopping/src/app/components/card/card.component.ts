import { Component } from '@angular/core';
import {CommonsLibService} from "@commons-lib";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  constructor(
    private _commonsLibService: CommonsLibService
  ) { }

  addToCar(){
    this._commonsLibService.sendData('mjc');
  }
}
