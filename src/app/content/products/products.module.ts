import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { StoreModule } from '@ngrx/store';
import { productReducer } from 'src/app/store/product.reducer';

import { EffectsModule } from '@ngrx/effects';
import { ProductEffect } from 'src/app/store/product.effects';
import { FormsModule } from '@angular/forms';
import { IconsModule } from 'src/app/utils/icons/icons.module';

@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    StoreModule.forFeature("products", productReducer),
    EffectsModule.forFeature([ProductEffect]),
    IconsModule
  ]
})
export class ProductsModule { }
