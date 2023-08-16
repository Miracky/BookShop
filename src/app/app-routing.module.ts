import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductTestComponent } from './nav/product-test/product-test.component';

const routes: Routes = [
  { path: 'products', component: ProductTestComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {path:'products/category/:categoryId', component:ProductTestComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
