import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../modal/user';
import { FileOpener } from '@ionic-native/file-opener';

@IonicPage()
@Component({
  selector: 'page-user-data',
  templateUrl: 'user-data.html',
})
export class UserDataPage {

  user = {} as User;
  terms: boolean = false

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private fileOpener: FileOpener
    ) {
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
      alert('Continue')
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
            alert.dismiss();
          }
        }
      ]
    });
    alert.present();
  };

  downloadPDF(){
    this.fileOpener.open('./../files/terminos_y_condiciones_del_curso.pdf', 'application/pdf')
    .then(() => console.log('File is opened'))
    .catch(e => console.log('Error opening file', e));
    //window.open('./../files/terminos_y_condiciones_del_curso.pdf');
  };

}
