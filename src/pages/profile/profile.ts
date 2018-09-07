import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  fname: string;
  sname: string;
  cellNo :string;
  email: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {


    this.fname = this.navParams.get('item').fname;
    this.sname = this.navParams.get('item').sname;
    this.cellNo = this.navParams.get('item').sname;
    this.email = this.navParams.get('item').email;
    console.log('ionViewDidLoad ProfilePage');
  }

  

}
