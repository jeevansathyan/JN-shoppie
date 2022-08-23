import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
// to redirect to view all produycts while the user requests localhost,
{path:'',redirectTo:'products',pathMatch:'full'},
//lazy loaded products module
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
