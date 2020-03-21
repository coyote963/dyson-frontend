import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestamp'
})
export class TimestampPipe implements PipeTransform {
  transform(value: string): Date {
    return new Date(parseInt(value.substring(0, 8), 16) * 1000);
  }

}
