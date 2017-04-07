import { Component, OnInit } from '@angular/core';
//import { AuthGuard } from '../../auth.service';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id.toString(),
    selector: 'profile',
    templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit { 
    name: any;
    state: any;

    constructor(public af: AngularFire, private router: Router) {

        this.af.auth.subscribe(auth => {
            if (auth) {
                this.name = auth;
                this.state = auth.auth.getToken;
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

