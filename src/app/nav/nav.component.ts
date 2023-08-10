import { Component, OnInit, } from '@angular/core';
import { ProductTestComponent } from './product-test/product-test.component';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [ProductTestComponent]
})
export class NavComponent implements OnInit {


  constructor(private productTestComponent: ProductTestComponent) {
    
  }

  
  

  ngOnInit(){
    this.productTestComponent.filterText="das"
  }
  // title="BABABABA"

  // products: Nav[]=[
  //   {id:1, name:"Devlet", writer:"Platon",price:100,categoryId:1,imageUrl:"https://www.kaynakyayinlari.com/u/kaynakyayinlari/img/c/1/-/1-1389453255.jpg"},
  //   {id:2, name:"Utopia", writer:"Thomes More",price:100,categoryId:2,imageUrl:"https://i.dr.com.tr/cache/500x400-0/originals/0002004772001-1.jpg"},
  // ]
}
