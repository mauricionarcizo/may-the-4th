import { AppState } from './app.global';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { CacheService } from "ionic-cache/ionic-cache";

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Shake } from '@ionic-native/shake';
import { NativeAudio } from '@ionic-native/native-audio';
import { AudioService } from '../providers/audio-service/audio-service';
import { SwapiProvider } from '../providers/swapi/swapi';
import { OmdbProvider } from '../providers/omdb/omdb';
import { GoogleImagesProvider } from '../providers/google-images/google-images';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CountdownTimerComponent } from '../components/countdown-timer/countdown-timer';

@NgModule({
  declarations: [
    MyApp,
    CountdownTimerComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    AppState,
    StatusBar,
    SplashScreen,
    Shake,
    NativeAudio,
    AudioService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SwapiProvider,
    CacheService,
    OmdbProvider,
    GoogleImagesProvider,
    InAppBrowser,
  ]
})
export class AppModule {}
