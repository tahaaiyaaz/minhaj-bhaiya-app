import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { DatePipe, formatDate } from '@angular/common'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { HttpClientModule } from '@angular/common/http';
import { Tab4Page } from './tab4/tab4.page';
import { Tab3Page } from './tab3/tab3.page';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp({ "projectId": "minhaj-bhaiya-app", "appId": "1:1040599161229:web:ba1d4642015bdb872605c4", "storageBucket": "minhaj-bhaiya-app.appspot.com", "apiKey": "AIzaSyChjOGMG40DrpIL_Rc4RaA8L40BHQMYp6w", "authDomain": "minhaj-bhaiya-app.firebaseapp.com", "messagingSenderId": "1040599161229", "measurementId": "G-GJ4SB8T3RV" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage()), provideRemoteConfig(() => getRemoteConfig())],
  providers: [Tab4Page,Tab3Page,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, HttpClientModule, DatePipe],
  bootstrap: [AppComponent],
})  
export class AppModule { }
