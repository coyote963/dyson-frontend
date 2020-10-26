import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor() { }
  gmcToHsl(value : string) : Array<number> {
    var colorvalue = parseInt(value)
    var b = Math.trunc(colorvalue / (256 ** 2))
    var remainder = Math.trunc(colorvalue % (256 ** 2))
    var g = Math.trunc(remainder / 256)
    var r = Math.trunc(remainder % 256)
    r /= 255, g /= 255, b /= 255;
  
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
  
    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
  
      h /= 6;
    }
  
    return [ h, s, l ];
  }
}
