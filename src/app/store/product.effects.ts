import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap, catchError, map } from 'rxjs';
import { DataApiService } from '../services/data-api.service';
import * as productActions from './product.actions';
import { Product } from '../models/product-model';

@Injectable()
export class ProductEffect {

    constructor(
        private actions_p: Actions,
        private apiDataService: DataApiService
    ) { }

    loadProducts = createEffect(() => this.actions_p.pipe(
        ofType<productActions.RetrieveProducts>(
            productActions.ProductActionTypes.LOAD_PRODUCTS
        ),
        mergeMap((actions: productActions.RetrieveProducts) =>
            this.apiDataService.getProducts().pipe(
                map(
                    (products: Product[]) =>
                        new productActions.RetrieveProductsSuccess(products)
                ),
                catchError(err => of(new productActions.RetrieveProductsFail(err)))
            )
        )
    ))

}