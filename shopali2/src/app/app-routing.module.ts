import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {IphoneListComponent} from './iphone-list/iphone-list.component';
import {PlayconsoleListComponent} from './playconsole-list/playconsole-list.component';
import {LaptopListComponent} from './laptop-list/laptop-list.component';

const routes: Routes = [
  {path: 'product', component: ProductListComponent},
  {path: 'iphone', component: IphoneListComponent},
  {path: 'playconsole', component: PlayconsoleListComponent},
  {path: 'laptop', component: LaptopListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ProductListComponent, IphoneListComponent, PlayconsoleListComponent, LaptopListComponent]
