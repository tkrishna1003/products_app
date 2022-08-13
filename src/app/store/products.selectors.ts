import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Product } from '../models/product-model';
import { ProductState } from './product.reducer';

const selectProductFeatureState = createFeatureSelector<ProductState>('products');

/**
 * selector for getting all products
 */
export const getProducts = createSelector(
    selectProductFeatureState,
    (state: ProductState) => {
        console.log(state);
        return state.products
    }
)

/**
 * Selector for getting current page number
 */
export const getCurrentPageNumber = createSelector(
    selectProductFeatureState,
    (state: ProductState) => state.currentPage
)

/**
 * Selector for getting current page list data
 */
export const getCurrentPageList = createSelector(
    selectProductFeatureState,
    (state: ProductState) => state.currentPageProducts
)

/**
 * Selector for getting selected product details to fetch
 */
export const getSelectedProductInfo = createSelector(
    selectProductFeatureState,
    (state: ProductState) => state.selectedProductDetails
)




