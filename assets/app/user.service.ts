import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class UserService {

    constructor(private _http:HttpClient) {}

    register(body:any) {
        return this._http.post('http://localhost:3000/autenticacao/signup', body, {
            observe: 'body',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }
}