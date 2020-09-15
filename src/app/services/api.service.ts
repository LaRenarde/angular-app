import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService{

   url = 'http://localhost:3000'
  constructor(private client: HttpClient) { }

  getListeCustomers(){
    return this.client.get(`${this.url}/transactions`);
  }
  getListeUsers(){
    return this.client.get(`${this.url}/families`)
  }
}
