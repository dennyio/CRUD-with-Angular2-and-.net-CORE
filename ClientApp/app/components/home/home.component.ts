import { Component } from '@angular/core';
import { AuthGuard } from '../../auth.service';

@Component({
    moduleId: module.id.toString(),
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    constructor(private auth: AuthGuard) {

    }
}
