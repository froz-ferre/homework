import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: Array<any>, func: Function): any {
    const filteredArray = [];
    values.forEach(value => {
      if (func(value) === true) {
        filteredArray.push(value);
      }
    });
    return filteredArray;
  }

}
