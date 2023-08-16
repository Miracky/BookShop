import { Component, Injectable, OnInit } from '@angular/core';
import { Nav } from '../nav';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { ProductTestService } from 'src/app/services/product-test.service';



@Injectable()

@Component({
  selector: 'app-product-test',
  templateUrl: './product-test.component.html',
  styleUrls: ['./product-test.component.css'],
  providers: [ProductTestService]
})
export class ProductTestComponent implements OnInit {

  filterText = ""

  constructor(private alertifyService: AlertifyService, private activatedRoute: ActivatedRoute, private productTestService: ProductTestService) {

  }



  title = "Products"

  products!: Nav[];

  ngOnInit(): void {
    this.productTestService.getProducts().subscribe(data => {
      this.products = data
    });
  }


  addToCart(nav: { name: string; }) {
    this.alertifyService.success(nav.name + " book added to cart")
  }
}
