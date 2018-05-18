import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: Array<any>, callback: Function): any {
    const filteredArray = values.filter(v => callback(v));

    // values.forEach(value => {
    //   if (func(value) === true) {
    //     filteredArray.push(value);
    //   }
    // });
    return filteredArray;
  }

}
