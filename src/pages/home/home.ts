import { Component } from '@angular/core';
import { NavController, Platform, LoadingController } from 'ionic-angular';
import { UserDataPage } from '../user-data/user-data';
declare var require: any;
const jQuery = require('jquery');

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  android: boolean;
  image: string = null;
  nextbutton: boolean = false;
  backButton: boolean = false;
  n : number = 0;

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public loadCtrl: LoadingController
    ) {

      if(this.platform.is('android')){
        this.android = true;
      }else{
        this.android = false;
      }

      //document.getElementById(this.n.toString());
      setTimeout(() => {
        this.image = './assets/imgs/personajes/ALEX/ALEX.jpg';
        setTimeout(() => {
          this.nextbutton = true;
        }, 2000);
      }, 2000);
  }

  next(){
    this.n = this.n + 1;
    //document.getElementById(this.n.toString());
    this.nextbutton = false;
    this.backButton = false;
    setTimeout(() => {
      this.nextbutton = true;
      this.backButton = true;
    }, 2000);
  }

  back(){
    this.n = this.n - 1;
    if(this.n===0){
      this.backButton=false;
    }
  }

  form(){
    let load = this.loadCtrl.create({
      content: 'Loading Form',
      duration: 2000
    });
    load.present();
    load.onDidDismiss(()=>{
      this.navCtrl.setRoot(UserDataPage);
    });
    
  }

  

}
