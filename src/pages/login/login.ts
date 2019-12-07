import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { User } from '../../modal/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { InicioPage } from '../inicio/inicio';
//import { AngularFireProvider } from '../../providers/angular-fire/angular-fire';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  password: string;
  fbUserName : any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    //private afProvider: AngularFireProvider,
    public loadCtrl: LoadingController,
    public menuCtrl: MenuController
    ) {
      this.menuCtrl.enable(false)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    let load = this.loadCtrl.create({
      content: 'Iniciando Sesión...'
    });
    load.present();
    this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.password).then(user=>{
      if(user){
        this.fbUserName = this.afAuth.auth.currentUser.displayName;
        if(this.fbUserName === null){
          console.log(this.fbUserName);
          this.toHomePage();
          load.dismiss();
        }else{
          console.log(this.fbUserName);
          this.toInicioPage();
          load.dismiss();
        }
      };
    }).catch(e=>{
      console.log(e);
      alert(e);
      load.dismiss();
    })
  }

  toInicioPage(){
    this.navCtrl.setRoot(InicioPage);
  }

  toHomePage(){
    this.navCtrl.setRoot(HomePage);
  }

  toForgotPasswordPage(){
    this.navCtrl.push(ForgotPasswordPage);
  }

}
