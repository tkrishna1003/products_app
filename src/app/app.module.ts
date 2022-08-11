import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PaginationModule, PaginationConfig } from 'ngx-bootstrap/pagination'

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/content/products/products.module').then(
        (m) => m.ProductsModule
      )
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    PaginationModule.forRoot(),
  ],
  providers: [PaginationConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
