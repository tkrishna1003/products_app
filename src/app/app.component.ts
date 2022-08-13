import { Component, OnInit } from '@angular/core';
import { DataApiService } from './services/data-api.service';

import { Store } from '@ngrx/store';
//import { retrievedProductsList } from './store/product.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'products_app';

  constructor(
    private productsService: DataApiService,
    private store: Store
  ) { }

  ngOnInit(): void {
    // this.productsService.getProducts().subscribe((products) => {
    //   console.log(this.store);
    //   console.log(products);
    //   this.store.dispatch(retrievedProductsList({ products }));
    // })
  }


}
