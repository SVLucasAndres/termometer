import { Component } from '@angular/core';
import lottie, { LottiePlayer } from "lottie-web";
import { defineElement } from "@lordicon/element";
import { RangeCustomEvent } from '@ionic/angular';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  state:boolean = false;
  lottie:any;
  constructor(private media: Media) {}
  
  pinFormatter(value: number) {
    return `${value}`;
  }
  
  playSound() {
    const file: MediaObject = this.media.create('src/media/alert sound.mp3');
    if(this.state){
      file.play();
    }
  }
  ngOnInit() {
    defineElement(lottie.loadAnimation);
  }
  onIonKnobMoveEnd(ev: Event) {
    console.log('ionKnobMoveEnd:', );
    if(parseInt(String((ev as RangeCustomEvent).detail.value)) <= 50){
      this.state=false;
    }else{
      this.state=true;
    }
    this.playSound();
  }
}
