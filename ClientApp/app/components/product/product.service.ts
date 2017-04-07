import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {
    constructor(private _http: Http) { }

    private RegenerateData = new Subject<number>();
  
    RegenerateData$ = this.RegenerateData.asObservable();
   
    announceChange(mission: number) {
            
          this.RegenerateData.next(mission);
    }
    
    loadData(): Promise<IProduct[]> {
        return this._http.get('/api/products')
            .toPromise()
            .then(response => this.extractArray(response))
            .catch(this.handleErrorPromise);
    }    

    Add(model) {
        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        let options = new RequestOptions({ headers: headers });
        delete model["id"];
        let body = JSON.stringify(model);
        return this._http.post('/api/products/', body, options).toPromise().catch(this.handleErrorPromise);
    }
    Update(model) {
        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(model);
        return this._http.put('/api/products/', body, options).toPromise().catch(this.handleErrorPromise);
    }
    Delete(id: number) {  
        return this._http.delete('/api/products/?id=' + id).toPromise().catch(this.handleErrorPromise);
    }    

    protected extractArray(res: Response, showprogress: boolean = true) {
        let data = res.json();
        
        return data || [];
    }

    protected handleErrorPromise(error: any): Promise<void> {
        try {
            error = JSON.parse(error._body);
        } catch (e) {
        }

        let errMsg = error.errorMessage
            ? error.errorMessage
            : error.message
                ? error.message
                : error._body
                    ? error._body
                    : error.status
                        ? `${error.status} - ${error.statusText}`
                        : 'unknown server error';

        console.error(errMsg);
        return Promise.reject(errMsg);
    }
}
export interface IProduct {
     id : number  ,      
     name : string ,      
     description : string
}

