import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alternateNames'
})
export class AlternateNamesPipe implements PipeTransform {

  transform(value: string[]): string {
    return value.slice(0, value.length - 1).join(", ")
  }

}
