import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class PeticionesServices{

    private url:string = 'https://reqres.in/';
    constructor(public _http:HttpClient)
    {

    }


    getUSers():Observable<any>{
        return this._http.get(this.url+'api/users?page=2');
    }
}