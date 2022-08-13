import { Action } from '@ngrx/store'

import { Product, FetchProduct } from "../models/product-model";

// export const retrievedProductsList = createAction(
//     '[Random Data API] Products list retrieved',
//     props<{ products: Array<Product> }>()
// )

export enum ProductActionTypes {
    LOAD_PRODUCTS = "[Products] Retreive Products",
    LOAD_PRODUCTS_SUCCESS = "[Products] Retreive Products Success",
    LOAD_PRODUCTS_FAIL = "[Products] Retreive Products Fail",
    SELECTED_PAGE = "[Products] Page Selected To View",
    SELECTED_PRODUCT = "[Products] Product Selected To View"
}

export class RetrieveProducts implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCTS
}

export class RetrieveProductsSuccess implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCTS_SUCCESS;

    constructor(public payload: Product[]) { }
}

export class RetrieveProductsFail implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCTS_FAIL;

    constructor(public payload: string) { }
}

export class PageSelected implements Action {
    readonly type = ProductActionTypes.SELECTED_PAGE;

    constructor(public payload: number) { }
}

export class ProductSelected implements Action {
    readonly type = ProductActionTypes.SELECTED_PRODUCT;

    constructor(public payload: FetchProduct) { }
}

export type Actions =
    | RetrieveProducts
    | RetrieveProductsSuccess
    | RetrieveProductsFail
    | PageSelected
    | ProductSelected;