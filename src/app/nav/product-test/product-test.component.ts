import { Component, Injectable } from '@angular/core';
import { Nav } from '../nav';
import { AlertifyService } from 'src/app/services/alertify.service';
import { NavComponent } from '../nav.component';


@Injectable()

@Component({
  selector: 'app-product-test',
  templateUrl: './product-test.component.html',
  styleUrls: ['./product-test.component.css']
})
export class ProductTestComponent {

  filterText=""

  constructor(private alertifyService:AlertifyService){
    
  }

  

  title="Products"

  products: Nav[]=[
    {id:1, name:"Devlet", writer:"Platon",price:100,categoryId:1,imageUrl:"https://www.kaynakyayinlari.com/u/kaynakyayinlari/img/c/1/-/1-1389453255.jpg"},
    {id:2, name:"Utopia", writer:"Thomes More",price:100,categoryId:2,imageUrl:"https://i.dr.com.tr/cache/500x400-0/originals/0002004772001-1.jpg"},
  ]


  addToCart(nav: { name: string; }){
    this.alertifyService.success(nav.name + " book added to cart")
  }
}
