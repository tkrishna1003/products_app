import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product-model';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {



  constructor(private http: HttpClient) { }

  /**
   * This method retrives the coffee products from randam-data-api
   * @returns 
   */
  getProducts(): Observable<Array<Product>> {
    return this.http.get<any>('https://random-data-api.com/api/coffee/random_coffee?size=50').pipe(map((products) => products || []))
  }

}
