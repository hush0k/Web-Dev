import {provideRouter, RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {HomeComponent} from './home/home.component';
import {CartComponent} from './cart/cart.component';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'category/:category', component: ProductListComponent},
  {path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const appConfig = {
  providers: [provideRouter(routes)]
};
