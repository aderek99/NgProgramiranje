import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  public testFunkcija(){
    console.log("pozz");
  }

  public getBlogPostovi(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  public getDrzave(){
    return this.http.get('http://bitologybh-001-site6.dtempurl.com/api/drzave')
  }
  
  public getDrzavaPoCiocKodu(ciocKod:string){
    return this.http.get(`http://bitologybh-001-site6.dtempurl.com/api/drzave/${ciocKod}`)
  }
}
