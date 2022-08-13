import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as productActions from "../../../store/product.actions";
import * as fromProduct from '../../../store/product.reducer';
import * as fromProductSelectors from '../../../store/products.selectors';
import { FetchProduct, Product } from 'src/app/models/product-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit {

  constructor(
    private store: Store<fromProduct.AppState>,
    private router: Router
  ) { }

  selectedProductDetails$: Observable<FetchProduct>;
  selectedProductInfo: FetchProduct;

  productsList$: Observable<Product[]>;

  selectedProduct: any;

  ngOnInit(): void {
    this.selectedProductDetails$ = this.store.pipe(select(fromProductSelectors.getSelectedProductInfo));
    this.productsList$ = this.store.pipe(select(fromProductSelectors.getProducts));

    this.selectedProductDetails$.subscribe(productFetchInfo => {
      this.selectedProductInfo = productFetchInfo;

    })
    this.productsList$.subscribe(products => {
      console.log(products)
      if (this.selectedProductInfo?.id) {
        this.selectedProduct = products.find(eachProduct => eachProduct.id === this.selectedProductInfo.id);
        console.log(this.selectedProduct);
      } else {
        this.goToList();
      }
    })


  }

  /**
   * To get the image of the product
   * @returns 
   */
  getBgClass(): string {
    return this.selectedProductInfo.imid !== '--' ? this.selectedProductInfo.imid : '00'
  }

  /**
   * To route back to list page
   */
  goToList() {
    this.router.navigate(['/list'])
  }

}
