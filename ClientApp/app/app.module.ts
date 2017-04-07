import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { HomeComponent } from './components/home/home.component';
import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './components/login/login.component';
import { EmailComponent } from './components/email/email.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './auth.service';
import { routes, appRoutingProviders } from './app.routes';
//import { PushNotificationsModule } from 'angular2-notifications';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { ProductList } from './components/product/product.list.component';
import { ProductService } from './components/product/product.service';
import { ProductForm } from './components/product/productform.component';


export const firebaseConfig = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    storageBucket: '',
    messagingSenderId: ''
};



@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        EmailComponent,
        SignupComponent,
        ProfileComponent,
        ProductList,
        ProductForm
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        AngularFireModule.initializeApp(firebaseConfig),
        routes,
        //PushNotificationsModule,
        SimpleNotificationsModule.forRoot(),
        FormsModule       
    ],
    providers: [AuthGuard, ProductService, appRoutingProviders]
   
    
})



export class AppModule {
}
