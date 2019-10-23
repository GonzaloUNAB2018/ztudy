import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

/*
  Generated class for the AngularFireProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AngularFireProvider {

  constructor(
    public http: HttpClient,
    private afDb: AngularFireDatabase
    ) {
    console.log('Hello AngularFireProvider Provider');
  }

  public readUserData(uid){
    return this.afDb.object('User/Students/'+uid+'/Data')
  }

  public createUserStudentData(uid, user){
    this.afDb.database.ref('Users/Students/'+uid+'/Data').set(user);
  }

}