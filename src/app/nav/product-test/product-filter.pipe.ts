import { Pipe, PipeTransform } from '@angular/core';
import { Nav } from '../nav';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {


  transform(value: Nav[], filterText?: any): Nav[] {

    filterText = filterText ? filterText.toLocaleLowerCase():null;

    return filterText ? value.filter((p: Nav) => p.name.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
