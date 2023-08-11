import { Component, Injectable, OnInit } from '@angular/core';
import { Nav } from '../nav';
import { AlertifyService } from 'src/app/services/alertify.service';
import { HttpClient} from '@angular/common/http';



@Injectable()

@Component({
  selector: 'app-product-test',
  templateUrl: './product-test.component.html',
  styleUrls: ['./product-test.component.css']
})
export class ProductTestComponent implements OnInit{

  filterText:any = ""

  constructor(private alertifyService: AlertifyService, private http:HttpClient) {

  }

  path= "http://localhost:3000/products"

  title = "Products"

  products!: Nav[];

  ngOnInit(): void {
      this.http.get<Nav[]>(this.path).subscribe(data=>{
        this.products= data
      });
  }


  addToCart(nav: { name: string; }) {
    this.alertifyService.success(nav.name + " book added to cart")
  }
}
