import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  fname: string;
  sname: string;
  cellNo :string;
  email: string;
  password1: string;
  password2:string

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  saveItems(){
 
    let AddItems = {
      
      fname: this.fname,
      sname: this.sname,
      cellNo:this.cellNo,
      email:this.email,
      password1:this.password1,
      password2:this.password2

    };
 
    this.viewCtrl.dismiss(AddItems);
 
  }

  viewItem(item){
    this.navCtrl.push(HomePage, {
      item: item
    });
  }

  back(){
    this.navCtrl.push(HomePage);
   }
  

 
  close(){
    this.viewCtrl.dismiss();
  }

}
