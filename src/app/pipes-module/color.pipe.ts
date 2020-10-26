import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: string): string {
    let r, g, b : Number;
    [r, g, b] = this.transformToRGB(value)
    return `rgb(${r},${g},${b})`
  }

  transformToRGB(value: string): Array<Number> {
    var colorvalue = parseInt(value)
    var b = Math.trunc(colorvalue / (256 ** 2))
    var remainder = Math.trunc(colorvalue % (256 ** 2))
    var g = Math.trunc(remainder / 256)
    var r = Math.trunc(remainder % 256)
    return [r, g, b];
  }

  
}
