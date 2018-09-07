import { DisplayPage } from './../display/display';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  
  getlogin(){

    this.navCtrl.push(DisplayPage);
  }

  getDetail(){

    this.navCtrl.push(HomePage);

       }

}
