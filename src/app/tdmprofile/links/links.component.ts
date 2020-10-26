import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { ColorService } from 'src/app/services/color.service';
import { Player } from 'src/app/player';
import { Observable } from 'rxjs';
import { image } from 'd3';
@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit, AfterViewInit {


  @Input()
  playerId: string
  
  @ViewChild('canvas') public canvas: ElementRef;
  private cx: CanvasRenderingContext2D;
  playerData: Promise<Player>

  
  constructor(private restService: RestService,
      private colorService: ColorService
    ) { }

  ngOnInit(): void {
    this.playerData = this.restService.findPlayer(this.playerId).toPromise()
  }

  
  
  ngAfterViewInit(): void {
    this.playerData.then((playerData) => {
      const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
      this.cx = canvasEl.getContext('2d');
      let imageObj = new Image();
      let hatObj = new Image();
      imageObj.onload = () => {
        this.cx.drawImage(imageObj,0,0)
        var h, s, l;
        [h, s, l] = this.colorService.gmcToHsl(playerData.color)
        this.cx.fillStyle = `hsl(${h*360},${s*100}%,${l*100}%)`;
        this.cx.globalCompositeOperation = "multiply";
        this.cx.fillRect(0,0,300,300);
        this.cx.globalCompositeOperation = "destination-in";
        this.cx.drawImage(imageObj,0,0);
        this.cx.globalCompositeOperation = "source-over";
        hatObj.onload = () => {
          this.cx.drawImage(hatObj, -13, -13)
        }
      }
      const imageName = "../../../assets/boringman.png";
      imageObj.src = imageName;
      hatObj.src = `../../../assets/hats/image_1_${Number(playerData.hat) + 1}.png`;
    })
  }

  ngOnChanges(): void {
    this.ngOnInit()
    this.ngAfterViewInit()
  }
}

