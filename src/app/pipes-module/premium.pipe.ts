import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'premium'
})
export class PremiumPipe implements PipeTransform {

  transform(value: string): string {
    if (value === "1")
    {
      return "Premium"
    }
    else {
      return "Free-To-Play"
    }
  }

}
