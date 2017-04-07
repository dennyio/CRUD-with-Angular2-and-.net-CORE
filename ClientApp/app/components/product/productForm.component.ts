import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { ProductService, IProduct } from './product.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
    moduleId: module.id.toString(),
    selector: 'productform',
    templateUrl: './productForm.component.html'    
 })

export class ProductForm {
    constructor(private _service: ProductService, private _simpleNotificationservice: NotificationsService) {
    }
    model = new Product(0,'','');
    submitted = false;
   
    onSubmit() { 
        console.log("Form Sumbmitted");
        this.submitted = true; 
        this._service.Add(this.model).then(data => {
            this._service.announceChange(1);
            this._simpleNotificationservice.success(
                'Application',
                'Product added!'
            );
            this.model.name = "";
            this.model.description = ""; 
        })
    }

    public options = {
        position: ["bottom", "right"],
        timeOut: 2000,
        lastOnBottom: true,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: true,
        maxLength: 18
    }
}
