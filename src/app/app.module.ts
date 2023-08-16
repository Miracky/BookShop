import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './nav/product-test/product-filter.pipe';
import { ProductTestComponent } from './nav/product-test/product-test.component';
import { AlertifyService } from './services/alertify.service';
import { HttpClientModule } from '@angular/common/http'
import { ProductTestService } from './services/product-test.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    ProductTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AlertifyService,ProductTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
