import { LoginPage } from './../login/login';
import { ViewPage } from './../view/view';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import{getInfo} from './../../Services/getInfo.service';





@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {

  Codetribes=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,private service:getInfo) {

   this.Codetribes=this.service.getCodetribes();
  }

   


  close(){

    this.viewCtrl.dismiss();
  }

  viewProfile(index:number)
  {
    this.service.addDetails(index);
    this.navCtrl.push(ViewPage)
//this.navCtrl.push(ViewPage,{codetribes:this.Codetribes});
  }


  
}
