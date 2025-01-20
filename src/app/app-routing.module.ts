import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '', component: LayoutComponent, children: [ //after login, these will be visible. Layout is just a temp component to hold the pages
    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductsPageComponent},
  ]},
  {path: 'cart', component: CartComponent},
  {path: 'order-details', component: OrderDetailsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
