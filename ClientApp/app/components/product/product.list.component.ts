import { Component, OnInit } from '@angular/core';
import { ProductService, IProduct } from './product.service';
import { ProductForm } from './productform.component';
import { Subscription } from 'rxjs/Subscription';
import { NotificationsService } from 'angular2-notifications';


@Component({
    moduleId: module.id.toString(),
    selector: 'product',
    templateUrl: './product.list.component.html'
})

export class ProductList extends OnInit {
    subscription: Subscription;

    Refresh() {
        this._service.loadData().then(data => {
            this.products = data;
        })
    }
    constructor(private _service: ProductService, private _simpleNotificationservice: NotificationsService) {
        super();
        this.subscription = _service.RegenerateData$.subscribe(
            mission => {
                console.log("Good !! ", mission);
                this.Refresh();
            });
    }

    ngOnInit() {
        this.Refresh();
    }
    onUpdate(elem) {
        console.log(elem);
        this._service.Update(elem).then(data => {
            this._simpleNotificationservice.success(
                'Application',
                'Product updated!'               
            );
        })
    }
    onDelete(elem: number) {
        console.log("Delete Form ! ");
        console.log(elem);
        this._service.Delete(elem).then(data => {
            this.Refresh();
            this._simpleNotificationservice.success(
                'Application',
                'Product deleted!'
            );
        })
    }
    products: IProduct[] = [];

    public options = {
        position: ["bottom", "right"],
        timeOut: 3000,
        lastOnBottom: true,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: true,
        maxLength: 18
    }
    
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
