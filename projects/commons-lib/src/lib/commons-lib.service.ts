import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommonsLibService {
  private _products: any[] = [];
  private _channelsSource = new BehaviorSubject(0);
  channelPayment$ = this._channelsSource.asObservable();
  sendData(product: any){
    this._products.push(product)
    this._channelsSource.next(this._products.length)
  }
}
