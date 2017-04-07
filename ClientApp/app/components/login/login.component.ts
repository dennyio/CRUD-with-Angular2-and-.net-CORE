import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';



@Component({
  moduleId: module.id.toString(),
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
 
})
export class LoginComponent implements OnInit {

    error: any;
  
    constructor(public af: AngularFire, private router: Router) {

    }

    loginFb() {
        this.af.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Popup,
        }).then(
            (success) => {
                this.router.navigate(['/profile']);
            }).catch(
            (err) => {
                this.error = err;
            })             
    }

    loginGoogle() {
        this.af.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Popup,
        }).then(
            (success) => {
                this.router.navigate(['/profile']);
            }).catch(
            (err) => {
                this.error = err;
        })  
    }




  ngOnInit() {
  }

}
