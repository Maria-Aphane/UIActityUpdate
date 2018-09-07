import { ProfilePage } from './../profile/profile';
import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { NavController,ModalController,ViewController } from 'ionic-angular';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public items = [];

  constructor(public navCtrl: NavController,public modalCtrl:
    ModalController, private viewCtrl:ViewController) {

  }

  getDetail(){
    let addModal = this.modalCtrl.create(RegisterPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItems(item);
          }
 
    });
 
    addModal.present();

 
  }
 
  saveItems(item){
    this.items.push(item);
 
  }

  viewItems(item){
    this.navCtrl.push(ProfilePage,{item:item});
  }

  close(){
    this.viewCtrl.dismiss();
  }
 

}
