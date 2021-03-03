import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


interface user {
    firstName:string,
    lastName:string,
    email:string,
    phoneNumber:string,
    Image1:File
  }
@Injectable({
    providedIn:'root'
})

export class RegisterService{
    constructor(private http:HttpClient){}
     base_url=environment.url;

    addUser(data:user){
    let userData = new FormData()
    userData.append('firstName',data.firstName);
    userData.append('lastName',data.lastName);
    userData.append('email',data.email);
    userData.append('phoneNumber',data.phoneNumber);
    userData.append('Image1',data.Image1, data.Image1.name);
    return this.http.post(`${this.base_url}/createUser`,userData)
    }

    getUser(){
        return this.http.get(`${this.base_url}/getAllUser`)
    }
}