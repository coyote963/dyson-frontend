import { Pipe, PipeTransform } from '@angular/core';
import { strict } from 'assert';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: string): string {
    var colorvalue = parseInt(value)
    var b = Math.trunc(colorvalue / (256 ** 2))
    var remainder = Math.trunc(colorvalue % (256 ** 2))
    var g = Math.trunc(remainder / 256)
    var r = Math.trunc(remainder % 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
  }
}
