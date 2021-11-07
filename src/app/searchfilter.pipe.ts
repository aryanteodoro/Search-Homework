import { Pipe, PipeTransform } from '@angular/core';
import {Student} from './student';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Students: Student[], searchValue: string): Student[] {

    if(!Students || !searchValue){
      return Students;
    }
    return Students.filter(student => student.Name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
