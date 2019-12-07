import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { User } from '../../modal/user';
//import { FileOpener } from '@ionic-native/file-opener';
import { AngularFireProvider } from '../../providers/angular-fire/angular-fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { InicioPage } from '../inicio/inicio';

@IonicPage()
@Component({
  selector: 'page-user-data',
  templateUrl: 'user-data.html',
})
export class UserDataPage {

  user = {} as User;
  terms: boolean = false;
  uid: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    //private fileOpener: FileOpener,
    public loadCtrl: LoadingController,
    private afProvider: AngularFireProvider,
    private afAuth: AngularFireAuth
    ) {
      this.uid = this.afAuth.auth.currentUser.uid;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDataPage');
  }

  setTerms(){
    console.log(this.terms)
  }

  continue(){
    if(this.terms===false){
      alert('Acepte los terminos y condiciones del curso para continuar')
    }else if(this.terms===true){
      if(
        this.user.nickName&&
        this.user.name&&
        this.user.surname&&
        this.user.run&&
        this.user.gender&&
        this.user.phone&&
        this.user.city
        ){
          let load = this.loadCtrl.create({
            content : 'Guardando Datos'
          });
          load.present().then(()=>{
            this.afProvider.createUserStudentData(this.uid, this.user);
            this.afAuth.auth.currentUser.updateProfile({
              displayName: this.user.nickName
            }).then(()=>{
              this.navCtrl.setRoot(InicioPage).then(()=>{
                load.dismiss();
              }).catch(e=>{
                console.log(e);
                alert(e)
              })
            }).catch(e=>{
              console.log(e);
              alert(e)
            })
          }).catch(e=>{
            console.log(e);
            alert(e)
          })
        }else{
          alert('Faltan datos');
        }
    }
  }

  getTerms(){
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      buttons: [
        {
          text: 'OK'
        },
        {
          text: 'Descargar',
          handler: () => {
            this.downloadPDF();
          }
        }
      ]
    });
    alert.present();
  };

  downloadPDF(){
    /*this.fileOpener.open('https://github.com/GonzaloUNAB2018/ztudy/raw/master/src/files/terminos_y_condiciones_del_curso.pdf', 'application/pdf')
    .then(() => console.log('File is opened'))
    .catch(e => console.log('Error opening file', e));*/
    window.open('https://github.com/GonzaloUNAB2018/ztudy/raw/master/src/files/terminos_y_condiciones_del_curso.pdf');
  };

}
