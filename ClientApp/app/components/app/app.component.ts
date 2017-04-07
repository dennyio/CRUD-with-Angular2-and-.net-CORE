import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
    
})

export class AppComponent implements OnInit { 

    user: any;
    constructor(public af: AngularFire, private router: Router ) {
        this.af.auth.subscribe(user => {
            if (user) {
                // user logged in
                this.user = user;
            }
            else {
                // user not logged in
                this.user = 'none';
            }
        });

    }

   
    logout() {
        this.af.auth.logout();    
        this.router.navigateByUrl('/login');
    }

    ngOnInit() {
    }
}

