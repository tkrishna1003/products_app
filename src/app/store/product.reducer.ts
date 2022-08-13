import * as ProductActions from './product.actions';
import * as fromRoot from '../state/app.state';
import { Product, FetchProduct } from '../models/product-model';

export interface ProductState {
    products: Product[],
    currentPage: number,
    itemsPerPage: number,
    currentPageProducts: Product[],
    selectedProductDetails: FetchProduct
}

export interface AppState extends fromRoot.AppState {
    products: ProductState
}

export const initialState: ProductState = {
    products: [],
    currentPage: 1,
    itemsPerPage: 10,
    currentPageProducts: [],
    selectedProductDetails: {
        id: 0,
        imid: '--'

    }
}

export function productReducer(state = initialState, action: ProductActions.Actions): ProductState {
    switch (action.type) {
        case ProductActions.ProductActionTypes.LOAD_PRODUCTS: {
            return {
                ...state
            }
        }
        case ProductActions.ProductActionTypes.LOAD_PRODUCTS_SUCCESS: {
            let startInd = (state.currentPage - 1) * state.itemsPerPage;
            let endInd = (state.currentPage) * state.itemsPerPage;

            return {
                ...state,
                products: action.payload,
                currentPageProducts: action.payload.slice(startInd, endInd)
            }
        }
        case ProductActions.ProductActionTypes.SELECTED_PAGE: {
            let startInd = (action.payload - 1) * state.itemsPerPage;
            let endInd = (action.payload) * state.itemsPerPage;

            return {
                ...state,
                currentPage: action.payload,
                currentPageProducts: [...state.products.slice(startInd, endInd)]
            }
        }

        case ProductActions.ProductActionTypes.SELECTED_PRODUCT: {
            return {
                ...state,
                selectedProductDetails: {
                    id: action.payload.id,
                    imid: action.payload.imid
                }
            }
        }

        default: {
            return state;
        }
    }
}
