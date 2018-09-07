import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{getInfo} from './../../Services/getInfo.service';


/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {

  
  detail=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private service:getInfo) {

    this.detail=this.service.getDatails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }


  getOK()
  {

    this.navCtrl.push(LoginPage)

  }


  

}
