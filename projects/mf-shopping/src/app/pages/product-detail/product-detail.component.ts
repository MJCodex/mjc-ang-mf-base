import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  productId: number;
  constructor(
    private activateRoute: ActivatedRoute
  ) {
    this.productId = this.activateRoute.snapshot.params['productId'];
  }
}
