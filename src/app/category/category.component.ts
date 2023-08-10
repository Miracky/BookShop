import { Component } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  title = "Category List"

  categories: Category[] = [
    { id: 1, name: "Classic" },
    { id: 2, name: "Literature" },
    { id: 3, name: "Education" }

  ]


}
