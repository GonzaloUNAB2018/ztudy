import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, MenuController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginPage } from '../login/login';
import { AngularFireProvider } from '../../providers/angular-fire/angular-fire';
import { Observable } from 'rxjs';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  uid: any;
  user: Observable<any>;
  //fbUser: any = '(NickName de Usuario)'
  fbUser: any;
  email: any;
  gender: any;
  gender_letra: string;
  usr: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    public loadCtrl: LoadingController,
    private afProvider: AngularFireProvider,
    public menuCtrl: MenuController
    ) {
      this.menuCtrl.enable(true);
      this.uid = this.afAuth.auth.currentUser.uid;
      console.log(this.uid);
      this.afProvider.readUserData(this.uid).valueChanges().subscribe(u=>{
        this.usr = u;
        if(this.usr){
          this.gender = this.usr.gender;
          if(this.gender === 'H'){
            this.gender_letra = 'o';
          }else if(this.gender==='M'){
            this.gender_letra = 'a'
          }
        }
      })
      if(this.uid){
        this.user = this.afProvider.readUserData(this.uid).valueChanges();

      }
      this.fbUser = this.afAuth.auth.currentUser.displayName;
      this.email = this.afAuth.auth.currentUser.email;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  

}
