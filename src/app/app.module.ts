import { ViewPage } from './../pages/view/view';
import { DisplayPage } from './../pages/display/display';
import { ProfilePage } from './../pages/profile/profile';
import { RegisterPage } from './../pages/register/register';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {getInfo} from './../Services/getInfo.service';







@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    DisplayPage,
    ViewPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    DisplayPage,
    ViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    getInfo,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
