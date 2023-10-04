import { Component, Injectable, OnInit } from '@angular/core';
import { Nav } from '../nav';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { ProductTestService } from 'src/app/services/product-test.service';
import { HttpClient } from '@angular/common/http';



@Injectable()

@Component({
  selector: 'app-product-test',
  templateUrl: './product-test.component.html',
  styleUrls: ['./product-test.component.css'],
  providers: [ProductTestService]
})
export class ProductTestComponent implements OnInit {

  filterText = ""

  constructor(private alertifyService: AlertifyService, private activatedRoute: ActivatedRoute, private productTestService: ProductTestService, private http:HttpClient) {

  }

  title = "Products"

  products!: Nav[];

  ngOnInit(): void {



    this.activatedRoute.params.subscribe(params=>{
      this.productTestService.getProducts(params["categoryId"]).subscribe(data => {
        this.products = data
      });
    })
    
  }

  addToCart(nav: { name: string; }) {
    this.alertifyService.success(nav.name + " book added to cart")
  }
}
