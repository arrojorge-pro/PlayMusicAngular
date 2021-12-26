import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})


export class FilterPipe implements PipeTransform {
  constructor() { }


  transform(value: any, searchValue:any): any {
    if (!searchValue) return value;
    return value.filter((v:any) =>
    v.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
    v.artis.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)

  }


}
