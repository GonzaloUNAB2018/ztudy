import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
declare var require: any;
const jQuery = require('jquery');

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  android: boolean;

  constructor(
    public navCtrl: NavController,
    public platform: Platform
    ) {

      if(this.platform.is('android')){
        this.android = true;
      }else{
        this.android = false;
      }
      this.jQ();

  }

  jQ(){
    jQuery(($) => {
      $('.sidebar-dropdown > a').click(function() {
    $('.sidebar-submenu').slideUp(200);
    if (
      $(this)
        .parent()
        .hasClass('active')
    ) {
      $('.sidebar-dropdown').removeClass('active');
      $(this)
        .parent()
        .removeClass('active');
    } else {
      $('.sidebar-dropdown').removeClass('active');
      $(this)
        .next('.sidebar-submenu')
        .slideDown(200);
      $(this)
        .parent()
        .addClass('active');
    }
  });
      $('#close-sidebar').click(() => {
    $('.page-wrapper').removeClass('toggled');
  });
      $('#show-sidebar').click(() => {
    $('.page-wrapper').addClass('toggled');
  });
  });
  }

}
