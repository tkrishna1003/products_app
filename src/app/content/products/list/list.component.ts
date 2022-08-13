import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as productActions from "../../../store/product.actions";
import * as fromProduct from '../../../store/product.reducer';
import * as fromProductSelectors from '../../../store/products.selectors';
import { Product } from 'src/app/models/product-model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {


  paginatedProductList: Product[] = [];


  productsList$: Observable<Product[]>;
  paginatedProductList$: Observable<Product[]>;
  currentPageNumber$: Observable<number>;
  productsLength: number;
  currentPage: any;

  constructor(
    private store: Store<fromProduct.AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.store.dispatch(new productActions.RetrieveProducts());
    this.productsList$ = this.store.pipe(select(fromProductSelectors.getProducts));
    this.paginatedProductList$ = this.store.pipe(select(fromProductSelectors.getCurrentPageList));
    this.currentPageNumber$ = this.store.pipe(select(fromProductSelectors.getCurrentPageNumber));

    console.log(this.productsList$);
    this.productsList$.subscribe(products => {
      console.log(products);
      this.productsLength = products?.length;
    })
    this.currentPageNumber$.subscribe(pageNumber => {
      this.currentPage = pageNumber;
    })
  }

  /**
   * On page change
   * @param event 
   */
  pageChanged(event: PageChangedEvent): void {
    this.store.dispatch(new productActions.PageSelected(event.page));
  }

  /**
   * To get the image name for path
   * @param indexValue 
   * @returns 
   */
  getBgClass(indexValue: number): string {
    return `${this.currentPage - 1}${indexValue}`;
  }

  /**
   * On selecting the product to view
   * @param selectedProduct 
   * @param indexValue 
   */
  viewSelectedProduct(selectedProduct: Product, indexValue: number): void {
    console.log(selectedProduct);
    let productSelectedToView = selectedProduct;
    this.store.dispatch(new productActions.ProductSelected({ id: selectedProduct.id, imid: `${this.currentPage - 1}${indexValue}` }))
    this.router.navigate(['/details']);
    console.log(productSelectedToView)
  }

}
