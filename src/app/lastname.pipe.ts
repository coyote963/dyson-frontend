import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastname'
})
export class LastnamePipe implements PipeTransform {

  transform(value: string[]): string {
    return value[value.length - 1]
  }

}
