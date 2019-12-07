import { Component, ViewChild } from '@angular/core';
import { Platform, LoadingController, Nav, MenuController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { AngularFireAuth } from '@angular/fire/auth';
//import { InicioPage } from '../pages/inicio/inicio';
//import { HomePage } from '../pages/home/home';
//import { UserDataPage } from '../pages/user-data/user-data';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public loadCtrl: LoadingController,
    public afAuth: AngularFireAuth,
    public menuCtrl: MenuController,
    public alertCtrl: AlertController
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  logout(){
    let alert_logout = this.alertCtrl.create({
      title: 'Salida',
      message: '¿Realmente desea salir del portal?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
         }
        },
        {
          text: 'Ok',
          handler: () => {
            this.signout();
          }
        }
      ]
    })
    alert_logout.present();
  }

  signout(){
    let load_out = this.loadCtrl.create({
      content: 'Signing Out!'
    });
    load_out.present();
    this.afAuth.auth.signOut().then(()=>{
      this.nav.setRoot(LoginPage).then(()=>{
        this.menuCtrl.enable(false);
        load_out.dismiss();
      }).catch(e=>{
        console.log(e);
        alert(e);
        load_out.dismiss();
      })
    })
  }
}

