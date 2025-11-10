import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { subscribeOn } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  baseUrl="http://52.4.81.107/api/bigcommerce/"


  getCategories(){
     return this.http.get(`${this.baseUrl}categories/tree?page=1&limit=50`);
  }
}
