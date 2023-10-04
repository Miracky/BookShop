import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Nav } from '../nav/nav';
import { Observable } from 'rxjs';

@Injectable()
export class ProductTestService {

  constructor(private http:HttpClient) { }

  path= "http://localhost:3000/products"


  getProducts(categoryId:number):Observable<Nav[]>{

    let newPath = this.path;
    if(categoryId){
      newPath = newPath + "?categoryId=" + categoryId
    }
    
    return this.http.get<Nav[]>(this.path );
  }
}
