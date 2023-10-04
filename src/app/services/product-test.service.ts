import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Nav } from '../nav/nav';
import { Observable } from 'rxjs';

@Injectable()
export class ProductTestService {

  constructor(private http:HttpClient) { }

  path= "http://localhost:3000/products"


  getProducts(categoryId: any):Observable<Nav[]>{

    let newPath = this.path;
    if(categoryId)
    
    return this.http.get<Nav[]>(this.path + "?categoryId=" + categoryId);
  }
}
