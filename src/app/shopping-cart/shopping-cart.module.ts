import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { AntModule } from 'src/ant/ant.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartListComponent } from './cart-list/cart-list.component';

@NgModule({
  declarations: [CartListComponent],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    AntModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ShoppingCartModule { }
